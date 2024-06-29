"use client"

import {useOptimistic, useState} from "react";
import {switchBlock, switchFollow} from "@/lib/actions";

const UserInfoCardInteraction = ({
                                     userId,
                                     currentUserId,
                                     isFollowing,
                                     isUserBlocked,
                                     isFollowingSent,
                                 } : {
    userId: string
    currentUserId: string | null
    isFollowing: boolean
    isUserBlocked: boolean
    isFollowingSent: boolean
}) => {

    const [userState,setUserState] = useState({
        following: isFollowing,
        blocked: isUserBlocked,
        followingRequestSent: isFollowingSent,
    })

    const follow = async () => {

        switchOptimisticState("follow"); // optimistic function is called from 43 line

        try {
            await switchFollow(userId);
            setUserState(prevState => ({
                ...prevState,
                following: prevState.following && false,
                followingRequestSent: !prevState.followingRequestSent && !prevState.following ? true : false
            }))
        }
        catch (error) {
            console.error(error);
        }
    }

    const block = async () => {
        switchOptimisticState("block");

        try {
            await switchBlock(userId);
            setUserState(prevState => ({
                ...prevState,
                blocked: !prevState.blocked
            }))
        }
        catch (error){
            console.error(error);
        }
    }

    const [optimisticState, switchOptimisticState] = useOptimistic(
        userState, (state,value: "follow" | "block") => value==="follow" ?({
            ...state,
            following: state.following && false,
            followingRequestSent: !state.followingRequestSent && !state.following ? true : false
        }):({
            ...state,
            blocked: !state.blocked
        })
    )

    return (
        <>
            <form action={follow}>
                <button className={'w-full bg-blue-500 text-white text-sm rounded-md p-2'}>
                    {   optimisticState.following ?
                        "Following" :
                        optimisticState.followingRequestSent ?
                            "Friend Request Sent":
                            "Follow"}
                </button>
            </form>
            <form action={block} className={'self-end'}>
                <button>
                    <span className={'text-red-400 text-xs cursor-pointer'}>
                        {optimisticState.blocked ? "Unblock User": "Block User"}
                    </span>
                </button>
            </form>
        </>
    )
}

export default UserInfoCardInteraction;
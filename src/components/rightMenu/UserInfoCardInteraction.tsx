"use client"

import {useOptimistic, useState} from "react";
import {switchFollow} from "@/lib/actions";

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

        switchOptimisticFollow(""); // optimistic function is called from 43 line

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

    const [optimisticFollow, switchOptimisticFollow] = useOptimistic(
        userState, (state) => ({
            ...state,
            following: state.following && false,
            followingRequestSent: !state.followingRequestSent && !state.following ? true : false
        })
    )

    return (
        <>
            <form action={follow}>
                <button className={'w-full bg-blue-500 text-white text-sm rounded-md p-2'}>
                    {   optimisticFollow.following ?
                        "Following" :
                        optimisticFollow.followingRequestSent ?
                            "Friend Request Sent":
                            "Follow"}
                </button>
            </form>
            <form action={""} className={'self-end'}>
                <span className={'text-red-400 text-xs cursor-pointer'}>
                    {optimisticFollow.blocked ? "Unblock User": "Block User"}
                </span>
            </form>
        </>
    )
}

export default UserInfoCardInteraction;
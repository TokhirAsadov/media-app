import FriendRequests from "@/components/rightMenu/FriendRequests";
import Birthdays from "@/components/rightMenu/Birthdays";
import Ad from "@/components/Ad";
import UserInfoCard from "@/components/rightMenu/UserInfoCard";
import UserMediaCard from "@/components/rightMenu/UserMediaCard";
import {User} from "@prisma/client";
import {Suspense} from "react";

const RightMenu = ({user}:{user?:User}) =>{
    return (
        <div className={"flex flex-col gap-6"}>
            {
                user ? (
                    <>
                        <Suspense fallback={"loading..."}>
                            <UserInfoCard user={user} />
                        </Suspense>
                        <Suspense fallback={"loading..."}>
                            <UserMediaCard user={user} />
                        </Suspense>
                    </>
                ):null
            }
            <FriendRequests />
            <Birthdays />
            <Ad size={"md"} />
        </div>
    )
}

export default RightMenu;
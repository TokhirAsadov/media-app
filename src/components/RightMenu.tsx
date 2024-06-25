import FriendRequests from "@/components/FriendRequests";
import Birthdays from "@/components/Birthdays";
import Ad from "@/components/Ad";
import UserInfoCard from "@/components/UserInfoCard";
import UserMediaCard from "@/components/UserMediaCard";

const RightMenu = ({userId}:{userId?:string}) =>{
    return (
        <div className={"flex flex-col gap-6"}>
            {
                userId ? (
                    <>
                        <UserInfoCard userId={userId} />
                        <UserMediaCard userId={userId} />
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
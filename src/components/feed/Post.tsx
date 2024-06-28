import Image from "next/image";
import Comments from "@/components/feed/Comments";

const Post = () => {
    return (
        <div className={'flex flex-col gap-4'}>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src={"https://images.pexels.com/photos/22590666/pexels-photo-22590666.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"}
                        alt={""}
                        className={"w-10 h-10 rounded-full"}
                        width={40}
                        height={40}
                    />
                    <span className={'font-medium'}>Hello Talk</span>
                </div>
                <Image
                    src={"/more.png"}
                    alt={""}
                    width={16}
                    height={16}
                />
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image
                        src={"https://images.pexels.com/photos/20013177/pexels-photo-20013177.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"}
                        alt={""}
                        fill
                        className={"object-cover rounded-md"}
                    />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex facere fugiat harum id ipsa quaerat, rerum veritatis? Aperiam incidunt pariatur veritatis? Alias atque dolorem earum error possimus vel voluptatibus!</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className={"flex gap-8"}>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image
                            src={"/like.png"}
                            alt={"like"}
                            width={16}
                            height={16}
                            className={"cursor-pointer"}
                        />
                        <span className={"text-gray-300"}>|</span>
                        <span className={"text-gray-500"}>123 <span className={"hidden md:inline"}>Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image
                            src={"/comment.png"}
                            alt={"like"}
                            width={16}
                            height={16}
                            className={"cursor-pointer"}
                        />
                        <span className={"text-gray-300"}>|</span>
                        <span className={"text-gray-500"}>
                            85 <span className={"hidden md:inline"}>Comments</span>
                        </span>
                    </div>
                </div>
                <div className={"flex "}>
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image
                            src={"/share.png"}
                            alt={"like"}
                            width={16}
                            height={16}
                            className={"cursor-pointer"}
                        />
                        <span className={"text-gray-300"}>|</span>
                        <span className={"text-gray-500"}>77 <span className={"hidden md:inline"}>Share</span></span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post;
import Image from "next/image";

const Comments = () => {
    return (
        <div>
            {/*Whire*/}
            <div className="flex items-center gap-4">
                <Image
                    src={"https://images.pexels.com/photos/26018022/pexels-photo-26018022.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}
                    alt={""}
                    width={32}
                    height={32}
                    className={"w-8 h-8 rounded-full"}
                />
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input type="text" placeholder={"Write a comment..."} className={"flex-1 bg-transparent outline-none"} />
                    <Image
                        src={"/emoji.png"}
                        alt={""}
                        width={16}
                        height={16}
                        className={"cursor-pointer"}
                    />
                </div>
            </div>
            {/*Comments*/}
            <div className="">
                {/*Comment*/}
                <div className="flex gap-4 justify-between mt-6">
                    {/*Avatar*/}
                    <Image
                        src={"https://images.pexels.com/photos/26018022/pexels-photo-26018022.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}
                        alt={""}
                        width={40}
                        height={40}
                        className={"w-10 h-10 rounded-full"}
                    />
                    {/*Desc*/}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className={"font-medium"}>Tom Holand</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid blanditiis consequuntur corporis culpa, deserunt distinctio doloremque ea eius eligendi eveniet inventore libero magni nam nihil officia officiis quasi ullam!</p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                <Image src={"/like.png"} alt={"icon"} width={16} height={16} className={'cursor-pointer w-4 h-4'} />
                                <span className={"text-gray-300"}>|</span>
                                <span className={"text-gray-500"}>123 <span>Likes</span></span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>
                    {/*Icon*/}
                    <Image src={"/more.png"} alt={"icon"} width={16} height={16} className={'cursor-pointer w-4 h-4'} />
                </div>
            </div>
        </div>
    )
}

export default Comments;
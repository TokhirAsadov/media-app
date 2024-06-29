import Image from "next/image";
import prisma from "@/lib/client";
import {auth} from "@clerk/nextjs/server";

const AddPost = () =>{

    const {userId} = auth();


    return (
        <div className={'p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'}>
            {/*    AVATAR   */}
            <Image src={"https://images.pexels.com/photos/21937092/pexels-photo-21937092.jpeg"} alt={""} width={48} height={48} className="w-12 h-12 object-cover rounded-full" />
            {/*    POST    */}
            <div className="flex-1">
                {/*TEXT INPUT*/}
                <form action="" className="flex gap-4">
                    <textarea
                        placeholder={"What's on your mind?"}
                        className={"p-2 flex-1 bg-slate-100 rounded-lg"}
                        name={"desc"}
                    ></textarea>
                    <Image src={"/emoji.png"} alt={""} width={20} height={20} className="w-5 h-5 cursor-pointer self-end" />
                    <button>Send</button>
                </form>
                {/*POST OPTIONS*/}
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src={"/addimage.png"} alt={""} width={20} height={20}/>
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src={"/addVideo.png"} alt={""} width={24} height={24}/>
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src={"/poll.png"} alt={""} width={20} height={20}/>
                        Poll
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src={"/addevent.png"} alt={""} width={20} height={20}/>
                        Event
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost;
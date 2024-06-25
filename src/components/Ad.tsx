import Image from "next/image";

const Ad = ({size}:{size: "sm" | "md" | "lg"}) => {
    return (
        <div className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'}>
            {/*  Top  */}
            <div className="flex justify-between items-center text-gray-500 font-medium">
                <span>Sponsored Ads</span>
                <Image src={'/more.png'} alt={""} width={16} height={16} />
            </div>
            {/*  Bottom  */}
            <div className={`flex flex-col mt-4 ${size==="sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size ==="sm" ? "h-24" : size ==="md" ? "h-36":"h-48"}`}>
                    <Image
                        src={'https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
                        alt={""}
                        fill
                        className={'rounded-lg object-cover'}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Image
                        src={'https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
                        alt={""}
                        width={24}
                        height={24}
                        className={'w-6 h-6 rounded-full object-cover'}
                    />
                    <span className={'text-blue-500 font-medium'}>Epam system</span>
                </div>
                <p className={size==="sm" ? "text-xs":"text-sm"}>
                    {size==="sm" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit." :
                        size==="md"?"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi autem error exercitationem obcaecati possimus quas qui ratione."
                            :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi autem error exercitationem obcaecati possimus quas qui ratione. Aspernatur assumenda atque deserunt doloribus earum enim expedita fugit in officiis qui?"}
                </p>
                <button className={'bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'}>
                    Learn more
                </button>
            </div>
        </div>
    )
}

export default Ad;
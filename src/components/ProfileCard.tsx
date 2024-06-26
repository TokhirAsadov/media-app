import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'}>
            <div className="h-20 relative">
                <Image src={'https://images.pexels.com/photos/15807843/pexels-photo-15807843/free-photo-of-istanbul-kucukcekmece.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} alt={''} fill className={'rounded-md'}/>
                <Image src={'https://images.pexels.com/photos/26049751/pexels-photo-26049751/free-photo-of-a-black-and-white-photo-of-a-kangaroo-standing-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} alt={''} width={48} height={48} className={'rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'}/>
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className={'font-semibold'}>Edward Gabriel May</span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <Image
                            src={'https://images.pexels.com/photos/26049751/pexels-photo-26049751/free-photo-of-a-black-and-white-photo-of-a-kangaroo-standing-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                            alt={''}
                            width={12}
                            height={12}
                            className={'rounded-full w-3 h-3 '}
                        />
                        <Image
                            src={'https://images.pexels.com/photos/26049751/pexels-photo-26049751/free-photo-of-a-black-and-white-photo-of-a-kangaroo-standing-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                            alt={''}
                            width={12}
                            height={12}
                            className={'rounded-full w-3 h-3 '}
                        />
                        <Image
                            src={'https://images.pexels.com/photos/26049751/pexels-photo-26049751/free-photo-of-a-black-and-white-photo-of-a-kangaroo-standing-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                            alt={''}
                            width={12}
                            height={12}
                            className={'rounded-full w-3 h-3 '}
                        />
                    </div>
                    <span className={'text-sm text-gray-500'}>500 Followers</span>
                </div>
                <button className={'rounded-md bg-blue-500 text-white text-xs p-2'}>My Profile</button>
            </div>
        </div>
    )
}

export default ProfileCard;
import Link from "next/link";
import Image from "next/image";
import {User} from "@prisma/client";

const UserMediaCard = ({user}:{user:User}) => {
    return (
        <div className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'}>
            {/*    TOP  */}
            <div className="flex justify-between items-center font-medium">
                <span className={'text-gray-500'}>User Media</span>
                <Link href={"/"} className={'text-blue-500 text-xs'}>See all</Link>
            </div>
            {/*  Bottom  */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image
                        src={'https://images.pexels.com/photos/7402403/pexels-photo-7402403.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
                        alt={''}
                        fill
                        className={'object-cover rounded-md'}
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src={'https://images.pexels.com/photos/25875661/pexels-photo-25875661/free-photo-of-a-view-of-a-building-with-a-dome-and-trees.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
                        alt={''}
                        fill
                        className={'object-cover rounded-md'}
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src={'https://images.pexels.com/photos/25745292/pexels-photo-25745292/free-photo-of-a-bowl-of-cherries-standing-on-a-table-next-to-ingredients-and-kitchen-utensils.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
                        alt={''}
                        fill
                        className={'object-cover rounded-md'}
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src={'https://images.pexels.com/photos/14270532/pexels-photo-14270532.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
                        alt={''}
                        fill
                        className={'object-cover rounded-md'}
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src={'https://images.pexels.com/photos/17277316/pexels-photo-17277316/free-photo-of-interior-design-with-art-on-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
                        alt={''}
                        fill
                        className={'object-cover rounded-md'}
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src={'https://images.pexels.com/photos/15301144/pexels-photo-15301144/free-photo-of-foamy-waves-on-the-shore-and-skyscrapers-of-a-coastal-city-in-distance.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
                        alt={''}
                        fill
                        className={'object-cover rounded-md'}
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src={'https://images.pexels.com/photos/18523694/pexels-photo-18523694/free-photo-of-cup-of-coffee-next-to-a-bed.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
                        alt={''}
                        fill
                        className={'object-cover rounded-md'}
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src={'https://images.pexels.com/photos/25539612/pexels-photo-25539612/free-photo-of-the-view-from-the-top-of-a-tall-building.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
                        alt={''}
                        fill
                        className={'object-cover rounded-md'}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserMediaCard;
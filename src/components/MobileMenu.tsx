"use client"

import {useState} from "react";
import Link from "next/link";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className='flex flex-col gap-[4.5px] cursor-pointer'
                onClick={() => {setIsOpen((prev) => !prev)}}
            >
                <div className={'w-6 h-1 bg-blue-500 rounded-sm'} ></div>
                <div className={'w-6 h-1 bg-blue-500 rounded-sm'} ></div>
                <div className={'w-6 h-1 bg-blue-500 rounded-sm'} ></div>
            </div>
            {
                isOpen && (
                    <div>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/"}>Friends</Link>
                        <Link href={"/"}>Groups</Link>
                        <Link href={"/"}>Stories</Link>
                        <Link href={"/"}>Login</Link>
                    </div>
                )
            }
        </div>
    )
}

export default MobileMenu;
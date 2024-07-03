"use client"

import {User} from "@prisma/client";
import {useState} from "react";
import Image from "next/image";
import {updateProfile} from "@/lib/actions";

const UpdateUser = ({user}: {user:User}) => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);

    }

    return (
        <div className={''}>
            <span className={'text-blue-500 cursor-pointer text-xs'}
                onClick={() => setOpen(true)}
            >
                Update
            </span>
            {open && <div
                className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
                <form action={updateProfile}
                      className={'relative p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3'}
                >
                    <h1>Update Profile</h1>
                    <div className="mt-4 text-sm text-gray-500">
                        Use the navbar profile to change the avatar or username.
                    </div>
                    <div className="flex flex-col gap-4 my-4">
                        <label htmlFor="">Cover Picture</label>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <Image
                                src={user.cover || "/noCover.png"}
                                alt={""}
                                width={48}
                                height={32}
                                className={'w-12 h-8 rounded-md object-cover'}
                            />
                            <span className={'text-xs underline text-gray-600'}>Change</span>
                        </div>
                    </div>
                    {/* WRAPPER */}
                    <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                        {/* INPUT */}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className={'text-xs text-gray-500'}>
                                First Name
                            </label>
                            <input name={"name"} className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'} type="text"
                                   placeholder={user.name || "Bahodir"}/>
                        </div>
                        {/* INPUT */}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className={'text-xs text-gray-500'}>
                                Surname
                            </label>
                            <input name={"surname"} className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'} type="text"
                                   placeholder={user.surname || "Abdullayev"}/>
                        </div>
                        {/* INPUT */}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className={'text-xs text-gray-500'}>
                                Description
                            </label>
                            <input name={"description"} className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'} type="text" placeholder={user.description || "Life is beautiful.."} />
                        </div>
                        {/* INPUT */}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className={'text-xs text-gray-500'}>
                                City
                            </label>
                            <input name={"city"} className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'} type="text" placeholder={user.city || "Tashkent"} />
                        </div>
                        {/* INPUT */}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className={'text-xs text-gray-500'}>
                                School
                            </label>
                            <input name={"school"} className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'} type="text" placeholder={user.school || "MIT"} />
                        </div>
                        {/* INPUT */}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className={'text-xs text-gray-500'}>
                                Work
                            </label>
                            <input name={"work"} className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'} type="text" placeholder={user.work || "Apple Inc."} />
                        </div>
                        {/* INPUT */}
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className={'text-xs text-gray-500'}>
                                Website
                            </label>
                            <input name={"website"} className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'} type="text" placeholder={user.website || "tohir.uz"} />
                        </div>
                    </div>
                    <button className={'bg-blue-500 p-2 mt-2 rounded-md text-white'}>Update</button>
                    <div className="absolute text-lg right-2 top-3 cursor-pointer" onClick={handleClose}>
                        x
                    </div>
                </form>
            </div>}
        </div>
    )
}

export default UpdateUser;
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import {ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div className={'h-24 flex items-center justify-between'}>
            {/*LEFT*/}
            <div className={'md:hidden lg:block w-[20%]'}>
                <Link href={"/"} className={"font-bold text-xl text-blue-600"}>T-SOCIAL</Link>
            </div>
            {/*CENTER*/}
            <div className={'hidden md:flex w-[50%] text-sm'}>
                {/*  LINKS  */}
                <div className={'flex gap-6 text-gray-600'}>
                    <Link href={'/'} className={'flex items-center gap-2'}>
                        <Image src={"/home.png"} alt={"Homepage"} width={16} height={16} className={'w-4 h-4'}/>
                        Homepage
                    </Link>
                    <Link href={'/friends'} className={'flex items-center gap-2'}>
                        <Image src={"/friends.png"} alt={"Friends"} width={16} height={16} className={'w-4 h-4'}/>
                        Friends
                    </Link>
                    <Link href={'/stories'} className={'flex items-center gap-2'}>
                        <Image src={"/stories.png"} alt={"Stories"} width={16} height={16} className={'w-4 h-4'}/>
                        Stories
                    </Link>
                </div>
            </div>
            {/*RIGHT*/}
            <div className={'w-[30%] flex items-center gap-4 xl:gap-8 justify-end'}>
                <ClerkLoading>
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className={'cursor-pointer'}>
                            <Image src={'/people.png'} alt={''} width={20} height={20}/>
                        </div>
                        <div className={'cursor-pointer'}>
                            <Image src={'/messages.png'} alt={''} width={20} height={20}/>
                        </div>
                        <div className={'cursor-pointer'}>
                            <Image src={'/notifications.png'} alt={''} width={20} height={20}/>
                        </div>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <div className={'flex items-center gap-2 cursor-pointer text-sm'}>
                            <Image src={'/login.png'} alt={''} width={20} height={20}/>
                            <Link href={'/sign-in'}>Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu/>
            </div>
        </div>
    )
}
export default Navbar;
//check3
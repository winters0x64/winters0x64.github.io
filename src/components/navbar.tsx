import Link from "next/link"
import { Audiowide } from "next/font/google";
import Image from "next/image";

const audiowide = Audiowide({subsets: ["latin"], weight:["400"]});

export default function NavBar() {
    return (
        <>
            {/* Nav bar */}
           <div className="">
                <Link href="/">
                    <Image src="/winter.png" alt="Description of image" width={70} height={70} />
                </Link>
            </div>
            <div className={`${audiowide.className} flex flex-row justify-center items-center w-screen text-4xl space-x-10`}>       
                <Link href="/" className="text-3xl text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Home</Link>
                <Link href="/blog" className="text-3xl text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Blog</Link>
                <Link href="/about" className="text-3xl text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">About</Link>
            </div>
            {/* To balance out the space created by the pfp image box */}
            <div className="h-full w-20"></div>
        </>
    )
}
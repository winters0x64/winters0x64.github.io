/* Code syntax highlighting */
import "@/styles/highlight-js/windows-nt.css"
import { Audiowide } from "next/font/google";
import genTOC from "./tocGen";

const audiowide = Audiowide({subsets: ["latin"], weight:["400"]});

export default function MdxLayout({ children, title, year }: { children: React.ReactNode, title:string, year:string}) {
    return (
        <>
            <div className="flex flex-row h-full  bg-black z-10 border-t-2 border-white">
                <div className={`${audiowide.className} flex flex-col px-5 text-white w-1/6 h-full py-3 space-x-5 space-y-5 bg-black z-10 border-r-2 border-white`}>
                    <h1 className="text-2xl">
                        <u>Index</u>
                    </h1>
                    <div>
                        {genTOC(title, year)}
                    </div>
                    
                </div>
                <div className="w-full h-full px-5 overflow-x-hidden z-10 bg-black opacity-100">
                    {children}
                </div>
            </div>
        </>
    )
}
"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Tech from "@/components/tech";
import { JetBrains_Mono } from 'next/font/google';

const jetbrains_thin = JetBrains_Mono({subsets:['latin'],weight:'100'})

export default function AboutMe() {
    const [text, setText] = useState("");
    const content = "  Who am i?<br /><br />Hi!! I'm Arun Krishnan (aka Winters, Winters0x64), Currently a 2'nd year Computer science undergrad student at Amrita University. <br />I enjoy doing Web security/development, I'm also a part of team bi0s, together we play CTFs, I specialize in Web Exploitation. <br /> <br /> What can you expect here? <br /> <br /> I will publish blogs about interesting Web technologies, Researches in Websecurity, CTF writeups etc literally any cool stuff <br /> related to Websecurity.<br /><br />You can contact me through any of the links mentioned in the home page or via discord: winters0x168.<br /><br /> Thanks for reading :)";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index === content.length) {
                clearInterval(interval);
            } else {
                setText(prevText => prevText + content.charAt(index));
                index++;
            }
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex flex-col items-center h-full w-screen space-y-20">
                {/* Profile image */}
                <div className="flex flex-col justify-end h-30">
                    <Image src="/winter.png" alt="Description of image" className="rounded-full border-2" width={140} height={140} />
                </div>

                {/* About me content */}
                <div className="flex flex-col flex-wrap text-white h-60 ">
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: text }}></p>
                </div>
                <div className={`${jetbrains_thin.className} flex flex-col justify-center items-center space-x-3`}>
                    <Tech />
                </div>
            </div>
        </>
    )
}

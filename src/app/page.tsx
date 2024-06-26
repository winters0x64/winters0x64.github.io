"use client"
import React from 'react';
import Link from 'next/link';
import MainTitle from '../components/title';
import Image from 'next/image';
import Button from '../components/button';
import LinkTree from '../components/linktree';
import Tech from '../components/tech';
import { JetBrains_Mono } from 'next/font/google';

const jetbrains_thin = JetBrains_Mono({subsets:['latin'],weight:'100'})

export default function HomePage() {
  return (
    <>
    {/* Mother container */}
    <div className='h-screen'>
      {/* Title and image */}
      <div className='flex flex-col justify-end h-1/2'>
        <div className='flex flex-row justify-center items-center'>
          <MainTitle />
          <Image src="/winter.png" alt="Description of image" width={160} height={160} />
        </div>
      </div>

      {/* Button container */}
      <div className='h-30'>
        <div className='flex flex-row justify-center space-x-5'>
          <Link href='/'><Button text='Home' /></Link>
          <Link href='/blog'><Button text='Blog' /></Link>
          <Link href='/about'><Button text='About' /></Link>
        </div>
      </div>

      {/* Link container, techstack and copyright */}
      <div className='flex flex-col justify-end h-1/5'>
        <div className='flex flex-row justify-center'>
          <LinkTree />
        </div>
        <div className={`${jetbrains_thin.className} flex flex-col justify-center items-center space-x-3`}>
          <Tech />
        </div>
      </div>
    </div>
      
    </>
  );
}
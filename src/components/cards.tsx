'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

interface CardsProps {
  title: string;
  desc: string;
  tags: string;
  date: string;
  image: string;
}

const Cards = ({title,desc,tags,date,image}:CardsProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative flex h-48 w-full justify-start overflow-hidden rounded-xl border border-white bg-black'
    >
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      <div className='h-full w-3/4 px-5'>
        <div className='flex flex-col justify-around h-full w-full'>
          <p><u>{title}</u></p>
          <p>tldr; {desc}</p>
          <div className='flex flex-row justify-between w-full'>
            <p className='text-white text-xs'>#{tags}</p>
            <p className='text-sm'>Date: {date}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center items-center h-full w-1/4'>
        <Image src={'/blogpics/'+image} alt='blogImage' width={100} height={100}/>
      </div>
    </div>
  );
};

export default Cards;

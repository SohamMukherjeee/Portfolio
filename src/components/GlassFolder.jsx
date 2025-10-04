"use client";

import React from "react";

const GlassFolder = ({ icon, className = "" }) => {
  return (
    <section
      className={`relative group flex flex-col items-center justify-center ${className}`}
    >
      <div className="relative w-full h-full cursor-pointer origin-bottom [perspective:1500px] z-50">
        {/* Top tab */}
        <div
          className="bg-[#757A83]/30 backdrop-blur-md w-full h-full origin-top rounded-2xl rounded-tl-none 
          group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative 
          after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-1/3 after:h-1 after:bg-[#757A83]/30 after:backdrop-blur-md after:rounded-t-2xl 
          before:absolute before:content-[''] before:-top-[3px] before:left-1/3 before:w-1 before:h-1 before:bg-[#757A83]/30 before:backdrop-blur-md before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"
        ></div>

        {/* Folder layers */}
{/* Folder layers */}
<div className="absolute inset-[2px] bg-[#757A83]/10 backdrop-blur-md rounded-2xl transition-all ease duration-300 origin-bottom transform group-hover:[transform:rotateX(-20deg)]"></div>
<div className="absolute inset-[2px] bg-[#757A83]/10 backdrop-blur-md rounded-2xl transition-all ease duration-300 origin-bottom transform group-hover:[transform:rotateX(-30deg)]"></div>
<div className="absolute inset-[2px] bg-[#757A83]/10 backdrop-blur-md rounded-2xl transition-all ease duration-300 origin-bottom transform group-hover:[transform:rotateX(-38deg)]"></div>

{/* Front folder layer with icon */}
<div
  className="absolute bottom-0 bg-[#757A83]/20 backdrop-blur-md w-full h-[100%] rounded-2xl rounded-tr-none 
  after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-2/3 after:h-2 after:bg-[#757A83]/20 after:backdrop-blur-md after:rounded-t-2xl 
  before:absolute before:content-[''] before:-top-[2px] before:right-[20%] before:size-1 before:bg-[#757A83]/20 before:backdrop-blur-md before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] 
  transition-all ease duration-300 origin-bottom flex items-center justify-center transform
  group-hover:shadow-[inset_0_4px_8px_rgba(100,149,237,0.1),inset_0_-4px_8px_rgba(65,105,225,0.1)] 
  group-hover:[transform:rotateX(-46deg)_translateY(1px)]"
>
  <div className="text-foreground text-lg">{icon}</div>
</div>
      </div>
    </section>
  );
};

export default GlassFolder;

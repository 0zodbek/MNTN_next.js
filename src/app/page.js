import React from "react";
import { Cormorant } from 'next/font/google';

const chronicleDisplay = Cormorant({
  subsets: ['latin'],
  weight: ['600'],
});

function Page() {
  return (
    <div className="bg-black h-[4600px] w-[1920px] mx-auto border border-red-600">
      <div className="w-[1920px] h-[1200px] border border-yellow-400 mx-auto relative">
        <div className="w-[1760px] h-[25px] top-[64px] flex justify-between z-50 left-20 absolute">
          <span className="text-3xl text-white">MNTN</span>
          <div className="w-72 flex justify-between">
            <a className="font-bold text-white text-lg">Equipment</a>
            <a className="font-bold text-white text-lg">About us</a>
            <a className="font-bold text-white text-lg">Blog</a>
          </div>
          <span className="font-bold text-white text-lg flex gap-2">
            <img src="cart.svg" alt="" /> Account
          </span>
        </div>
        
        <img src="HG.png" alt="Hero" />
        <img className="absolute top-0" src="BG Hero.png" alt="Background Hero" />
        
        <div className="absolute top-[464px]">
          <img src="MG.png" alt="Main Graphic" />
          <span className="flex transform rotate-90 font-bold text-white text-lg absolute top-0 left-8">
            Follow us{" "}
            <img className="transform rotate-[-90deg]" src="instagram.svg" alt="Instagram" />
            <img className="transform rotate-[-90deg]" src="twitter.svg" alt="Twitter" />
          </span>
          <div className="w-[950px] absolute top-[-230px] ml-[500px]">
            <a className="text-[#FBD784] font-extrabold text-lg">------- A Hiking guide</a>
            <h1 className={`font-semibold my-8 text-white text-[80px] ${chronicleDisplay.className}`}>
              Be prepared for the Mountains and beyond!
            </h1>
            <a className="font-extrabold text-lg text-white">scroll down ↓</a>
          </div>
        </div>
        
        <div className="absolute top-[768px]">
          <div className="relative">
            <img src="VG.png" alt="Content Graphic" />
            <img className="absolute bottom-0" src="BG Content.png" alt="Background Content" />
          </div>
        </div>
      </div>
      
      <div className="bg-black text-white w-[1920px] absolute top-[1440px]   py-16 px-[239px] z-50">
    
      <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="text-6xl font-bold text-white opacity-20">01</div>
          <div className="uppercase text-yellow-400 font-semibold text-sm mt-2">
            Get Started
          </div>
          <h2 className="text-4xl font-bold mt-4">What level of hiker are you?</h2>
          <p className="text-lg mt-4 leading-relaxed">
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings.
          </p>
          <a
            href="#"
            className="text-yellow-400 text-lg font-semibold mt-4 inline-block"
          >
            read more →
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="01.png"
            alt="Hiker Level"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
        <div className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
          <img
            src="01 (1).png"
            alt="Hiking Gear"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left md:pl-12 order-1 md:order-2">
          <div className="text-6xl font-bold text-white opacity-20">02</div>
          <div className="uppercase text-yellow-400 font-semibold text-sm mt-2">
            Hiking Essentials
          </div>
          <h2 className="text-4xl font-bold mt-4">
            Picking the right Hiking Gear!
          </h2>
          <p className="text-lg mt-4 leading-relaxed">
            The nice thing about beginning hiking is that you don't really need
            any special gear. You can probably get away with things you already
            have.
          </p>
          <a
            href="#"
            className="text-yellow-400 text-lg font-semibold mt-4 inline-block"
          >
            read more →
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start">
      <div class="md:w-1/2 mx-auto text-center md:text-left">
  <div class="text-6xl font-bold text-white opacity-20">03</div>
  <div class="uppercase text-yellow-400 font-semibold text-sm mt-2">
    Where you go is the key
  </div>
  <h2 class="text-4xl font-bold mt-4">
    Understand Your Map & Timing
  </h2>
  <p class="text-lg mt-4 leading-relaxed">
    To start, print out the hiking guide and map. If it's raining, throw
    them in a Zip-Lock bag. Read over the guide, study the map, and
    understand your route.
  </p>
  <a
    href="#"
    class="text-yellow-400 text-lg font-semibold mt-4 inline-block hover:underline"
  >
    read more →
  </a>
</div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="01 (3).png"
            alt="Map and Timing"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </div>

      <footer className="text-center mt-16">
        <p className="text-sm text-gray-500">
          Copyright © 2023 MNTN, Inc. Terms & Privacy
        </p>
      </footer>
    </div>
    </div>
  );
}

export default Page;
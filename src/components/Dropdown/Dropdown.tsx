import React from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export const Dropdown = () => {
  return (
    <div className="absolute right-5 top-6 z-10 mt-2 w-max origin-top-right animate-popMenu rounded-md border-[1px] border-dark_gray bg-black py-2 text-light_gray">
      <div className="absolute -top-[12px] right-[9px] z-30">
        <svg height="12" viewBox="0 0 24 12" width="24">
          <path
            d="M20 12l-8-8-12 12"
            fill="#000"
            fillRule="evenodd"
            stroke="#292929"
            strokeWidth="1px"
          ></path>
        </svg>
      </div>

      <Link
        href="#"
        className="-mt-2 flex transform items-center p-3 text-sm  transition-colors duration-300"
      >
        <Image
          className="mx-1 h-9 w-9 flex-shrink-0 rounded-full object-cover"
          src="/meAvatar.png"
          alt="tomas avatar"
          width={40}
          height={40}
        />
        <div className="mx-1">
          <h1 className="text-sm font-semibold">Tomas Ferreras</h1>
          <p className="text-sm">hellotomasdev@gmail.com</p>
        </div>
      </Link>

      <hr className="border-dark_gray" />

      <Link
        href="#"
        className="flex transform items-center p-3 text-sm capitalize transition-colors duration-300"
      >
        <span className="mx-1">view profile</span>
      </Link>

      <Link
        href="#"
        className="flex transform items-center p-3 text-sm capitalize transition-colors duration-300"
      >
        <span className="mx-1">Settings</span>
      </Link>

      <Link
        href="#"
        className="flex transform items-center p-3 text-sm capitalize transition-colors duration-300"
      >
        <span className="mx-1">Keyboard shortcuts</span>
      </Link>

      <hr className="border-dark_gray" />

      <button className="flex transform items-center p-3 text-sm capitalize transition-colors duration-300">
        <span className="mx-1">Log Out</span>
      </button>
      <hr className="border-dark_gray" />

      <div className="flex items-center justify-center px-5 pt-3 pb-1">
        <button className="w-full rounded-[5px] bg-white py-1 px-4 text-base text-black">
          Upgrade to pro
        </button>
      </div>
    </div>
  );
};

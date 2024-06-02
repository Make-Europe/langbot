import { useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import avatarPFP from '../public/images/avatarpfp.jpg';
import { CiStar } from "react-icons/ci";


export default function TelegramPage() {

  return (
    <div className='bg-zinc-900 min-h-screen flex items-center justify-center p-2'>
      <div className='content-wrapper w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 bg-gray-800 p-6 rounded-lg'>
        <div className='flex items-center justify-between'>
          <span> - Back </span>
          <span className="flex items-center"><CiStar /> Premium</span>
        </div>

      </div>
    </div>
  );
}

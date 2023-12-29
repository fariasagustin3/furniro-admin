import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FurniroLogo from '@/assets/furniro_logo.png';

const Sidebar = () => {
  return (
    <div className='flex flex-col flex-[0.7] bg-[#B88E2F] py-5 px-10 items-center'>
      <ul className='w-full'>
        <Link href="/">
          <li className='border-b-[1px] border-b-white'>
            <h2 className='text-2xl text-white font-bold text-center pb-5'>Furniro.</h2>
          </li>
        </Link>
        <Link href="/products" className=''>
          <li className='mt-5 flex flex-row items-center gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            <span className='text-white font-semibold'>Products</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;

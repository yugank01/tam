import React from 'react'

export default function Navbar() {
  return (
    <div className='fixed flex items-center justify-center w-full my-6 z-10'>
        <div className='flex items-center justify-center w-[415px] gap-4 bg-[#1D1D1D] shadow-lg shadow-[#1D1D1D]/50 rounded-[1rem] h-[50px]'>
            <div className='flex items-center justify-center gap-4 text-[#7F7F7F]'>
                img
                <a href="">Manifesto</a>
                <a href="">Careers</a>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <button className='bg-transparent border-[#4E4E4E] border text-white h-[42px] px-4 rounded-[1rem]'>Sign In</button>
                <button className='bg-white h-[42px] px-4 rounded-[1rem] shadow-lg hover:shadow-white/30 font-semibold '>Join Waitlist</button>
            </div>
        </div>
    </div>
  )
}

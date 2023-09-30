import React from 'react'

export default function Contact() {
  return (
    <div className='py-20'>
        <div className='relative flex flex-col justify-center items-center'>
            <p className='mb-2 text-[#3B3B38]'>We welcome you to join us.</p>
            <h3 className='mb-6 text-[#e9e8e3] text-[3.5rem] tracking-tight font-normal'>Start your journey</h3>
            <div className='flex items-center justify-center'>
                <form action="" className='flex items-center justify-center'>
                    <div className='rounded-2xl'>
                        <input type="text" className='h-[40px] w-full p-2 pl-6 border-white rounded-xl' placeholder='Enter your Email...' />
                    </div>
                    <div className='ml-2'>
                        <button className='bg-white h-[40px] w-full px-4 rounded-xl text-lg font-semibold shadow-lg shadow-white/30 hover:shadow-white/60 '>Join Waitlist</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

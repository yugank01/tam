import React from 'react'

export default function Footer() {
  return (
    <div className='pt-32'>
      <div className='flex flex-col items-center justify-center gap-8'>
        <div className='flex items-center justify-around w-full'>
            <div>
                <div>img</div>
                <h3 className='text-white text-[1.5rem]'>Cosmos is the home <br/>you’ve been searching for. </h3>
            </div>
            <div className='flex items-center justify-center text-white gap-24'>
                <div>
                    <div className='mb-4 text-[#30302D]'>USEFUL</div>
                    <div className='text-[#73726D]'>
                        <p>Manifesto</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div>
                    <div className='mb-4 text-[#30302D]'>LEGAL</div>
                    <div className='text-[#73726D]'>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
                <div>
                    <div className='mb-4 text-[#30302D]'>UPDATES</div>
                    <div className='text-[#73726D]'>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full text-center text-[15rem]'>
            logo
        </div>
      </div>
    </div>
  )
}

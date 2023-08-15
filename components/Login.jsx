import React from 'react'
import Image from 'next/image'
import BackgroundImage from '../app/bg.png'

function Login() {
  return (
    <div className='relative'>
        <h1>Login</h1>
        <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
            {/* logo */}
            <Image 
                className='object-cover rounded-full'
                src={BackgroundImage}
                alt='background image'
                height={200}
                width={200}
             />

            {/* button */}
            <button className='bg-gray-900 rounded-lg p-5 font-bold animate-pulse'>Login to Metaverse</button>
        </div>

        <div className='w-full h-screen'>
            {/* login button */}
            <Image 
                src={BackgroundImage}
                alt='background image'
                layout='fill'
                objectFit='cover'
             />
        </div>
    </div>


  )
}

export default Login
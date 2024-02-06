import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-secondary py-6 px-5 flex justify-between items-center'>
            <p className='text-gray-400 text-xs font-bold opacity-75'>@ 2024 Copyright FSW Barber</p>
            <Image
                src="/Logo.png"
                alt="Logo"
                width={100}
                height={22}
            />
        </div>
    )
}

export default Footer
import React from 'react'
import logo from '../assets/logo-dark.png'

export default function Header() {
    return (
        <div className='bg-dark h-32 w-100'>
            <div className='w-4/5 mx-auto my-0 flex items-center h-full'>
                <img src={logo} alt="logo" width='5%'></img>
                <h3 className='text-white ml-3'>Poetry Palette</h3>
            </div>
        </div>
    )
}

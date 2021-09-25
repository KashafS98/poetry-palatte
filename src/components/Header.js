import React from 'react'
import logo from '../assets/logo-dark.png'
import {FaLinkedin, FaGithubSquare, FaTwitterSquare} from 'react-icons/fa'

export default function Header() {
    return (
        <div className='bg-dark h-32 w-100'>
            <div className='w-4/5 mx-auto my-0 flex items-center justify-between h-full'>
                <div className='flex items-center'>
                <img src={logo} alt="logo" width='5%'></img>
                <h3 className='text-white ml-3'>Poetry Palette</h3>
                </div>
                <div className='flex justify-between w-1/12 text-3xl text-primary'>
                    <FaLinkedin />
                    <FaTwitterSquare />
                    <FaGithubSquare />
                </div>
            </div>
        </div>
    )
}

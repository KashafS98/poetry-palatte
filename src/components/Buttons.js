import React from 'react'

export default function Buttons({children, handleClick}) {
    return (
        <button className='bg-primary outline-none rounded-full py-3 px-6' onClick={handleClick}>{children}</button>
    )
}

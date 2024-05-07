import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-indigo-500'>
        <div className='flex md:flex-row flex-col gap-2 justify-between p-4'>
            <Link className='font-bold text-white text-2xl' href="/">HUNIMELIST</Link>
            <input placeholder='Cari anime...' className='' />
        </div>
    </header>
  )
}

export default Navbar
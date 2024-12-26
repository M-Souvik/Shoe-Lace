'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
// import '@/styles/globals.css'

const Navbar = () => {
  const pathname = usePathname();
  const router=useRouter();
  useEffect(() => {
    console.log(pathname)
  }, [pathname])
  
  console.log(pathname)
  return (
    
    <nav className="navbar relative z-10 container mx-auto px-2 lg:px-36 py-4">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="text-2xl font-bold">
            <Image src={'/images/shoe-logo.png'} width={150} height={150} alt='shoe-logo'/>
          </Link>
          <div className="hidden lg:flex items-center space-x-8 md:gap-3 font-normal">
            <Link href="/" className="text-black hover:text-orange-400 transition-colors focus:text-orange-400 duration-500">
              Home
            </Link>
            <Link href="/#aboutus" className="text-black hover:text-orange-400 transition-colors duration-500 focus:text-orange-400">
              About Us
            </Link>
            {/* <Link href="/FAQ" className="text-black hover:text-orange-400 transition-colors duration-500 focus:text-orange-400">
              FAQ
            </Link> */}
            <Link href="/#service" className="text-black hover:text-orange-400 transition-colors duration-500 focus:text-orange-400">
              Services
            </Link>
            {/* <Link href="/#contact" className="text-black hover:text-orange-400 transition-colors duration-500 focus:text-orange-400">
              Contact Us
            </Link> */}
          </div>
          <Link href={'/#contact'} className="bg-orange-400 text-white px-6 py-3 hidden lg:block rounded hover:-translate-y-2 transition-transform duration-300 ">
            Contact Us
          </Link>
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
          <div className="lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className=" bg-transparent border-none">
            <Menu color='orange'/>
            </label>
          </div>
          {/* sidebar */}
          <div className={`drawer-side`}>
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu bg-[#00A8FF] relative z-50 min-h-full w-80 p-4 ">
            <div className='pt-7 flex justify-between items-center'>
            <Image src={'/images/white-shoes-logo.png'} width={200} height={200} alt='shoe-logo'/>
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay">
            <X size={30} className='bg-orange-400  rounded' color='white'/>
            </label>
            </div>
            <div className='space-y-2 pt-4 text-xl flex flex-col text-white font-semibold'>

              <Link href={'/'} className='hover:text-orange-500 py-4' onClick={() => {document.getElementById('my-drawer-3').click()}} aria-label="close sidebar">Home</Link>
              <Link href={'/#aboutus'} className={`hover:text-orange-500  py-4`} onClick={() => {document.getElementById('my-drawer-3').click()}}>About Us</Link>
              <Link href={'/#service'} className='hover:text-orange-500 py-4' onClick={() => {document.getElementById('my-drawer-3').click()}}>Services</Link>
              {/* <li><Link href={'/FAQ'} className='hover:text-orange-500' onClick={() => {document.getElementById('my-drawer-3').click()}}>FAQ</Link></li> */}
              <Link href={'/#contact'} className='hover:text-orange-500 py-4' onClick={() => {document.getElementById('my-drawer-3').click()}}>Contact</Link>
            </div>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
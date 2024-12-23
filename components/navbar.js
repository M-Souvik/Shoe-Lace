import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="relative z-10 container mx-auto px-36 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <Image src={'/images/shoe-logo.png'} width={150} height={150} alt='shoe-logo'/>
          </Link>
          <div className="hidden md:flex items-center space-x-8 md:gap-3 font-normal">
            <Link href="/" className="text-black hover:text-orange-400 transition-colors duration-500">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-orange-400 transition-colors duration-500">
              About Us
            </Link>
            <Link href="/services" className="text-black hover:text-orange-400 transition-colors duration-500">
              Services
            </Link>
            <Link href="/contact" className="text-black hover:text-orange-400 transition-colors duration-500">
              Contact Us
            </Link>
          </div>
          <button className="bg-orange-400 text-white px-6 py-3 rounded-md">
            Contact Us
          </button>
        </div>
      </nav>
  )
}

export default Navbar
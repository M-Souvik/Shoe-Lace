import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar relative z-10 container mx-auto px-2 sm:px-36 py-4">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="text-2xl font-bold">
            <Image src={'/images/shoe-logo.png'} width={150} height={150} alt='shoe-logo'/>
          </Link>
          <div className="hidden md:flex items-center space-x-8 md:gap-3 font-normal">
            <Link href="/" className="text-black hover:text-orange-400 transition-colors duration-500">
              Home
            </Link>
            <Link href="/about-us" className="text-black hover:text-orange-400 transition-colors duration-500">
              About Us
            </Link>
            <Link href="/services" className="text-black hover:text-orange-400 transition-colors duration-500">
              Services
            </Link>
            <Link href="/contact" className="text-black hover:text-orange-400 transition-colors duration-500">
              Contact Us
            </Link>
          </div>
          <button className="bg-orange-400 text-white px-6 py-3 hidden md:block rounded-md">
            Contact Us
          </button>
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className=" bg-transparent border-none">
            <Menu color='orange'/>
            </label>
          </div>
          {/* sidebar */}
          <div className="drawer-side ">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 relative z-40 min-h-full w-80 p-4 ">
            
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
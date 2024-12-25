import Link from 'next/link'
import React from 'react'
import { TfiControlForward } from 'react-icons/tfi'

const Header = ({link, title}) => {
  return (
    <div className="w-full h-64 bg-gradient-to-tl from-sky-700 via-sky-500 to-sky-800 rounded-xl my-4 mb-32 flex flex-col justify-center px-12">
       <h1 className="text-5xl font-semibold text-white">{title}</h1>
       <span className="flex py-2 items-center gap-2 text-lg text-white  font-semibold"><Link href="/">Home</Link> <span className="text-orange-400"><TfiControlForward size={25} fill="orange"/></span> <Link href={`/${link}`}>{title}</Link></span>
    </div>
  )
}

export default Header
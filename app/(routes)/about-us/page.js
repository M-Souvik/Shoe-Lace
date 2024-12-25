'use client'

import AboutUsPage from "@/components/about-us-page"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { FaCheck, FaHandsWash, FaTruck } from "react-icons/fa"
import { IoMdCall } from "react-icons/io"
import { TfiControlForward } from "react-icons/tfi";
import {motion} from 'motion/react'
import AboutUsSection from "@/components/about-us-section"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-2 lg:px-40 pt-12">
      {/* <div className="w-full h-64 bg-gradient-to-tl from-sky-700 via-sky-500 to-sky-800 rounded-xl my-4 mb-32 flex flex-col justify-center px-12">
       <h1 className="text-5xl font-semibold text-white">About Us</h1>
       <span className="flex py-2 items-center gap-2 text-lg text-white  font-semibold"><Link href="/">Home</Link> <span className="text-orange-400"><TfiControlForward size={25} fill="orange"/></span> <Link href="/about-us">About Us</Link></span>
      </div> */}
      <Header title={'About Us'} link={'/about-us'}/>
      <div className="px-3">

     <AboutUsPage/>
      </div>
     {/* <div>
        <div className="relative min-h-screen top-48">
          <h1 className="text-blue-400 text-lg font-semibold">
          Our Process
          </h1>
          <div className="relative top-2 flex gap-2 items-center">
            <div className="text-5xl font-semibold">
            Stay at Home, We Make it Done for you.
            </div>
            <div className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
          </div>
          <motion.div
             initial={{ opacity: 0, y:100 }}
             whileInView={{
               opacity: 1 ,
               y:0,
               transition:{
                 duration: 1
               }
              }}
              viewport={{ once: true }}
           className="relative top-20">

            <div className="flex justify-between">
            <div className="w-[17rem] h-56 rounded-xl border bg-[#00A8FF] p-6">
              <IoMdCall size={50} className="text-white absolute -top-5 bg-orange-400 p-2 rounded-md"/>
            <h3 className="text-white text-center text-5xl font-bold">01</h3>
            <div className="relative top-3 flex flex-col gap-2">
              <p className="font-bold text-center text-xl">Contact for Order</p>
              <p className="text-white text-center px-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </div>
            <div className="w-[17rem] h-56 rounded-xl border p-6 hover:bg-gray-100 transition-colors duration-200">
              <FaTruck size={50} className="text-white absolute -top-5 bg-black p-2 rounded-md"/>
            <h3 className="text-orange-400 text-center text-5xl font-bold">02</h3>
            <div className="relative top-3 flex flex-col gap-2">
              <p className="font-bold text-center text-xl">Pick Up Order</p>
              <p className="text-gray-500 text-center px-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </div>
            <div className="w-[17rem] h-56 rounded-xl border p-6 hover:bg-gray-100 transition-colors duration-200">
              <FaHandsWash size={50} className="text-white absolute -top-5 bg-black p-2 rounded-md"/>
            <h3 className="text-orange-400 text-center text-5xl font-bold">03</h3>
            <div className="relative top-3 flex flex-col gap-2">
              <p className="font-bold text-center text-xl">Clean Your Shoes</p>
              <p className="text-gray-500 text-center px-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </div>
            <div className="w-[17rem] h-56 rounded-xl border p-6 hover:bg-gray-100 transition-colors duration-200">
              <FaTruck size={50} className="text-white absolute -top-5 bg-black p-2 rounded-md"/>
            <h3 className="text-orange-400 text-center text-5xl font-bold">04</h3>
            <div className="relative top-3 flex flex-col gap-2">
              <p className="font-bold text-center text-xl">Deliver to You</p>
              <p className="text-gray-500 text-center px-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </div>
            </div>

          </motion.div>
        </div>
      </div> */}
      <div className="pb-10">
      <AboutUsSection/>
      </div>

    </div>
  )
}


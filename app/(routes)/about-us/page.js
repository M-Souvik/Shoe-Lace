

import AboutUsPage from "@/components/about-us-page"
import Image from "next/image"
import { FaCheck, FaHandsWash, FaTruck } from "react-icons/fa"
import { IoMdCall } from "react-icons/io"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-44 pt-12">
     <AboutUsPage/>
     <div>
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
          <div className="relative top-20">

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

          </div>
        </div>
      </div>

    </div>
  )
}


'use client'

import React, { useState } from 'react'
import Image from "next/image"
import { FaHandsWash, FaPlay, FaTruck } from "react-icons/fa"
import { IoMdCall } from "react-icons/io"
import AboutUsPage from "@/components/about-us-page"
import RequestOrderPage from "@/components/request-order-page"
import ServicesSection from "@/components/services-page"
import PricingSection from "@/components/pricing"
import Testimonials from "@/components/testimonials-page"
import NewsBlog from "@/components/news-page"
import { YouTubeModal } from '@/components/video-modal'
import {motion} from 'motion/react'
import ContactPage from './(routes)/contact/page'
import FaqSection from '@/components/faq-section'

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  return (
    <>
      <div className="min-h-screen w-full px-5 lg:px-40 md:px-6 flex flex-col ">
        <div className="absolute inset-0 z-0 w-full flex">
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 inset-x-0 w-full h-full flex-grow"
            preserveAspectRatio="none"
          >
            <path
              fill="#f3f4f6"
              d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,186.7C672,203,768,245,864,261.3C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="w-full flex-grow"
            ></path>
          </svg>
        </div>
        <div className="relative z-5 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-32 w-full top-10 flex-grow">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight mb-8 opacity-0 animate-fade-in-up">
                Keeping Your Favorite Shoes<br className="hidden sm:inline" /> in The Best Performance
              </h1>
                
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className=' hover:-translate-y-2 transition-transform duration-200'>

                <button
                  className="bg-orange-400 font-normal text-md text-white px-8 py-4 rounded transition-transform duration-200 sm:w-auto opacity-0 animate-fade-in-left "
                >
                  Get Started
                </button>
                </div>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="flex items-center justify-center gap-2 text-black transition-colors w-full sm:w-auto mt-4 sm:mt-0 opacity-0 animate-fade-in-right"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-orange-400 rounded-full animate-pulse-border">
                    <FaPlay className="text-orange-400" size={18} />
                  </div>
                  <span className="ml-2">Watch Intro</span>
                </button>
              </div>
            </div>
            
            <div className="relative flex justify-center items-center w-full mt-16 sm:mt-24 top-10 md:top-36 lg:top-44">
              <div className="w-full h-64 sm:h-[37rem] bg-[#00A8FF] rounded-xl relative z-0"></div>
              <div className="absolute z-5 bottom-0 sm:bottom-40 lg:bottom-32 w-3/4 sm:w-auto opacity-0 animate-fade-in-up-delay-600">
                <Image
                  src="/images/shoe.png"
                  alt="Shoe"
                  width={570}
                  height={570}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div> 
        </div>

        {/* 2nd Page */}
        <div className="px-4 sm:px-6 lg:px-8 mt-24 sm:mt-48">
          <h1 className="text-blue-400 text-lg font-semibold">
            Our Process
          </h1>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Stay at Home, We Make it Done for you.
            </div>
            <div className="text-gray-400 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
          </div>
          <div className="mt-12 sm:mt-20">
            <motion.div 
              initial={{ opacity: 0, y:100 }}
              whileInView={{
                opacity: 1 ,
                y:0,
                transition:{
                  duration: 2
                }
               }}
               viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: IoMdCall, title: "Contact for Order", number: "01", bgColor: "bg-[#00A8FF]" },
                { icon: FaTruck, title: "Pick Up Order", number: "02" },
                { icon: FaHandsWash, title: "Clean Your Shoes", number: "03" },
                { icon: FaTruck, title: "Deliver to You", number: "04" },
              ].map((item, index) => (
                <div key={index} className={`relative  rounded-xl border p-6 ${item.bgColor || 'hover:bg-gray-100'} transition-colors duration-200`}>
                  <item.icon size={40} className={`text-white absolute -top-5 ${index === 0 ? 'bg-orange-400' : 'bg-black'} p-2 rounded-md`}/>
                  <h3 className={`${index === 0 ? 'text-white' : 'text-orange-400'} text-center text-4xl font-bold`}>{item.number}</h3>
                  <div className="mt-4 flex flex-col gap-2">
                    <p className="font-bold text-center text-xl">{item.title}</p>
                    <p className={`${index === 0 ? 'text-white' : 'text-gray-500'} text-center`}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 3rd page */}
        <div id='aboutus' className="pt-24 sm:pt-48">
          <AboutUsPage/>
        </div>
      </div>
      <div>
        <RequestOrderPage/>
      </div>
      {/* 4thpage */}
      <div  className="relative sm:py-0 pt-52 sm:pt-0 px-5 lg:px-40 md:px-6">
        <div id='service' className='md:py-16 relative md:top-52'>
          <ServicesSection/>
        </div>
        <div className='md:py-16 relative md:top-40'>

        <PricingSection/>
        </div>
      </div>
      <div className="relative sm:pb-48 px-2 lg:pl-40 md:pl-10">
      <Testimonials/>
      </div>
      <div className="relative px-2 md:px-6 lg:px-32">
      <NewsBlog/>
      </div>
      <div  className="relative sm:py-0 pt-24 sm:pt-0 px-5 lg:px-40 md:px-6">
        <FaqSection/>
      </div>
      <div id='contact' className="">
      <ContactPage/>
      </div>

      {/* YouTube Modal */}
        <YouTubeModal isOpen={isVideoOpen} setIsOpen={setIsVideoOpen} videoId="https://youtu.be/AkuUuvbg02PdBPxK?autoplay=true" />

    </>
  )
}


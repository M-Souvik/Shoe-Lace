'use client'

import React from 'react'
import { FaHandsWash, FaTruck } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import {motion} from 'motion/react'

const AboutUsSection = () => {
  return (
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
                  duration: 1
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
  )
}

export default AboutUsSection
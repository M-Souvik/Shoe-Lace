'use client'

import { useEffect, useState } from 'react'
import { Award, Users2, Globe, Building2 } from 'lucide-react'
import { LiaUsersSolid } from "react-icons/lia";
import { FaCity } from 'react-icons/fa';
import {motion} from 'motion/react'


function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime
      }

      const progress = (currentTime - startTime) / duration
      
      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return <span className="text-4xl font-bold">{count.toLocaleString()}</span>
}

function StatsCard({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white">
      <Icon className="w-12 h-12 text-orange-400 mb-4" />
      <AnimatedCounter end={value} />
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  )
}

export default function RequestOrderPage() {
  return (
    <div className="relative ">
      <div className="relative container mx-auto py-20">
        {/* Header Section */}
        <div className=" text-white mb-20 bg-gradient-to-tl from-sky-700 via-sky-400 to-sky-700 h-[25rem]">
          <div className='md:py-8 lg:py-28 flex flex-col lg:flex-row lg:gap-[23rem] py-16 px-4 lg:px-32 lg:items-center'>
          <div>

          <p className="text-orange-300 font-medium mb-2 sm:mb-4">Request Order</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-6">Get Special Offer Now</h1>
          <p className="max-w-2xl lg:mx-auto mb-4 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          </div>
          <motion.div
          initial={{ opacity: 0, x:-500 }}
          whileInView={{
            opacity: 1 ,
            x:0,
            transition:{
              duration: 1,
            }
           }}

           viewport={{ once: true }}
          >
          <button  
            className=" w-40 h-16 relative btn bg-orange-400 rounded-xl hover:bg-orange-500 text-white hover:-translate-y-2 transition-transform duration-200"
          >
            Request Order
          </button>
          </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div 
        initial={{ opacity: 0, y:200 }}
        whileInView={{
          opacity: 1 ,
          y:0,
          transition:{
            duration: 1,
          }

         }}
         viewport={{ once: true }}
        className='absolute w-full px-2 sm:w-full top-[27rem] lg:px-3 sm:top-96 rounded-xl'>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl place-content-center mx-auto bg-white rounded-xl sm:px-20 md:px-20 lg:py-4 shadow-lg">
          <StatsCard 
            icon={Award} 
            value={4452} 
            label="Successful Project" 
          />
          <StatsCard 
            icon={LiaUsersSolid} 
            value={52} 
            label="Expert Staff" 
          />
          <StatsCard 
            icon={Globe} 
            value={2241} 
            label="Happy Clients" 
          />
          <StatsCard 
            icon={FaCity} 
            value={20} 
            label="City Store" 
          />
        </div>
        </motion.div>
      </div>
    </div>
  )
}


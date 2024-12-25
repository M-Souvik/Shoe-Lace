'use client'

import React from 'react'
import TestimonialsCarousel from './testimonials-carousel'
import {motion} from 'motion/react'
const Testimonials = () => {
  return (
    <section className="">
    <div className=" mx-auto grid  w-full sm:grid-cols-2 justify-items-start content-center  sm:gap-32 relative">
      {/* Section Header */}
      <div 
      
      className=" mb-12 relative lg:top-[20rem] md:top-[17rem]">
        {/* <h2 className="text-blue-400 text-sm font-semibold mb-2">Testimonials</h2> */}
        <h3 className="lg:text-5xl font-bold mb-4 md:text-4xl">Clients Feedback</h3>
        <motion.div
        initial={{ opacity: 0, x:-300 }}
        whileInView={{
          opacity: 1 ,
          x:0,
          transition:{
            duration: 1,
          }
         }}
  
         viewport={{ once: true }}>
        <p className="text-gray-600 max-w-2xl mx-auto lg:w-[28rem] md:w-[23rem] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className='btn bg-orange-400 text-white h-16 w-36 hover:bg-orange-400 hover:-translate-y-2 transition-transform duration-200'>
          Give Feedback
        </button>
        </motion.div>
        
      </div>

      <div className='relative sm:top-32 w-[22rem] sm:w-[60rem] sm:h-full bg-gradient-to-tl from-sky-700 via-sky-300 to-sky-600 sm:p-16 rounded-2xl'>
        <div className=''>

        <TestimonialsCarousel/>
        </div>
      </div>
      </div>
      </section>
  )
}

export default Testimonials
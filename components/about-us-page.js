import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const AboutUsPage = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-2 place-content-center">
    {/* Left column - Image */}
    <div className="relative aspect-square lg:aspect-auto">
      <Image
        src="/images/banner-1.jpg"
        alt="Shoe cleaning service"
        width={530}
        height={530}
        className="rounded-lg object-cover "
        priority
      />
    </div>

    {/* Right column - Content */}
    <div className="relative space-y-6">
      <div className="text-blue-500 font-medium">About Us</div>
      
      <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
        Stay at Home, We Make it Done for you.
      </h1>
      
      <p className="text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>

      <div className="relative top-0 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center">
      
    <div className="">
      <p className="text-gray-600 dark:text-gray-400 pb-5">
        Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore
      </p>

      <div className="space-y-4">
        {[
          "Quick Repair Process",
          "Commitment to Customers",
          "Low Price Guarantee",
          "60 Days Warranty"
        ].map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <div className="rounded-full bg-sky-500 p-0.5">
              <FaCheck className="w-3 h-3 text-white" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      </div>

      

      {/* Decorative image */}
      <div className="relative top-0 w-full sm:w-60 sm:h-56 right-0 z-20">
        <Image
          src="/images/banner-2.jpg"
          alt="Decorative pattern"
          width={500}
          height={500}
          className="rounded-lg sm:object-cover w-full h-full"
        />
      </div>
      </div>
      <div className="flex flex-wrap gap-4 sm:gap-10 sm:w-full justify-center sm:justify-start">
        <button size="lg" className="btn bg-yellow-500 hover:bg-yellow-500 text-white px-10 py-4 hover:-translate-y-2 transition-transform duration-300">
          About Us
        </button>
        <button size="lg" variant="outline" className="btn bg-transparent  border-blue-400 text-blue-400 hover:bg-transparent px-10 py-4 hover:-translate-y-2 transition-transform duration-300">
          Contact Us
        </button>
      </div>
    </div>
  </div>
  )
}

export default AboutUsPage
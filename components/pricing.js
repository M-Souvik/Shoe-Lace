'use client'

import { Check, CheckCheck } from 'lucide-react'
import {motion} from 'motion/react'
const pricingPlans = [
  {
    name: "Standard Clean",
    price: "25",
    features: [
      "Free Delivery",
      "Shoes Repair",
      "Standard Clean",
      "1 Week Warranty",
      "24/7 Support"
    ]
  },
  {
    name: "Basic Clean",
    price: "45",
    features: [
      "Free Delivery",
      "Shoes Repair",
      "Standard Clean",
      "1 Week Warranty",
      "24/7 Support"
    ]
  },
  {
    name: "Super Clean",
    price: "75",
    features: [
      "Free Delivery",
      "Shoes Repair",
      "Standard Clean",
      "1 Week Warranty",
      "24/7 Support"
    ]
  }
]

export default function PricingSection() {
  return (
    <section className="relative z-20 pt-16">
      <div className=" mx-auto">
        <div className="mb-12">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10">

        <div>
           <h2 className="text-[#00A8FF] text-sm font-semibold mb-2">Our Services</h2>
          <h3 className="text-4xl font-bold mb-4">Affordable Pricing Plans</h3>
          <p className="text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <motion.div
          initial={{ opacity: 0, x:-100 }}
          whileInView={{
            opacity: 1 ,
            x:0,
            transition:{
              duration: 2,
            }
           }}

           viewport={{ once: true }}
          >
          <button className="mt-6 btn px-6 py-3 bg-orange-400 text-white rounded h-16 w-36 hover:bg-orange-400 hover:-translate-y-2 transition-transform duration-300">
            View All Plans
          </button>
          </motion.div>
        </div>
        <div className="bg-white flex flex-col sm:flex-row sm:gap-2 items-center rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border">
              <div className="text-center mb-6 sm:px-6">
                <span className="text-5xl font-semibold text-orange-400">
                  
                  $45
                </span>
                <h4 className="text-xl font-semibold mt-4">Standard clean</h4>
              </div>
              <div className='sm:border-l sm:px-20'>
              <ul className="space-y-2">
                {[
                   "Free Delivery",
                    "Shoes Repair",
                    "Standard Clean",
                    "1 Week Warranty",
                    "24/7 Support" 
                ].map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              </div>
        </div>

        <div className="bg-white flex flex-col sm:flex-row gap-2 items-center rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border">
              <div className="text-center mb-6 sm:px-6">
                <span className="text-5xl font-semibold text-orange-400">
                  
                  $25
                </span>
                <h4 className="text-xl font-semibold mt-4">Basic clean</h4>
              </div>
              <div className='sm:border-l sm:px-20'>
              <ul className="space-y-2">
                {[
                   "Free Delivery",
                    "Shoes Repair",
                    "Standard Clean",
                    "1 Week Warranty",
                    "24/7 Support" 
                ].map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              </div>
        </div>

        <div className="bg-white flex flex-col sm:flex-row gap-2 items-center rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border">
              <div className="text-center mb-6 px-6">
                <span className="text-5xl font-semibold text-orange-400">
                  
                  $75
                </span>
                <h4 className="text-xl font-semibold mt-4">Super clean</h4>
              </div>
              <div className='sm:border-l sm:px-20'>
              <ul className="space-y-2">
                {[
                   "Free Delivery",
                    "Shoes Repair",
                    "Standard Clean",
                    "1 Week Warranty",
                    "24/7 Support" 
                ].map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              </div>
        </div>

        </div>

        {/*  */}

        </div>
            
          

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-orange-400">
                  <span className="text-3xl align-top">$</span>
                  {plan.price}
                </span>
                <h4 className="text-xl font-semibold mt-4">{plan.name}</h4>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}


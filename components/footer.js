import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { LuClock8, LuFacebook, LuInstagram, LuTwitch, LuTwitter, LuYoutube } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#00A8FF] relative z-0">
    <div className="container px-2 sm:px-36  py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">

            <div className='sm:w-[30rem]'>
            <h1 className="text-3xl py-3 font-semibold tracking-tight text-gray-800 dark:text-white ">
            Join Our Newsletter
            </h1>
            <p className="text-lg font-thin tracking-tight text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo error voluptas repudiandae assumenda non reiciendis?</p>
            </div>
            
            <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="Enter your email address" className="input input-bordered sm:w-96" required/>
            <button className="btn px-10 bg-yellow-500 hover:bg-orange-400 border-none text-white ">Subcribe</button>
            </div>

        </div>
        
        <hr className="my-6 border-blue-300 md:my-10 "/>
        <div className='grid sm:grid-cols-3 w-full gap-2 place-content-center sm:py-10'>
            <div className='relative top-2 pb-20 sm:pb-0'>
                <Image src={'/images/white-shoes-logo.png'} width={280} height={280} alt='logo' className='py-5 sm:py-0'/>
                <p className='text-white py-4 sm:pr-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus optio animi dignissimos doloribus reiciendis</p>
                <div className="flex items-center gap-3 pt-3">
                    <button className='bg-yellow-500 text-white btn border-none'><LuFacebook size={20}/></button>
                    <button className='bg-yellow-500 text-white btn border-none'><LuTwitter size={20}/></button>
                    <button className='bg-yellow-500 text-white btn border-none'><LuInstagram size={20}/></button>
                    <button className='bg-yellow-500 text-white btn border-none'><LuYoutube size={20}/></button>
                </div>
            </div>
            <div className='col-span-2'>
            <div className='grid sm:grid-cols-3 gap-2'>
            <div className="pb-10">
                <p className="font-semibold text-gray-800 dark:text-white text-2xl pb-5">Quick Links</p>
                <hr className='w-20 h-1 border-0 rounded bg-yellow-400'/>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-white dark:hover:text-yellow-400  hover:text-blue-500">About Us</Link>
                    <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-white dark:hover:text-yellow-400  hover:text-blue-500">Services</Link>
                    <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-white dark:hover:text-yellow-400  hover:text-blue-500">Appointment</Link>
                    <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-white dark:hover:text-yellow-400  hover:text-blue-500">Pricing</Link>
                    <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-white dark:hover:text-yellow-400  hover:text-blue-500">Contact</Link>
                </div>
            </div>

            <div className="pb-10">
                <p className="font-semibold text-gray-800 dark:text-white text-2xl pb-5">Useful Links</p>
                <hr className='w-20 h-1 border-0 rounded bg-yellow-400'/>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-white dark:hover:text-yellow-400  hover:text-blue-500">Privacy Policy</Link>
                    <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-white dark:hover:text-yellow-400  hover:text-blue-500">Terms and Conditions</Link>
                    <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-white dark:hover:text-yellow-400  hover:text-blue-500">Disclaimer</Link>
                    <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-white dark:hover:text-yellow-400  hover:text-blue-500">Support</Link>
                    <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-white dark:hover:text-yellow-400  hover:text-blue-500">FAQ</Link>
                </div>
            </div>

            <div className="pb-10 sm:pb-0">
                <p className="font-semibold text-gray-800 dark:text-white text-2xl pb-5">Work Hours</p>
                <hr className='w-20 h-1 border-0 rounded bg-yellow-400'/>

                <div className="flex flex-col items-start mt-5 space-y-4">
                    <span className='flex gap-2 items-center'><LuClock8 className='text-yellow-400'/><h1 className='text-white'>9 AM - 10 AM, Monday - Saturday</h1></span>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae perferendis quos facilis error ullam quidem facere eveniet cumque unde velit!</p>
                    <button className="btn px-10 bg-yellow-500 hover:bg-orange-400 border-none text-white font-medium">Order Pickup Now</button>
                </div>
            </div>

            </div>
            </div>

        </div>        
        <hr className="my-6 border-blue-300 md:my-5 "/>
        
        <div className="flex flex-col items-center justify-end sm:flex-row">
           

            <p className=" text-sm text-gray-500 sm:mt-0 dark:text-white">© Copyright 2021. All Rights Reserved.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer
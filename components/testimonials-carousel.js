'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
  {
    name: "John Smith",
    role: "Regular Customer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: "/images/profile-1.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/images/profile-2.jpg"
  },
  {
    name: "Michael Brown",
    role: "Regular Customer",
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/profile-3.jpg"
  },
  {
    name: "Emily Davis",
    role: "Regular Customer",
    quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/images/profile-5.jpg"
  },
  {
    name: "David Wilson",
    role: "Regular Customer",
    quote: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    image: "/images/profile-1.jpg"
  }
];

export default function TestimonialsCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className=" px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-9xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-blue-400 text-sm font-semibold mb-2">Testimonials</h2>
          <h3 className="text-4xl font-bold mb-4">What Our Customers Say</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div> */}

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper sm:absolute sm:-left-[19rem]"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border rounded-xl p-6 md:p-8 flex flex-col items-center text-center h-full  w-full sm:h-[25rem]">
                <div className="w-16 h-20 md:w-20 md:h-20 rounded-full overflow-hidden mb-4 md:mb-6 relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <blockquote className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 italic flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <cite className="not-italic font-semibold text-base md:text-lg block">
                    {testimonial.name}
                  </cite>
                  <span className="text-blue-400 text-xs md:text-sm">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}


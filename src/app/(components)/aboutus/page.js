'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs(params) {
    return(
        <>

        <div className="container mx-auto max-w-[1880px] lg:h-[300px] md:h-[300px] h-[150] relative ">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0" >
              <Image
                        src="/pic1.jpg" 
                        alt="Background Banner" 
                        fill 
                        objectFit="cover" 
                        objectPosition="center" 
                        className="z-0"
                      />
                <div className="absolute inset-0 bg-gray-900/50"></div>
              </div>
        
              {/* Content Container */}
              <div className="relative z-10 container mx-auto px-4 py-[52px] lg:py-[112px]">
                {/* Left Section - Text Content */}
                <div className=" text-white ">
                  <h1 className="text-[26px] md:text-[32px] text-center md:leading-[48px] font-bold">
                  About Us
                  </h1>
                </div>
                </div>
        </div>


      <section className="py-16 my-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/pic1.jpg"
                alt="Healthy chickens in a farm"
                className="shadow-xl w-full h-[750] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Start Your Chicken Farming Journey
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're a beginner or experienced farmer, our comprehensive guides 
                and expert advice will help you raise healthy chickens. Learn about proper 
                feeding, housing, healthcare, and sustainable farming practices.
              </p>
              <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
            </div>
          </div>
        </div>
      </section>
        </>
    )
};

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


      <section className="py-8 my-8 lg:py-16 lg:my-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/pic1.jpg"
                alt="Healthy chickens in a farm"
                className="shadow-xl w-full lg:h-[750] h-[400] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-[54px] md:leading-[58px] font-bold text-amber-900 mb-6">
                Start Your Chicken Farming Journey
              </h2>
              <p className="text-lg text-gray-700 mb-8">
              Citrus Agro Vet is a dedicated provider of high-quality feed supplements and biotechnology-based veterinary products. Our expertise lies in developing innovative solutions that enhance animal health and productivity.

Our research and product development are in collaboration with TANUVAS (Tamil Nadu Veterinary and Animal Sciences University), ensuring scientifically-backed formulations that improve feed efficiency and overall animal well-being.

With over 20 years of experience in biotechnology, Citrus Agro Vet is committed to innovation in animal nutrition. <br/> <br/>  Our herbal and mineral-based feed supplements are formulated to enhance livestock health, strengthen immunity, and improve digestion.

We strive to develop eco-friendly and sustainable solutions for livestock nutrition through extensive research and development. Our products are tailored to boost growth, enhance productivity, and support disease resistance in poultry and livestock.

Our focus on natural ingredients, advanced biotechnology, and extensive research has made Citrus Agro Vet a trusted name in the animal nutrition industry.
              </p>
              <Link href="/contact">
        <button className="px-6 py-2 bg-[#121212] text-white"> Contact Us </button>
      </Link>
            </div>
          </div>
        </div>
      </section>
        </>
    )
};

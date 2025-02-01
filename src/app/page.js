'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {

  const farmImages = [
    {
      src: "/pic1.jpg",
      alt: "Brown rooster in natural setting",
      title: "Premium Roosters",
      description: "Our healthy, free-range roosters"
    },
    {
      src: "/pic1.jpg",
      alt: "Fresh eggs in nest",
      title: "Farm Fresh Eggs",
      description: "Daily collected fresh eggs"
    },
    {
      src: "/pic1.jpg",
      alt: "White chickens in farm",
      title: "Healthy Hens",
      description: "Well-cared laying hens"
    },
    {
      src: "/pic1.jpg",
      alt: "Baby chicks",
      title: "Baby Chicks",
      description: "Newly hatched chicks"
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is organic farming and why is it important?",
      answer: "Organic farming ensures that your poultry is raised without harmful chemicals, providing healthier eggs and meat."
    },
    {
      question: "Do you use antibiotics?",
      answer: "Our farming methods emphasize natural health management, reducing reliance on antibiotics."
    },
    {
      question: "How does organic farming impact the taste and nutrition of poultry?",
      answer: "Healthier diets lead to better-tasting poultry and eggs packed with nutrients."
    },
    {
      question: "How does organic farming keep our farm clean and safe?",
      answer: "Sustainable farming practices create a cleaner, safer environment for both poultry and farmers."
    }
  ];


	return (
    <>
     <section className="relative h-[580px] lg:h-[820px] flex items-center justify-center bg-gradient-to-b from-amber-100 to-white">
        <div className="absolute inset-0">
          <img 
            src="/hero.jpg" 
            alt="Chicken farm background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-[54px] md:leading-[58px] font-bold text-amber-900 mb-6">
          Essential Guide to Poultry Farming & Health
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-2xl mx-auto">
          Expert insights on raising healthy chickens and ducks for sustainable farming.
          </p>
          <Link href="/guide">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Lets Get Started </button>
      </Link>
        </div>
      </section>

      {/* Second Section */}
      <section className="lg:pt-16 pt-8 pb-4 my-8 lg:my-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/pic1.jpg"
                alt="Healthy chickens in a farm"
                className="shadow-xl w-full h-[400px] lg:h-[750] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-[54px] md:leading-[58px] font-bold text-gray-900 mb-6">
              Getting Started with <br/> Poultry Farming
              </h2>
              <p className="text-[20px] text-gray-700 mb-8">
              Whether you’re a beginner or an experienced farmer, our comprehensive guide and expert advice will help you maintain a thriving poultry flock. 
              Learn about proper feeding, housing, healthcare, and sustainable farming practices. <br/> <br/> 

              Expanding your poultry farm requires careful planning and investment in modern techniques. From automated feeding systems to climate-controlled housing, innovations in poultry farming help improve productivity while ensuring bird welfare. 
              Understanding the economic aspects, market demands, and sustainable practices can lead to long-term success in the poultry industry.
              </p>
              <Link href="/aboutus">
        <button className="px-6 py-2 bg-amber-800 text-white"> Read More </button>
      </Link>
            </div>
          </div>
        </div>
      </section>

              {/*  Section 3 Section */}
              <section className="container mx-auto px-4 lg:my-16 lg:py-16 my-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {farmImages.map((image, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[200px] lg:h-[256px] object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
              <h3 className="text-white font-semibold text-lg">
                {image.title}
              </h3>
              <p className="text-white text-sm">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>


    {/*  Section 4 Section */}
    <main className="lg:py-16 lg:my-16 py-8 my-8 bg-white">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}

          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl md:text-[54px] md:leading-[58px] font-bold text-gray-900">
            Sustainable Poultry and Egg Production
            </h1>
            
            <p className="text-gray-600 text-[20px]">
            Implementing efficient farming practices and ensuring competitive quality for products that sustain progress. 
            Our focus is on ethical farming and superior poultry care.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-600 text-[20px] ">Prioritizing poultry welfare.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-600 text-[20px]">Enhancing efficiency in poultry farming.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-600 text-[20px]">Maintaining high standards in farming environments.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-600 text-[20px]">Collaborate with us for modern poultry solutions.</span>
              </div>
            </div>

            <div>
            <Link href="/contact">
        <button className="px-6 py-2 bg-amber-800 text-white"> Contact Us </button>
      </Link>
            </div>
          </div>

          {/* Right Column */}

          <div className="space-y-8">
            {/* Main Image */}
            <div className="overflow-hidden">
              <img
                src="/pic1.jpg"
                alt="Woman holding fresh eggs in basket"
                className="w-full h-[550px] object-cover"
              />
            </div>
            
            {/* Experience Box */}
            {/* <div className="bg-amber-600 p-6 text-white inline-block">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold">22</span>
                <div className="text-lg leading-tight">
                  Years<br />Experience
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </main>


            {/* CTA Banner */}
        <div className="container mx-auto p-4 lg:px-16 bg-amber-900 text-white lg:my-16 lg:py-16 my-8 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between align-middle lg:items-center items-left space-y-4 md:space-y-0">
              <div className="lg:text-left md:text-left text-left">
                <h2 className="text-[32px] text-[#fff] md:text-[34px] font-bold mb-2">
                Join Our Poultry Farming Community
                </h2>
                <p className="text-gray-100 text-[20px]">
                Stay updated with the latest poultry farming trends and expert recommendations to improve your farm’s efficiency.
                </p>
              </div>
              <Link href="/contact">
        <button className="px-6 py-2 bg-[#121212] text-white"> Contact Us </button>
      </Link>
            </div>
          </div>
        </div>


    {/*  Section 5 Section */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}

          <div className="relative">
            <div className="overflow-hidden">
              <img
                src="/pic1.jpg"
                alt="White duck close-up"
                className="w-full lg:h-[700] h-[350] object-cover"
              />
            </div>
            {/* Decorative shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-100 -z-10"></div>
          </div>

          <div>
            {/* <span className="text-gray-500 mb-4 inline-block">— Top Frequently —</span> */}
            <h1 className="pt-12 lg:pt-0 text-4xl md:text-[54px] md:leading-[58px] font-bold text-gray-900 mb-4">
            Ensuring Optimal Health for {' '}
              <span className="text-amber-500">Chickens</span>
            </h1>

          {/* Right Image */}
                        {/* FAQ Accordion */}
                        <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                      +
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <p className="p-4 text-gray-600 bg-gray-50">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
	);
}

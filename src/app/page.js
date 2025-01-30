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
      answer: "It is a long established fact first, a reader will be distracted by the readable content and page when looking at its layout. The point of using Lorem there is not ipsum. Various versions have evolved (by accident, sometimes on purpose (injected humour and the like))."
    },
    {
      question: "Do you use herbicides?",
      answer: "No, we practice organic farming methods that avoid the use of herbicides. Instead, we use natural weed control methods and sustainable farming practices to maintain the health of our poultry and protect the environment."
    },
    {
      question: "What do you add to the soil before you plant a crop?",
      answer: "We enrich our soil with organic compost, natural fertilizers, and cover crops. This helps maintain soil fertility, improves structure, and provides essential nutrients for healthy crop growth that benefits our poultry."
    },
    {
      question: "How does organic farming improve soil and water quality?",
      answer: "Organic farming improves soil health through natural composting, crop rotation, and avoiding synthetic chemicals. This leads to better water retention, reduced erosion, and improved water quality for our ducks and poultry."
    }
  ];


	return (
    <>
     <section className="relative h-[820px] flex items-center justify-center bg-gradient-to-b from-amber-100 to-white">
        <div className="absolute inset-0">
          <img 
            src="/hero.jpg" 
            alt="Chicken farm background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
            Learn How to Grow Healthy Chickens
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-2xl mx-auto">
            Expert guidance on raising happy, healthy chickens for sustainable farming
          </p>
          <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
        </div>
      </section>

      {/* Second Section */}
      <section className="pt-16 pb-4 my-16 bg-white">
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

              {/*  Section 3 Section */}
              <section className="container mx-auto px-4 my-16 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {farmImages.map((image, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
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
    <main className="py-16 my-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}

          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome to Our Poultry And Egg Farm.
            </h1>
            
            <p className="text-gray-600 text-lg">
              Cost-effective productive competitive quality for packed with taskless 
              processes compelling quality top species with all banker! From getting 
              to business marketing quality.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-800">We are providing different services</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-800">We are one of leading company</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-800">Profitability is the primary goal of all business</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-800">Learn how to grow your Business</span>
              </div>
            </div>

            <div>
            <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
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
        <div className="container mx-auto px-16 bg-gray-100 text-white my-16 py-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between align-middle space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h2 className="text-2xl text-[#353535] md:text-3xl font-bold mb-2">
                  Call to Action Banner
                </h2>
                <p className="text-gray-400 text-[18px]">
                  Here's a great place to write something specific that you want your visitors to read.
                </p>
              </div>
              <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
            </div>
          </div>
        </div>


    {/*  Section 5 Section */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}

          <div className="relative">
            <div className="overflow-hidden">
              <img
                src="/pic1.jpg"
                alt="White duck close-up"
                className="w-full h-[700] object-cover"
              />
            </div>
            {/* Decorative shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-100 -z-10"></div>
          </div>

          <div>
            {/* <span className="text-gray-500 mb-4 inline-block">— Top Frequently —</span> */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We take care of duck And{' '}
              <span className="text-amber-500">Poultry</span> health
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

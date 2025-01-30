'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Guide(params) {
    return(
        <>
<div className="container mx-auto max-w-[1880px] lg:h-[300px] md:h-[300px] h-[150] relative ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" >
      <Image
                src="/pic1.jpg" 
                alt="Background Banner" 
                layout="fill" 
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
          Guide
          </h1>
        </div>
        </div>
</div>


    {/* Sections division 1 */}
  <div className='container mx-auto pt-16 mt-16'>
  <div className="scroll-mt-[100px] flex flex-col w-full ">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Left Side - Image (on top for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={735}
                height={735}
        />
      </div>
    </div>

    {/* Right Side - Description (below image for mobile, right for tablet/desktop) */}
    <div className="scroll-mt-[300px] w-full md:w-1/2 my-auto p-0 lg:p-12 rounded-lg align-middle text-left order-2 md:order-2">
      <h2 className="lg:text-[36px] text-[28px] md:text-[32px] leading-[44px] font-semibold text-[#121212] text-left mt-4">
       Building 2D plans
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      Our UX/UI design services focus on creating seamless, intuitive, and aesthetically pleasing experiences for your users. We ensure that every interaction with your website or application is smooth, efficient, and engaging, enhancing overall satisfaction and conversion rates.
      </p>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-2 pb-3">
        Whether you're redesigning an existing interface or building one from scratch, we craft designs that are not only visually appealing but also user-centered and functional.
      </p>
      <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
    </div>
  </div>
</div>

<div className="scroll-mt-[100px] flex flex-col w-full">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Right Side - Image (on top for mobile, right for tablet/desktop) */}
    <div className="w-full md:w-1/2 p-0 my-auto lg:p-12 rounded-lg align-middle text-left  order-2 md:order-1">
	<h2 className="lg:text-[36px] text-[28px] md:text-[32px] leading-[44px] font-semibold text-[#121212] text-left mt-4">
        Plan Approvals
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      Social media is an essential tool for growing your brand and connecting with your audience. We offer expert social media marketing (SMM) services, focusing on crafting tailored strategies for platforms like Instagram, LinkedIn, Twitter, and Facebook.      </p>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-2 pb-3">
      From engaging content creation to targeted ad campaigns, we help you build a strong social presence, increase brand awareness, and foster meaningful connections with your customers.
      </p>
      <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
    </div>

    {/* Left Side - Description (below image for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">

    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={735}
                height={735}
        />
      </div>
    </div>
  </div>
</div>
</div>


 {/* Sections division 2 */}
<div className='container mx-auto'>
  <div className="scroll-mt-[100px] flex flex-col w-full ">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Left Side - Image (on top for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={735}
                height={735}
        />
      </div>
    </div>

    {/* Right Side - Description (below image for mobile, right for tablet/desktop) */}
    <div className="scroll-mt-[300px] w-full md:w-1/2 my-auto p-0 lg:p-12 rounded-lg align-middle text-left order-2 md:order-2">
      <h2 className="lg:text-[36px] text-[28px] md:text-[32px] leading-[44px] font-semibold text-[#121212] text-left mt-4">
       Building 2D plans
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      Our UX/UI design services focus on creating seamless, intuitive, and aesthetically pleasing experiences for your users. We ensure that every interaction with your website or application is smooth, efficient, and engaging, enhancing overall satisfaction and conversion rates.
      </p>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-2 pb-3">
        Whether you're redesigning an existing interface or building one from scratch, we craft designs that are not only visually appealing but also user-centered and functional.
      </p>
      <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
    </div>
  </div>
</div>

<div className="scroll-mt-[100px] flex flex-col w-full">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Right Side - Image (on top for mobile, right for tablet/desktop) */}
    <div className="w-full md:w-1/2 p-0 my-auto lg:p-12 rounded-lg align-middle text-left  order-2 md:order-1">
	<h2 className="lg:text-[36px] text-[28px] md:text-[32px] leading-[44px] font-semibold text-[#121212] text-left mt-4">
        Plan Approvals
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      Social media is an essential tool for growing your brand and connecting with your audience. We offer expert social media marketing (SMM) services, focusing on crafting tailored strategies for platforms like Instagram, LinkedIn, Twitter, and Facebook.      </p>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-2 pb-3">
      From engaging content creation to targeted ad campaigns, we help you build a strong social presence, increase brand awareness, and foster meaningful connections with your customers.
      </p>
      <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
    </div>

    {/* Left Side - Description (below image for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">

    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={735}
                height={735}
        />
      </div>
    </div>
  </div>
</div>
</div>


{/* Sections division 3 */}
<div className='container mx-auto'>
  <div className="scroll-mt-[100px] flex flex-col w-full ">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Left Side - Image (on top for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          layout="fill"
          objectFit="Cover"
        />
      </div>
    </div>

    {/* Right Side - Description (below image for mobile, right for tablet/desktop) */}
    <div className="scroll-mt-[300px] w-full md:w-1/2 my-auto p-0 lg:p-12 rounded-lg align-middle text-left order-2 md:order-2">
      <h2 className="lg:text-[36px] text-[28px] md:text-[32px] leading-[44px] font-semibold text-[#121212] text-left mt-4">
       Building 2D plans
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      Our UX/UI design services focus on creating seamless, intuitive, and aesthetically pleasing experiences for your users. We ensure that every interaction with your website or application is smooth, efficient, and engaging, enhancing overall satisfaction and conversion rates.
      </p>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-2 pb-3">
        Whether you're redesigning an existing interface or building one from scratch, we craft designs that are not only visually appealing but also user-centered and functional.
      </p>
      <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
    </div>
  </div>
</div>

<div className="scroll-mt-[100px] flex flex-col w-full">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Right Side - Image (on top for mobile, right for tablet/desktop) */}
    <div className="w-full md:w-1/2 p-0 my-auto lg:p-12 rounded-lg align-middle text-left  order-2 md:order-1">
	<h2 className="lg:text-[36px] text-[28px] md:text-[32px] leading-[44px] font-semibold text-[#121212] text-left mt-4">
        Plan Approvals
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      Social media is an essential tool for growing your brand and connecting with your audience. We offer expert social media marketing (SMM) services, focusing on crafting tailored strategies for platforms like Instagram, LinkedIn, Twitter, and Facebook.      </p>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-2 pb-3">
      From engaging content creation to targeted ad campaigns, we help you build a strong social presence, increase brand awareness, and foster meaningful connections with your customers.
      </p>
      <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
    </div>

    {/* Left Side - Description (below image for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">

    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={735}
                height={735}
        />
      </div>
    </div>
  </div>
</div>
</div>


{/* Sections division 4 */}
<div className='container mx-auto'>
  <div className="scroll-mt-[100px] flex flex-col w-full ">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Left Side - Image (on top for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={735}
                height={735}
        />
      </div>
    </div>

    {/* Right Side - Description (below image for mobile, right for tablet/desktop) */}
    <div className="scroll-mt-[300px] w-full md:w-1/2 my-auto p-0 lg:p-12 rounded-lg align-middle text-left order-2 md:order-2">
      <h2 className="lg:text-[36px] text-[28px] md:text-[32px] leading-[44px] font-semibold text-[#121212] text-left mt-4">
       Building 2D plans
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      Our UX/UI design services focus on creating seamless, intuitive, and aesthetically pleasing experiences for your users. We ensure that every interaction with your website or application is smooth, efficient, and engaging, enhancing overall satisfaction and conversion rates.
      </p>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-2 pb-3">
        Whether you're redesigning an existing interface or building one from scratch, we craft designs that are not only visually appealing but also user-centered and functional.
      </p>
      <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
    </div>
  </div>
</div>

<div className="scroll-mt-[100px] flex flex-col w-full mb-36">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Right Side - Image (on top for mobile, right for tablet/desktop) */}
    <div className="w-full md:w-1/2 p-0 my-auto lg:p-12 rounded-lg align-middle text-left  order-2 md:order-1">
	<h2 className="lg:text-[36px] text-[28px] md:text-[32px] leading-[44px] font-semibold text-[#121212] text-left mt-4">
        Plan Approvals
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      Social media is an essential tool for growing your brand and connecting with your audience. We offer expert social media marketing (SMM) services, focusing on crafting tailored strategies for platforms like Instagram, LinkedIn, Twitter, and Facebook.      </p>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-2 pb-3">
      From engaging content creation to targeted ad campaigns, we help you build a strong social presence, increase brand awareness, and foster meaningful connections with your customers.
      </p>
      <Link href="/contact">
        <button className="px-6 py-2 my-4 bg-[#121212] text-white"> Contact Us </button>
      </Link>
    </div>

    {/* Left Side - Description (below image for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">

    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={735}
                height={735}
        />
      </div>
    </div>
  </div>
</div>
</div>
        </>
    )
};

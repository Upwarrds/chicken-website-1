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
      answer: "Organic farming ensures that your poultry is raised without harmful chemicals, providing healthier eggs and meat. (இயற்கை விவசாயம் உங்கள் கோழிகளை ஹானி தரும் ரசாயனங்கள் இல்லாமல் வளர்க்க உதவுகிறது, மேலும் ஆரோக்கியமான முட்டைகள் மற்றும் இறைச்சியை வழங்குகிறது.)"
    },
    {
      question: "Do you use antibiotics?",
      answer: "Our farming methods emphasize natural health management, reducing reliance on antibiotics. (எங்கள் விவசாய முறைகள் இயற்கை ஆரோக்கிய மேலாண்மையை முக்கியமாகக் கருதி, அந்திபயோட்டிக்குகளின் பொறுப்பை குறைக்கின்றன.)"
    },
    {
      question: "How does organic farming impact the taste and nutrition of poultry?",
      answer: "Healthier diets lead to better-tasting poultry and eggs packed with nutrients. (ஆரோக்கியமான உணவுமுறைகள் அதிக சத்துக்கள் நிறைந்த சிறந்த சுவையுடைய கோழி இறைச்சி மற்றும் முட்டைகளை வழங்குகின்றன.)"
    },
    {
      question: "How does organic farming keep our farm clean and safe?",
      answer: "Sustainable farming practices create a cleaner, safer environment for both poultry and farmers. (நிலைத்தன்மை வாய்ந்த விவசாய முறைகள், கோழிகளுக்கும் விவசாயிகளுக்கும் மேலும் தூய்மையான மற்றும் பாதுகாப்பான சூழலை உருவாக்குகின்றன.)"
    }
  ];


	return (
    <>
     <section className="relative h-[850px] lg:h-[860px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/banner.jpg" 
            alt="Chicken farm background" 
            className="w-full h-full object-cover opacity-1"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-[32px] md:text-[54px] md:leading-[58px] font-bold text-[#fff] mb-8">
          Essential Guide to Poultry Farming & Health <br /> <span className='text-[26px] md:text-[36px] md:leading-[58px] font-bold text-[#fff]'> கோழிப்பண்ணை மற்றும் ஆரோக்கியத்தின் அத்தியாவசிய வழிகாட்டி </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#e9e8e8] mb-8 max-w-[1200px] mx-auto">
          Expert insights on raising healthy chickens and ducks for sustainable farming.
          <br /> <span className='text-xl md:text-[20px] md:leading-[30px] font-medium text-text-[#555]'> டிநிலைத்தன்மை வாய்ந்த விவசாயத்திற்கு ஆரோக்கியமான கோழிகள் மற்றும் வாத்துகளை வளர்ப்பதற்கான நிபுணர்களின் நுணுக்கமான அறிவு. </span>
          </p>
          <Link href="/guide">
        <button className="px-6 py-3 my-4 bg-[#4fca59] font-semibold text-white"> Lets Get Started </button>
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
                className="shadow-xl w-full h-[400px] lg:h-[1050px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[34px] md:text-[54px] md:leading-[58px] font-bold text-gray-900 mb-6">
              Getting Started with <br/> Poultry Farming
              </h2>
              <p className="text-[18px] lg:text-[20px] text-[#555] mb-8">
              Whether you’re a beginner or an experienced farmer, our comprehensive guide and expert advice will help you maintain a thriving poultry flock. 
              Learn about proper feeding, housing, healthcare, and sustainable farming practices.
              Expanding your poultry farm requires careful planning and investment in modern techniques. From automated feeding systems to climate-controlled housing, innovations in poultry farming help improve productivity while ensuring bird welfare. 
              Understanding the economic aspects, market demands, and sustainable practices can lead to long-term success in the poultry industry.

              <br/> <br/>

              <span className='text-[18px] lg:text-[20px] md:leading-[30px] font-medium text-[#555]'> நீங்கள் ஒரு தொடக்க நிலை விவசாயியாக இருந்தாலோ, அனுபவம் வாய்ந்த விவசாயியாக இருந்தாலோ, எங்கள் விரிவான வழிகாட்டியும் நிபுணர்களின் அறிவுரைகளும் உங்கள் கோழிப்பண்ணையை செழிக்கச் செய்ய உதவும்.
தக்க உணவளிப்பு, உறைவிடம், மருத்துவ பராமரிப்பு மற்றும் நிலைத்தன்மை வாய்ந்த விவசாய முறைகளை பற்றிய அறிவைப் பெறுங்கள்.
உங்கள் கோழிப்பண்ணையை விரிவாக்குவதற்குப் பொருத்தமான திட்டமிடல் மற்றும் நவீன தொழில்நுட்பங்களில் முதலீடு அவசியம். தானியங்கி உணவளிப்பு அமைப்புகள் முதல் காலநிலை கட்டுப்பாடு செய்யக்கூடிய உறைவிடங்கள் வரை, கோழி வளர்ப்பில் புதுமையான முறைகள் உற்பத்தியை மேம்படுத்துவதோடு பறவைகளின் நலனையும் உறுதி செய்கின்றன.
பொருளாதார அம்சங்கள், சந்தை தேவைகள் மற்றும் நிலைத்தன்மை வாய்ந்த நடைமுறைகளைப் புரிந்துகொள்வது, கோழி வளர்ப்பு தொழிலில் நீண்ட கால வெற்றியை வழங்கும். </span>
              </p>
              <Link href="/aboutus">
        <button className="px-6 py-2 bg-[#4fca59] font-semibold text-white"> Read More </button>
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
            {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
              <h3 className="text-white font-semibold text-lg">
                {image.title}
              </h3>
              <p className="text-white text-sm">
                {image.description}
              </p>
            </div> */}
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
            
            <p className="text-gray-600 text-[18px] lg:text-[20px]">
            Implementing efficient farming practices and ensuring competitive quality for products that sustain progress. 
            Our focus is on ethical farming and superior poultry care. <br/> <br/>

            <span className='text-[18px] lg:text-[20px] md:leading-[30px] font-medium text-[#555]'> சரியான விவசாய முறைகளை செயல்படுத்தி, முன்னேற்றத்தை நிலைநிறுத்தும் உயர்தர தயாரிப்புகளை உறுதி செய்யுதல். 
              நாங்கள் ஒழுங்குமுறை விவசாயம் மற்றும் சிறந்த கோழி பராமரிப்பில் கவனம் செலுத்துகிறோம். </span>
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-600 text-[18px] lg:text-[20px] ">Prioritizing poultry welfare. (கோழிகளின் நலனை முன்னிலைப்படுத்துதல்.) </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-600 text-[18px] lg:text-[20px]">Enhancing efficiency in poultry farming. (கோழி வளர்ப்பில் செயல்திறனை மேம்படுத்துதல்.) </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-600 text-[18px] lg:text-[20px]">Maintaining high standards in farming environments. (உயர்தர விவசாய சூழலை பாதுகாத்தல்.) </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600"></div>
                <span className="text-gray-600 text-[18px] lg:text-[20px]">Collaborate with us for modern poultry solutions. (நவீன கோழி வளர்ப்பு தீர்வுகளுக்காக எங்களுடன் இணைந்து செயல்படுங்கள்.) </span>
              </div>
            </div>

            <div>
            <Link href="/contact">
        <button className="px-6 py-2 bg-[#4fca59] text-white"> Contact Us </button>
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
                className="shadow-xl w-full h-[400px] lg:h-[950] object-cover"
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
                <p className="text-gray-100 text-[18px] lg:text-[20px]">
                Stay updated with the latest poultry farming trends and expert recommendations to improve your farm’s efficiency. <br/><br/>
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

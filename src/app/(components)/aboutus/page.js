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
                className="shadow-xl w-full lg:h-[900] h-[400] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-[54px] md:leading-[58px] font-bold text-[#353535] mb-6">
                Start Your Chicken Farming Journey
              </h2>
              <p className="text-[18px] lg:text-[20px] text-[#555] mb-8">
              Citrus Agro Vet specializes in high-quality feed supplements and biotech-based veterinary products, enhancing animal health and productivity. 
              With 20+ years of experience and collaboration with TANUVAS, we develop scientifically-backed, eco-friendly solutions. Our herbal and mineral-based 
              supplements improve immunity, digestion, and disease resistance in poultry and livestock, making us a trusted name in animal nutrition. <br/><br/>

              <span className='text-[18px] lg:text-[20px] md:leading-[34px] font-medium text-[#555]'>சிட்ரஸ் ஆக்ரோ வெட் உயர்தர தீவனச் சேர்க்கைகள் மற்றும் உயிரி தொழில்நுட்ப அடிப்படையிலான கால்நடை மருத்துவ பொருட்களில் சிறப்பு பெற்ற நிறுவனம் ஆகும். இது கால்நடைகளின் ஆரோக்கியத்தையும் உற்பத்தித் திறனையும் மேம்படுத்துவதில் முக்கிய பங்கு வகிக்கிறது.
20 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், TANUVAS உடன் இணைந்து செயல்பட்டு, அறிவியல் ஆதாரத்துடன் கூடிய, சுற்றுச்சூழலுக்கு உகந்த தீர்வுகளை உருவாக்குகிறோம்.
எங்கள் மூலிகை மற்றும் கனிம அடிப்படையிலான தீவனச் சேர்க்கைகள், கோழிகள் மற்றும் கால்நடைகளின் நோய் எதிர்ப்புத் திறன், செரிமானம் மற்றும் நோய் எதிர்ப்பு சக்தியை மேம்படுத்த உதவுகிறது. இதன்மூலம், கால்நடை ஊட்டச்சத்து துறையில் நம்பிக்கைக்குரிய நிறுவனமாக சிட்ரஸ் ஆக்ரோ வெட் உயர்ந்துள்ளோம்.</span>
              </p>
              {/* <Link href="/contact">
        <button className="px-6 py-2 bg-[#121212] text-white"> Contact Us </button>
      </Link> */}
            </div>
          </div>
        </div>
      </section>
        </>
    )
};

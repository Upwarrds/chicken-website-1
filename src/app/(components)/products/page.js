'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Products(params) {
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
          Products
          </h1>
        </div>
        </div>
</div>


    {/* Sections division 1 */}
    <div className='container mx-auto pt-12 mt-12'>
  <div className="scroll-mt-[100px] flex flex-col w-full ">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Left Side - Image (on top for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={1600}
          height={1600}
        />
      </div>
    </div>

    {/* Right Side - Description (below image for mobile, right for tablet/desktop) */}
    <div className="scroll-mt-[300px] w-full md:w-1/2 my-auto p-0 lg:p-12 rounded-lg align-middle text-left order-2 md:order-2">
      <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Herbal Ready Mix
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      Citrus-based feed supplements play a crucial role in improving poultry health and productivity. These supplements help enhance immunity, boost growth, and ensure overall well-being. Our specially formulated feed supplements are designed to provide essential nutrients, improve digestion, and optimize performance. Scientific research and advanced formulation techniques ensure that our feed supplements contribute to healthier and more efficient poultry farming.
      </p>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Effectively binds toxins in the intestines and eliminates harmful substances.</li>
                <li>Supports liver function by reducing stress, protecting against damage, and improving digestion.</li>
                <li>Enhances gut health and supports microbial balance, improving digestion and nutrient absorption.</li>
                <li>Strengthens immunity and resistance against infections, reducing disease risks.</li>
                <li>Increases feed efficiency, promoting better growth and weight gain.</li>
                <li>Reduces stress, improving overall health and performance.</li>
                <li>Helps in detoxification, promoting better liver function and improved metabolism.</li>
              </ul>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Composition</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Herbal Toxin Binder</li>
                <li>Liver Stimulants</li>
                <li>Vitamins and Mineral Composition</li>
                <li>Natural Choline</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Dosage</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Standard inclusion rate: 5 kg per ton of feed</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double-layer packaging</li>
                <li>5 kg pack size × 4 Nos.</li>
              </ul>
      {/* <Link href="/contact">
        <button className="px-6 py-2 bg-[#121212] text-white"> Contact Us </button>
      </Link> */}
    </div>
  </div>
</div>

<div className="scroll-mt-[100px] flex flex-col w-full">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Right Side - Image (on top for mobile, right for tablet/desktop) */}
    <div className="w-full md:w-1/2 p-0 my-auto lg:p-12 rounded-lg align-middle text-left  order-2 md:order-1">
	    <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
       Goat Pen Oil Plan - Ectoparasite Control
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      During certain seasons, ectoparasites (external parasites) such as lice and mites are commonly found in goat and sheep pens. 
      These parasites cause skin diseases and irritation, reducing the health and productivity of the animals.</p>

      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      To control these parasites, spraying a specially formulated oil inside the pens can be effective. 
      This method ensures that ectoparasites are eliminated, providing a healthier environment for the goats and sheep.</p>

      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      The oil used for this purpose is made from natural plant extracts and essential oils, making it safe and effective. It prevents parasites from spreading, 
      reduces skin irritation, and keeps the animals comfortable. Additionally, it helps in maintaining overall hygiene and sanitation within the pens.</p>

      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      This method of parasite control is not only effective but also eco-friendly, as it avoids the use of harmful 
      chemical pesticides. It ensures better health for the livestock and improves their growth and productivity.</p>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Prevents and controls external parasites such as lice and mites.</li>
                <li>Reduces skin irritation and improves animal health.</li>
                <li>Enhances hygiene and sanitation in goat and sheep pens.</li>
                <li>Uses natural plant extracts, making it safe and eco-friendly.</li>
                <li>Improves livestock growth and overall productivity.</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Usage Instructions</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Mix 15 grams of Products A, B, and C in 45 liters of water and spray inside the pens.</li>
                <li>Use 1 ton of feed-grade salt per batch while applying the spray.</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double layer – 20 kg pack size.</li>
              </ul>
              
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


    {/* Sections division 2 */}

  <div className="scroll-mt-[100px] flex flex-col w-full ">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Left Side - Image (on top for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={1600}
          height={1600}
        />
      </div>
    </div>

    {/* Right Side - Description (below image for mobile, right for tablet/desktop) */}
    <div className="scroll-mt-[300px] w-full md:w-1/2 my-auto p-0 lg:p-12 rounded-lg align-middle text-left order-2 md:order-2">
      <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Natural Toxin Binder
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      Contaminated or poor-quality feed can contain harmful fungal toxins such as aflatoxin, ochratoxin, and zearalenone, 
      which can negatively impact livestock health. These toxins weaken the immune system, reduce productivity, and cause various diseases in animals.</p>

      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      A natural toxin binder is essential to remove these harmful substances from the feed. This product effectively absorbs and 
      eliminates toxins, protecting the animals from health issues.</p>

      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      The natural toxin binder is formulated using safe and natural ingredients. It helps prevent toxins from entering the animal’s bloodstream, ensuring better digestion and nutrient absorption. 
      Regular use of this binder in feed promotes healthy growth, improves immunity, and enhances overall livestock performance.</p>


      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Effectively absorbs and removes harmful toxins from animal feed.</li>
                <li>Strengthens the immune system and prevents toxin-related diseases.</li>
                <li>Enhances digestion and nutrient absorption for better growth.</li>
                <li>Improves overall health and productivity of livestock.</li>
                <li>Made from natural ingredients, ensuring safety and eco-friendliness.</li>
              </ul>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Key Ingredients</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>HSCAS, Activated Charcoal, Chlorella, Yeast, and Centella Asiatica</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Usage Instructions</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>For normal conditions: 1 to 2 kg per ton of feed</li>
                <li>For high contamination levels: 3 to 5 kg per ton of feed</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double layer – 20 kg pack size.</li>
              </ul>
      {/* <Link href="/contact">
        <button className="px-6 py-2 bg-[#121212] text-white"> Contact Us </button>
      </Link> */}
    </div>
  </div>
</div>

<div className="scroll-mt-[100px] flex flex-col w-full">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Right Side - Image (on top for mobile, right for tablet/desktop) */}
    <div className="w-full md:w-1/2 p-0 my-auto lg:p-12 rounded-lg align-middle text-left  order-2 md:order-1">
	    <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Moisture Absorbent
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      Excessive moisture in animal feed leads to fungal growth, reducing the quality and nutritional value of the feed. The presence of moisture creates a 
      favorable environment for mold, bacteria, and harmful toxins, which negatively affect animal health.</p>

      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      To control moisture levels, Geolites, a highly effective absorbent mineral, is used. This helps in maintaining the feed's dryness, preventing
       the growth of harmful microorganisms, and ensuring better feed storage conditions.</p>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Absorbs excess moisture in feed and maintains its quality.</li>
                <li>Prevents the growth of mold, fungi, and harmful bacteria.</li>
                <li>Improves feed stability and prevents spoilage.</li>
                <li>Enhances digestion and nutrient absorption in animals.</li>
                <li>Ensures a healthier environment for livestock.</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Key Ingredients</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Naturally occurring mineral known as Zeolite, formed through volcanic activity.</li>
                <li>Highly effective in absorbing moisture and preventing fungal contamination.</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Usage Instructions</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>For normal conditions: 1 to 2 kg per ton of feed.</li>
                <li>For high-moisture conditions: 3 to 5 kg per ton of feed.</li>
                <li>For litter management: Up to 10 kg.</li>
              </ul>


              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double layer – 20 kg pack size.</li>
              </ul>
              
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


    {/* Sections division 3 */}

  <div className="scroll-mt-[100px] flex flex-col w-full ">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Left Side - Image (on top for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={1600}
          height={1600}
        />
      </div>
    </div>

    {/* Right Side - Description (below image for mobile, right for tablet/desktop) */}
    <div className="scroll-mt-[300px] w-full md:w-1/2 my-auto p-0 lg:p-12 rounded-lg align-middle text-left order-2 md:order-2">
      <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Natural Vitamins & Minerals
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      Natural vitamins and minerals play a vital role in animal health, growth, and performance. These essential nutrients are crucial for various metabolic processes, immunity, and overall well-being. 
      Using natural sources instead of synthetic supplements ensures better absorption and long-term benefits.</p>


      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Improves growth rate and enhances immune response.</li>
                <li>Supports gut health and improves digestion efficiency.</li>
                <li>Strengthens bones and muscles, ensuring better skeletal development.</li>
                <li>Enhances feed efficiency, leading to improved weight gain and performance.</li>
                <li>Helps in stress management and overall well-being of animals.</li>
              </ul>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Composition</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Spirulina platensis</li>
                <li>Telfaria occidentalis</li>
                <li>Celosia argentea</li>
                <li>Moringa oleifera</li>
                <li>Vernonia amygdalina</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Dosage</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Standard inclusion rate: 3 kg per ton of feed</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double-layer packaging – 20 kg pack size.</li>
              </ul>
      {/* <Link href="/contact">
        <button className="px-6 py-2 bg-[#121212] text-white"> Contact Us </button>
      </Link> */}
    </div>
  </div>
</div>

<div className="scroll-mt-[100px] flex flex-col w-full">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Right Side - Image (on top for mobile, right for tablet/desktop) */}
    <div className="w-full md:w-1/2 p-0 my-auto lg:p-12 rounded-lg align-middle text-left  order-2 md:order-1">
	    <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Turmeric Powder
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      Turmeric has been used for centuries in food and medicine due to its powerful antioxidant, anti-inflammatory, and antimicrobial properties. 
      The active ingredient, curcumin, helps in liver protection, digestion improvement, and overall health enhancement in livestock.</p>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Acts as a natural immune booster, helping to fight infections.</li>
                <li>Improves gut health and digestion efficiency.</li>
                <li>Supports liver function and detoxification.</li>
                <li>Reduces oxidative stress and inflammation in animals.</li>
                <li>Enhances overall growth and performance.</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Composition</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Curcumin Content: 3 to 4% (Guaranteed, as per ICAR Lab)</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Dosage</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Standard inclusion rate: 0.5 kg to 1 kg per ton of feed</li>
                <li>Therapeutic inclusion rate: 1 to 3 kg per ton of feed</li>
                <li>For broilers: 5 to 8 grams per kg of feed</li>
              </ul>


              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double-layer packaging – 20 kg pack size.</li>
              </ul>
              
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



    {/* Sections division 4 */}

  <div className="scroll-mt-[100px] flex flex-col w-full ">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Left Side - Image (on top for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={1600}
          height={1600}
        />
      </div>
    </div>

    {/* Right Side - Description (below image for mobile, right for tablet/desktop) */}
    <div className="scroll-mt-[300px] w-full md:w-1/2 my-auto p-0 lg:p-12 rounded-lg align-middle text-left order-2 md:order-2">
      <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Herbal Methionine
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      Methionine is an essential amino acid that plays a crucial role in protein synthesis, growth, and metabolism in animals. Our herbal methionine is derived from plant-based sources, 
      making it a sustainable and natural alternative to synthetic methionine.</p>


      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Supports muscle growth and protein metabolism.</li>
                <li>Enhances immunity and overall health.</li>
                <li>Improves feed efficiency and weight gain.</li>
                <li>Reduces dependency on synthetic amino acids.</li>
                <li>Supports proper skeletal and feather development.</li>
              </ul>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Composition</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Cicer arientinum</li>
                <li>Phaseolus mungo</li>
                <li>Triticum sativum</li>
                <li>Mucuna pruriens</li>
                <li>Allium cepa</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Dosage</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Standard inclusion rate: 0.5 kg per ton of feed</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double-layer packaging – 20 kg pack size.</li>
              </ul>
      {/* <Link href="/contact">
        <button className="px-6 py-2 bg-[#121212] text-white"> Contact Us </button>
      </Link> */}
    </div>
  </div>
</div>

<div className="scroll-mt-[100px] flex flex-col w-full">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Right Side - Image (on top for mobile, right for tablet/desktop) */}
    <div className="w-full md:w-1/2 p-0 my-auto lg:p-12 rounded-lg align-middle text-left  order-2 md:order-1">
	    <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Turmeric Powder
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      Turmeric has been used for centuries in food and medicine due to its powerful antioxidant, anti-inflammatory, and antimicrobial properties. 
      The active ingredient, curcumin, helps in liver protection, digestion improvement, and overall health enhancement in livestock.</p>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Acts as a natural immune booster, helping to fight infections.</li>
                <li>Improves gut health and digestion efficiency.</li>
                <li>Supports liver function and detoxification.</li>
                <li>Reduces oxidative stress and inflammation in animals.</li>
                <li>Enhances overall growth and performance.</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Composition</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Curcumin Content: 3 to 4% (Guaranteed, as per ICAR Lab)</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Dosage</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Standard inclusion rate: 0.5 kg to 1 kg per ton of feed</li>
                <li>Therapeutic inclusion rate: 1 to 3 kg per ton of feed</li>
                <li>For broilers: 5 to 8 grams per kg of feed</li>
              </ul>


              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double-layer packaging – 20 kg pack size.</li>
              </ul>
              
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


    {/* Sections division 5 */}

  <div className="scroll-mt-[100px] flex flex-col w-full ">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Left Side - Image (on top for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={1600}
          height={1600}
        />
      </div>
    </div>

    {/* Right Side - Description (below image for mobile, right for tablet/desktop) */}
    <div className="scroll-mt-[300px] w-full md:w-1/2 my-auto p-0 lg:p-12 rounded-lg align-middle text-left order-2 md:order-2">
      <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Papaya Powder
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      Since ancient times, our ancestors have considered papaya as a valuable medicinal plant. Papaya contains an enzyme called Papain, which aids in digestion and helps in breaking down proteins. 
      It also contains vitamins A, B, and C, which enhance immunity. Papaya powder is widely used in animal husbandry and poultry farming due to its digestive and health benefits.</p>


      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Papaya leaves contain enzymes such as Papain, Chymopapain A & B, and Papaya Peptidase, which improve digestion and enhance appetite.</li>
                <li>Helps in reducing intestinal worms and digestive disorders.</li>
                <li>Prevents stomach ulcers (Ulcers) and improves gut health.</li>
                <li>Boosts immunity, thereby reducing the risk of infections.</li>
                <li>Enhances feed absorption, leading to better growth and productivity in poultry and livestock.</li>
                <li>Reduces oxidative stress and promotes overall health.</li>
                <li>Provides natural resistance against certain viral diseases in poultry.</li>
              </ul>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Usage Instructions</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>General Dosage: 0.5 kg per ton of feed</li>
                <li>For viral infections (ILT / VvND): 1 to 2 kg per ton of feed for 5 to 7 days</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double-layered packs – 20 kg pack size.</li>
              </ul>
      {/* <Link href="/contact">
        <button className="px-6 py-2 bg-[#121212] text-white"> Contact Us </button>
      </Link> */}
    </div>
  </div>
</div>

<div className="scroll-mt-[100px] flex flex-col w-full">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Right Side - Image (on top for mobile, right for tablet/desktop) */}
    <div className="w-full md:w-1/2 p-0 my-auto lg:p-12 rounded-lg align-middle text-left  order-2 md:order-1">
	    <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Choline – Natural Choline
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      Choline plays a crucial role in the metabolism of many animals and birds. It is an essential amine (vitamin-like compound) that aids in fat metabolism, preventing 
      fatty liver syndrome and improving liver function. Choline also plays a key role in nerve signal transmission, brain development, and muscle function. It is vital for overall health and is used as a natural supplement in animal and poultry feed.</p>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Prevents fatty liver syndrome by promoting fat metabolism in the liver.</li>
                <li>Aids in proper growth and development, improving overall health.</li>
                <li>Supports nerve function, enhancing muscle coordination.</li>
                <li>Strengthens immunity and reduces the risk of infections.</li>
                <li>Improves egg production and hatchability in poultry.</li>
                <li>Enhances feed absorption, leading to better productivity.</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Herbal Ingredients</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Achyranthes aspera, Andrographis paniculata, Terminalia paniculata, Ocimum sanctum</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Usage Instructions</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>General Dosage: 0.5 kg per ton of feed</li>
                <li>For specific conditions: 1 to 2 kg per ton of feed</li>
              </ul>


              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double-layered packs – 20 kg pack size.</li>
              </ul>
              
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


   {/* Sections division 6 */}

  <div className="scroll-mt-[100px] flex flex-col w-full ">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Left Side - Image (on top for mobile, left for tablet/desktop) */}
    <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
    <div className="relative w-full aspect-square">
        <Image
          src="/pic1.jpg"
          alt="Process Illustration"
          width={1600}
          height={1600}
        />
      </div>
    </div>

    {/* Right Side - Description (below image for mobile, right for tablet/desktop) */}
    <div className="scroll-mt-[300px] w-full md:w-1/2 my-auto p-0 lg:p-12 rounded-lg align-middle text-left order-2 md:order-2">
      <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Herbal Liver Care
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3 pb-3">
      The liver plays a vital role in metabolism, detoxification, and digestion. Due to modern feeding practices, liver disorders are becoming common in poultry and livestock. Fatty liver syndrome, liver damage due to toxins, and metabolic imbalances can severely impact health and productivity. 
      Herbal liver care supplements help in protecting the liver, enhancing its function, and supporting overall well-being.</p>


      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Supports liver function and prevents liver disorders.</li>
                <li>Promotes detoxification by flushing out harmful toxins.</li>
                <li>Improves digestion and metabolism, leading to better feed absorption.</li>
                <li>Enhances liver enzyme activity, boosting overall health.</li>
                <li>Helps in preventing fatty liver syndrome and liver damage.</li>
                <li>Strengthens immunity and reduces stress-related liver issues.</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Herbal Ingredients</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Amla (Nellikai), Haritaki (Kadukkai), Thanikaai, Neem, Holy Basil, Papaya, Turmeric</li>
              </ul>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Usage Instructions</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>General Dosage: 0.5 kg per ton of feed</li>
                <li>For liver disorders: 1 to 2 kg per ton of feed</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double-layered packs – 20 kg pack size.</li>
              </ul>
      {/* <Link href="/contact">
        <button className="px-6 py-2 bg-[#121212] text-white"> Contact Us </button>
      </Link> */}
    </div>
  </div>
</div>

<div className="scroll-mt-[100px] flex flex-col w-full">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4">
    {/* Right Side - Image (on top for mobile, right for tablet/desktop) */}
    <div className="w-full md:w-1/2 p-0 my-auto lg:p-12 rounded-lg align-middle text-left  order-2 md:order-1">
	    <h2 className="lg:text-[36px] text-[28px] md:text-[38px] leading-[44px] font-bold text-[#121212] text-left mt-4">
      Amla Powder
      </h2>
      <p className="text-[#121212] text-[18px] md:text-[18px] leading-[28px] text-left pt-3  pb-3">
      Amla has multiple benefits and holds a prominent place in Indian Ayurveda. It is a valuable 
      supplement for both livestock and poultry, providing essential nutrients for better health.</p>

      <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Benefits</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Rich in antioxidants like flavonoids and tannins, making it highly nutritious. Contains vitamin C, calcium, phosphorus, iron, carotene, and fiber.</li>
                <li>Strengthens the immune system, improving resistance against diseases.</li>
                <li>Enhances digestive health by supporting gut bacteria and improving nutrient absorption.</li>
                <li>Promotes better growth and weight gain in livestock and poultry.</li>
                <li>Improves egg production and quality in poultry farming.</li>
                <li>Supports heart health by lowering cholesterol and maintaining normal blood pressure levels.</li>
                <li>Acts as a natural detoxifier, cleansing the liver and kidneys.</li>
                <li>Enhances skin and coat health in animals.</li>
                <li>Reduces oxidative stress, preventing cellular damage and improving overall longevity.</li>
                <li>Helps in reducing stress and improving endurance in livestock and poultry.</li>
                <li>Plays a crucial role in improving gut health and preventing gastrointestinal disorders.</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Product Composition</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>100% Dried Amla Fruit Powder</li>
              </ul>

              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Usage Instructions</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>For general feed supplementation: 0.5 kg per ton of feed</li>
                <li>For therapeutic use: 1 to 2 kg per ton of feed</li>
              </ul>


              <label className='text-[#121212] text-[20px] md:text-[22px] leading-[28px] font-bold pt-3 pb-3'>Packaging</label>
      <ul className="list-disc pl-5 space-y-2 text-[18px] text-[#353535] pt-3 pb-3">
                <li>Laminated double-layer packaging – 20 kg pack size.</li>
              </ul>
              
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

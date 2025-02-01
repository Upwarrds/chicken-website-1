'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Footer(params) {
    return(
        <>
    
      {/* Main Footer */}
      <footer className="w-full bg-black text-white lg:py-8 py-8  mt-16">
        <div className="container mx-auto px-4 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-amber-500 rounded-full"></div>
                <span className="text-xl font-bold">CITRUS</span>
              </div>
              <p className="text-gray-400 text-sm">
              Optimizing poultry health with advanced citrus-based feed solutions. Boost immunity, enhance growth, and ensure better productivity for your farm.
              </p>
              <div className="flex space-x-4">
              {/* <Link href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A105014778&keywords=upwarrds&origin=RICH_QUERY_SUGGESTION&position=0&searchId=826a987a-4bbb-41d6-8a05-3c202b4ec637&sid=om1&spellCorrectionEnabled=false'>
             <Image src='/LinkedIn.svg' width={30} height={30} alt="LinkedIn" className="py-4" />
     </Link> */}
     <Link href='https://www.instagram.com/_upwarrds_/'>
             <Image src='/instagram.svg' width={30} height={30} alt="LinkedIn" className="py-4" />
     </Link>
     <Link href='https://wa.me/917448680575?text=Hey Buddy!'>
             <Image src='/whatsapp.svg' width={30} height={30} alt="LinkedIn" className="py-4" />
   </Link>
              </div>
            </div>

                        {/* Working Time */}
                        <div>
              <h3 className="text-lg font-bold mb-4">Working Time</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Mon: 9:00am - 5:00pm</li>
                <li>Saturday: 10:00am - 4:00pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="/aboutus" className="text-gray-400 hover:text-amber-500">About Us</a></li>
                <li><a href="/guide" className="text-gray-400 hover:text-amber-500">Guide</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-amber-500">Contact Us</a></li>
              </ul>
            </div>

                        {/* Contact */}
                        <div>
              <h3 className="text-lg font-bold mb-4">Company Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Citrus Agro Vet
                143-63, Thuraiyur Road, Namakkal - 637001</li>
                <li>citrusagrovet@gmail.com</li>
                <li>+91 99402 92388</li>
                <li>+91 93608 42475</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center align-middle items-center text-sm text-gray-400">
              <p>Upwarrds © 2024. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
};

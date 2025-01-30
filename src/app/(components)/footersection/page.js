'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Footer(params) {
    return(
        <>
    
      {/* Main Footer */}
      <footer className="w-full bg-black text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-amber-500 rounded-full"></div>
                <span className="text-xl font-bold">BUDDY</span>
              </div>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-700">
                  <span className="text-xs">FB</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-700">
                  <span className="text-xs">TW</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-700">
                  <span className="text-xs">IN</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-700">
                  <span className="text-xs">YT</span>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>6391 Saturnm</li>
                <li>hello@mail.com</li>
                <li>+1 (456) 125-4876</li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-amber-500">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-500">Farm</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-500">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-500">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-500">404</a></li>
              </ul>
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

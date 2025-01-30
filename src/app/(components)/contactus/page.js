"use client"

import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

export default function ContactUs() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    services: []
  });

  const [errors, setErrors] = useState({
    phone: '',
  });

  const serviceOptions = [
    'Website design',
    'UX design',
    'User research',
    'Content creation',
    'Strategy & consulting',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Please enter a valid 10 digit phone number',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: '',
    }));
    return true;
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validatePhone(formData.phone)) {
      // Prepare WhatsApp message
      const phoneNumber = '917448680575'; // Replace with your WhatsApp number
      const message = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Services: ${formData.services.join(', ')}
Message: ${formData.message}
      `.trim();

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
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
          Let's Get In touch!
          </h1>
        </div>
        </div>
</div>

        <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-left lg:text-center mb-8 mt-1 lg:mt-12 pb-8">
        <h1 className="text-[32px] lg:text-[48px] lg:leading-[64px] leading-[44px] font-bold mb-4">Contact our team</h1>
        <p className="text-gray-600 text-[20px]">
          Got any questions about the product or scaling on our platform? We're here to help.<br />
          Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[16px] font-medium mb-2">First name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-[16px] font-medium mb-2">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[16px] font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-[16px] font-medium mb-2">Phone number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter 10 digit mobile number"
                className={`w-full p-3 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="text-red-500 text-[16px] mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-[16px] font-medium mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Leave us a message..."
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-[16px] font-medium mb-2">Services</label>
              <div className="grid grid-cols-2 gap-2">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="rounded border-gray-300"
                    />
                    <span className="text-[16px]">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 p-12 bg-gray-50">
          <div>
            <h2 className="text-[20px] font-semibold mb-4">Chat with us</h2>
            <p className="text-gray-600 mb-4">Speak to our friendly team via live chat.</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                <span>Start a live chat</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                <span>Shoot us an email</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                <span>Message us on X</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[20px] font-semibold mb-4">Call us</h2>
            <p className="text-gray-600 mb-2">Call our team Mon-Fri from 8am to 5pm.</p>
            <a href="tel:+1(555)000-0000" className="text-blue-600 hover:underline">
              +1 (555) 000-0000
            </a>
          </div>

          <div>
            <h2 className="text-[20px] font-semibold mb-4">Visit us</h2>
            <p className="text-gray-600 mb-2">Chat to us in person at our Melbourne HQ.</p>
            <a href="#" className="text-blue-600 hover:underline">
              100 Smith Street, Collingwood VIC 3066
            </a>
          </div>
        </div>
      </div>
    </div>
        </>
  );
}

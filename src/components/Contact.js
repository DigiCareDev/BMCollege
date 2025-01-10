import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-8"  id="contact">
        {/* Left Section with Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/images/contact.webp"
            alt="Contact Us"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>

        {/* Right Section with Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-blue-700">Contact Us</h1>
          <p className="text-gray-700 mb-4">
            For any inquiries, please feel free to contact us through the following channels:
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            {/* Phone Number */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="w-6 h-6 text-gray-700" />
              <p className="text-gray-700 text-lg">Phone: +91-8373962115</p>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="w-6 h-6 text-gray-700" />
              <p className="text-gray-700 text-lg">07,Khasra No.426SA ,Laulai ,Mallhaur ,Lucknow -226028</p>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="w-6 h-6 text-green-500" />
              <p className="text-gray-700 text-lg">WhatsApp: +91-8373962115</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

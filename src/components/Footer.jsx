import React from 'react';
import ContactSVG from '../assets/FooterIcons/ContactSVG.svg';
import EmailSVG from '../assets/FooterIcons/EmailSVG.svg';
import LocationSVG from '../assets/FooterIcons/LocationSVG.svg';
import Facebook from '../assets/FooterIcons/Facebook.svg';
import Instagram from '../assets/FooterIcons/Instagram.svg';
import Twitter from '../assets/FooterIcons/Twitter.svg';
import LinkedIn from '../assets/FooterIcons/LinkedIn.svg';


function Footer() {
  return (
    <div id="footer" className="w-full bg-[#030712] text-white py-8 px-6">

    <div className="w-full bg-[#030712] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Us Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="text-gray-400">
            Making community living smarter and more connected through innovative management solutions.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About Us</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us Section with Icons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <img src={ContactSVG} alt="Phone" className="w-6 h-6" />
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={EmailSVG} alt="Email" className="w-6 h-6" />
              <span>info@society.com</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={LocationSVG} alt="Location" className="w-6 h-6" />
              <span>123 Society Lane, City, Country</span>
            </li>
          </ul>
        </div>
        

        {/* Social Media Icons Section */}
      <div>
        <h5 className="text-lg font-semibold">Follow Us</h5>
        <div className="flex justify-start gap-4 mt-4">
          <a href="#" className="hover:text-gray-300">
            <img src={Facebook}/>
          </a>
          <a href="#" className="hover:text-gray-300">
            <img src={Twitter}/>
          </a>
          <a href="#" className="hover:text-gray-300">
            <img src={Instagram}/>
          </a>
          <a href="#" className="hover:text-gray-300">
            <img src={LinkedIn}/>
          </a>
        </div>

      </div>
      </div>

      
    </div>

       <div className="border-t border-gray-700 mt-10 pt-10 text-center text-base text-gray-500">
           © 2025 SocioManager. All Rights Reserved.
      </div>






    </div>
  );
}

export default Footer;


import React, { useState } from 'react';

const Footer = () => {


    const [emailChange, setEmailChange] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('')


    const validateEmail = async() =>{


        if(emailChange.includes('@') && emailChange.includes('.')){


            setEmailConfirm('Thanks for subscribing our newsletter');

        }else{

            setEmailConfirm('');


        }


    }

  return (
    <footer className="bg-gray-900 mb-0 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Newsletter Subscription */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold">Subscribe to our Weekly Newsletter</h2>
            <p className="mt-2 text-gray-400">
              We would send 2-4 emails a month and it will come with an unsubscribe option.
            </p>
            <div className="mt-4 flex items-center">
              <input
                type="email"
                onChange={(e)=>setEmailChange(e.target.value)}
                placeholder="Enter your email address"
                className="p-2 w-full lg:w-auto rounded-l-md bg-gray-800 text-white"
                required
              />
              <button onClick={()=>validateEmail()} className="bg-green-500 text-white px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
            <p className="mt-2 text-green-400">{emailConfirm}</p>
          </div>

          {/* Important Links */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-xl font-bold">Important Links</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>WhatsApp Community (Vegan Lifers)</li>
              <li>Shipping Policy</li>
              <li>Privacy Policy</li>
              <li>Exchange & Refund</li>
              <li>Terms & Condition</li>
              <li>FAQs</li>
              <li>Become Affiliate</li>
              <li>Work With Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Top Shopping Links */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold">Top Shopping Links</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Dairy Free</li>
              <li>Mock Meat</li>
              <li>Nutrition Supplement</li>
              <li>Grocery</li>
              <li>DIY</li>
              <li>Shopping Cart</li>
              <li>Honest Rewards Program</li>
              <li>Support On WhatsApp</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-2xl font-bold mb-4">veganbazaar.com</p>
          <p className="text-gray-400">Copyright © 2024, vegandukan.com. All rights reserved. We use Cookies.</p>
          <div className="mt-4 flex justify-center space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-white">🌐</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">📸</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">🎥</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

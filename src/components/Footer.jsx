import React from 'react'
import { Button, Card,Container, Row, Col } from 'react-bootstrap'
import { Search, Menu } from "lucide-react";

function Footer() {
  return (
   <footer className="w-full bg-gray-800 text-white px-4 py-6">
      {/* Responsive Search + Hamburger */}
      <div className="flex justify-between items-center mb-6">
        {/* Mobile: Search Icon */}
        <div className="flex items-center space-x-2 lg:hidden">
          <Search className="w-5 h-5 text-white" />
          <span className="text-sm">Search</span>
        </div>

        {/* Desktop: Search Bar + Hamburger */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-md text-black"
            />
          </div>
          <Menu className="w-6 h-6 text-white cursor-pointer  " />
        </div>
      </div>

      {/* Cards Row */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div className="bg-green-100 text-black p-4 rounded-lg w-full lg:w-1/3">
          <h5 className="font-semibold text-green-600 mb-2">Shopping Assistant</h5>
          <p className="text-sm">
            Get instant access to cashback & coupons for your favorite online stores!
          </p>
          <a href="#" className="text-blue-600 text-sm mt-2 inline-block">Add To Browser &gt;</a>
        </div>
        <div className="bg-red-100 text-black p-4 rounded-lg w-full lg:w-1/3">
          <h5 className="font-semibold text-red-600 mb-2">Share & Earn</h5>
          <p className="text-sm">
            Share links and earn money when someone shops through them.
          </p>
          <a href="#" className="text-blue-600 text-sm mt-2 inline-block">Share Now &gt;</a>
        </div>
        <div className="bg-blue-100 text-black p-4 rounded-lg w-full lg:w-1/3">
          <h5 className="font-semibold text-blue-600 mb-2">Refer & Earn</h5>
          <p className="text-sm">
            Refer friends and earn 10% of their lifetime earnings.
          </p>
          <a href="#" className="text-blue-600 text-sm mt-2 inline-block">Refer Now &gt;</a>
        </div>
      </div>

      {/* Footer Links Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 border-t border-gray-600 pt-6">
        <div>
          <h4 className="font-bold mb-2">Logo</h4>
          <p className="text-sm text-gray-300">India’s Go-To for Coupons, Offers & Cashback</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Help & Support</h5>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>FAQs</li>
            <li>How It Works</li>
            <li>Missing Cashback</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">About</h5>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>About Us</li>
            <li>Press</li>
            <li>Media</li>
            <li>List Your Business</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Shopping</h5>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Shopping Assistant</li>
            <li>Share & Earn</li>
            <li>Refer & Earn</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Download App</h5>
          <img src="/qr-code.png" alt="QR Code" className="w-20 mb-2" />
          <img src="/google-play.png" alt="Google Play" className="w-28" />
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="border-t border-gray-600 mt-6 pt-4 text-xs text-gray-400">
        <p>
          FASHION: Marks & Spencer Coupons | H&M Coupons | AJIO Coupons | Myntra Coupons
        </p>
        <p>
          BEAUTY & PERSONAL CARE: Nykaa Coupons | Kapiva Coupons | mCaffeine Coupons
        </p>
      </div>
    </footer>
  )
}

export default Footer
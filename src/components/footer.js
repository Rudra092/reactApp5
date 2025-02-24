import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
export default function AppFooter(){
    return(
        <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Brand */}
          <div className="mb-4 md:mb-0">
          <img
              alt=""
              src={logo}
              className="h-8 w-auto"
            />
            <h2 className="text-2xl font-bold">Sanitas Group</h2>
            <p className="text-gray-400 text-sm mt-1">
              Delivering quality service since 2024.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Services</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Copyright Section */}
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Sanitas Group. All rights reserved.
        </div>
      </div>
    </footer>
    )
}
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1f1f2e] py-8 w-full">
        <div className="max-w-[1280px] mx-auto flex flex-col justify-center items-center">

            <h2 className="text-[16px] md:text-[25px] font-bold text-purple-500 w-[95%] mx-auto text-center">Velagala Jaya Naga Santhosh Reddy</h2>

            <div className="flex justify-center items-center gap-[8px] md:gap-[30px] mt-[15px]">
              <div>
                <a href="#about" className="text-[14px] md:text-[18px] font-bold text-gray-500 hover:text-purple-500 transition duration-300">ABOUT</a>
              </div>
              <div>
                <a href="#skills" className="text-[14px] md:text-[18px] font-bold text-gray-500 hover:text-purple-500 transition duration-300">SKILLS</a>
              </div>
              <div>
                <a href="#projects" className="text-[14px] md:text-[18px] font-bold text-gray-500 hover:text-purple-500 transition duration-300">PROJECTS</a>
              </div>
              <div>
                <a href="#education" className="text-[14px] md:text-[18px] font-bold text-gray-500 hover:text-purple-500 transition duration-300">EDUCATION</a>
              </div>
            </div>

            <div className='flex items-center justify-center mt-[15px] gap-[15px] w-[70%]'>
            <a href="https://www.linkedin.com/in/santhosh-reddy-6a977a2ba" className="text-[15px] md:text-[20px] flex items-center flex-col gap-2 text-white hover:text-purple-500">
              <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://github.com/SanthoshReddy-5" className="text-[15px] md:text-[20px] flex flex-col items-center gap-2 text-white hover:text-purple-500">
              <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://instagram.com/santhosh__reddy__5" className="text-[15px] md:text-[20px] flex flex-col items-center gap-2 text-white hover:text-purple-500">
              <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
          <p className="mt-[20px] text-white text-[12px] md:text-[16px]">&copy; 2025 Santhosh Reddy. All rights reserved.</p>
        </div>
      </div>
  );
};

export default Footer;

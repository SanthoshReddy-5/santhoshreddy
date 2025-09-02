import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  return (
    <div className="bg-[#1f1f2e] py-8 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col justify-center items-center px-4">

        <h2 className="text-[16px] md:text-[24px] font-bold text-purple-500 text-center">
          {personalInfo.fullName}
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 mt-4">
          {["ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "EDUCATION"].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="text-[12px] sm:text-[14px] md:text-[18px] font-bold text-gray-500 hover:text-purple-500 transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center mt-4 gap-4 sm:gap-6 md:gap-8">
          <a href={personalInfo.socials.linkedin} className="text-white hover:text-purple-500 transition duration-300">
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
          <a href={personalInfo.socials.github} className="text-white hover:text-purple-500 transition duration-300">
            <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
          <a href={personalInfo.socials.leetcode} className="text-white hover:text-purple-500 transition duration-300">
            <SiLeetcode className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
          <a href={personalInfo.socials.instagram} className="text-white hover:text-purple-500 transition duration-300">
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
        </div>

        <p className="mt-4 text-white text-[10px] md:text-[16px] text-center">
          &copy; 2025 Santhosh Reddy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

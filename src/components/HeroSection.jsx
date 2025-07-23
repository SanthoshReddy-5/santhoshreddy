import React from 'react';
import { TypeAnimation } from "react-type-animation";
import heroSectionImg from "../assets/heroSectionImg.webp";
import { HiOutlineMail, HiOutlineDocumentText } from 'react-icons/hi';

const roles = [
  "AI/ML Engineer", 1000,
  "Full Stack Web Developer", 1000,
  "Data Scientist", 1000,
  "Programmer", 1000
];

const HeroSection = () => {
  return (
    <div id='about' className='w-full bg-gradient-to-br from-pink-100 via-white to-blue-100'>
      <div className="max-w-[1280px] m-auto flex flex-col md:flex-row items-center justify-between md:pt-[100px] py-[20px] gap-[5px]">
        <div className="md:w-1/2 md:order-1 order-2 flex items-center md:items-start justify-center flex-col m-[30px]">
          <div className='text-[30px] md:text-[45px] text-center md:text-left font-bold'>Hi, I am <br /><span className='text-purple-500'>Santhosh Reddy</span></div>
          <div className="text-[20px] md:text-[30px] text-center md:text-left font-bold">I am a <TypeAnimation
            sequence={roles}
            wrapper="span"
            speed={250}
            repeat={Infinity}
            className="text-blue-500"/>
          </div>
          <div className="text-[18px] md:text-[25px] text-center md:text-left">I am a motivated and always eager to take up new challenges who loves solving problems and building useful solutions. I enjoy learning new things and always strive to do my best work.</div>
          <div className='flex items-center justify-between flex-col sm:flex-row gap-[20px] md:gap-[30px] my-[20px] md:mx-auto'>
            <a href="#contact" className='px-[18px] py-[10px] md:px-[12px] md:py-[10px] border-2 border-blue-500 rounded-full text-purple-500 text-[15px] md:text-[20px] flex items-center justify-center gap-[5px]'>Contact Me <HiOutlineMail size={20}/></a>
            <a href="https://drive.google.com/file/d/12xxq0G9Iy_p2b0J7DXovDGNSxraNtVkR/view?usp=drivesdk" className='px-[8px] py-[10px] md:px-[12px] md:py-[10px] bg-gradient-to-r from-purple-500 to-blue-500 border-2 border-blue-500 text-[15px] md:text-[20px] rounded-full flex items-center justify-center gap-[5px] text-white'>Check Resume <HiOutlineDocumentText size={20} /></a>
          </div>
        </div>

        <div className="md:w-1/2 mx-[50px] mt-[50px] mb-[10px] md:m-0  md:order-2 order-1 flex items-center justify-center">
          <div className='h-[280px] w-[280px] md:h-[400px] md:w-[400px] md:m-auto'>
            <img src={heroSectionImg} alt="Developer photo" className='object-cover border-2 border-solid border-blue-500 curves' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection;
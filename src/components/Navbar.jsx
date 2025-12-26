import { useState } from 'react';
import { HiMenu,HiX } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import {personalInfo} from "../data/portfolioData";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleLinkClick = () => {
        setIsOpen(false); // Close menu on link click
    };

    return (
        <div className='bg-gradient-to-br from-blue-100 via-white to-pink-100 w-full h-[70px] md:h-[80px] shadow-md sticky top-0 left-0 z-10'>
            <div className="max-w-[1280px] px-[15px] h-full m-auto flex items-center justify-between">
                <div className="h-[60px] w-fit flex items-center justify-between mr-[50px]">
                    <img src={personalInfo.developerImage} alt="Developer Logo" className='w-[50px] h-[50px] rounded-full border-2 border-blue-500' />
                    <div className="text-purple-500 ml-[10px] text-[18px] md:text-[22px] font-bold">{personalInfo.name}</div>
                </div>

                <div className="hidden h-[50px] flex-1 md:flex items-center justify-around">
                    <div className='bg-[#1f1f2e] rounded-full px-[18px] py-[10px] border-2 border-solid border-blue-500'>
                        <a href="#about" className='px-[10px] text-[18px] font-bold text-gray-400 hover:text-purple-500 transition duration-300'>ABOUT</a>
                        <a href="#skills" className='px-[10px] text-[18px] font-bold text-gray-400 hover:text-purple-500 transition duration-300'>SKILLS</a>
                        <a href="#experience" className='px-[10px] text-[18px] font-bold text-gray-400 hover:text-purple-500 transition duration-300'>EXPERIENCE</a>
                        <a href="#projects" className='px-[10px] text-[18px] font-bold text-gray-400 hover:text-purple-500 transition duration-300'>PROJECTS</a>
                        <a href="#education" className='px-[10px] text-[18px] font-bold text-gray-400 hover:text-purple-500 transition duration-300'>EDUCATION</a>
                    </div>
                    <div className='h-[50px] flex items-center justify-center gap-4'>
                        <a href={personalInfo.socials.github} className='px-[15px] h-full bg-[#1f1f2e] text-white flex items-center justify-between gap-[8px] font-medium text-[18px] hover:bg-gradient-to-r from-green-500/60 to-teal-500/60 border-2 border-blue-500 rounded-full'>
                            <FaGithub size={25}/>GitHub</a>
                        <a href={personalInfo.socials.leetcode} className='px-[15px] h-full bg-[#1f1f2e] text-white flex items-center justify-between gap-[8px] font-medium text-[18px] hover:text-black hover:bg-gradient-to-r from-yellow-500 to-orange-500 border-2 border-blue-500 rounded-full'>
                            <SiLeetcode size={25} />LeetCode</a>
                    </div>
                </div>


                <div className="md:hidden">
                    <div onClick={toggleMenu} className="text-blue-500">
                        {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-gradient-to-br from-blue-100 via-white to-pink-100 w-[98%] p-[10px] flex items-center justify-between flex-col gap-[10px] absolute top-[75px] right-[1%] border-2 border-blue-500 rounded-md">
                        <a href="#about" className="block w-full text-[16px] bg-[#1f1f2e] font-medium text-center py-[6px] text-white border-2 border-blue-500 rounded-[5px] shadow-md"  onClick={handleLinkClick}>ABOUT</a>
                        <a href="#skills" className="block w-full text-[16px] bg-[#1f1f2e] font-medium text-center py-[6px] text-white border-2 border-blue-500 rounded-[5px] shadow-md"  onClick={handleLinkClick}>SKILLS</a>
                        <a href="#experience" className="block w-full text-[16px] bg-[#1f1f2e] font-medium text-center py-[6px] text-white border-2 border-blue-500 rounded-[5px] shadow-md"  onClick={handleLinkClick}>EXPERIENCE</a>
                        <a href="#projects" className="block w-full text-[16px] bg-[#1f1f2e] font-medium text-center py-[6px] text-white border-2 border-blue-500 rounded-[5px] shadow-md" onClick={handleLinkClick}>PROJECTS</a>
                        <a href="#education" className="block w-full text-[16px] bg-[#1f1f2e] font-medium text-center py-[6px] text-white border-2 border-blue-500 rounded-[5px] shadow-md"  onClick={handleLinkClick}>EDUCATION</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
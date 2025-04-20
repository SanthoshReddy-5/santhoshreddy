import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';//Icons
import logo from "../assets/logo.jpg";
import github from "../assets/github.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className='bg-white w-full h-[80px] shadow-md sticky top-0 left-0 z-10'>
            <div className="max-w-[1280px] px-[15px] h-full m-auto flex items-center justify-between">
                <div className="h-[60px] w-fit flex items-center justify-between mr-[50px]">
                    <img src={logo} alt="Developer Logo" className='w-[60px] h-[60px] rounded-full border-2 border-blue-500' />
                    <div className="text-purple-500 ml-[10px] md:text-[22px] text-[18px] font-bold">Santhosh Reddy</div>
                </div>


                <div className="hidden h-[60px] flex-1 md:flex items-center justify-around">
                    <div className='bg-[#1f1f2e] rounded-full px-[20px] py-[10px] border-2 border-blue-500'>
                        <a href="#about" className='px-[15px] text-[20px] font-medium text-gray-500 hover:text-purple-500 hover:underline underline-offset-4 decoration-4 transition duration-300'>ABOUT</a>
                        <a href="#skills" className='px-[15px] text-[20px] font-medium text-gray-500 hover:text-purple-500 hover:underline underline-offset-4 decoration-4 transition duration-300'>SKILLS</a>
                        <a href="#projects" className='px-[15px] text-[20px] font-medium text-gray-500 hover:text-purple-500 hover:underline underline-offset-4 decoration-4 transition duration-300'>PROJECTS</a>
                        <a href="#education" className='px-[15px] text-[20px] font-medium text-gray-500 hover:text-purple-500 hover:underline underline-offset-4 decoration-4 transition duration-300'>EDUCATION</a>
                    </div>
                    <div className='px-[10px] py-[5px] rounded-full border-2 border-blue-500 hover:bg-gradient-to-r from-purple-500 to-blue-500 transition duration-300'>
                        <a href="https://github.com/SanthoshReddy-5" className='px-[5px] flex items-center justify-between font-medium text-[18px] hover:text-white'>
                            <img src={github} alt="Github logo" className='w-[40px] h-[40px]' />GitHub</a>
                    </div>
                </div>


                <div className="md:hidden">
                    <div onClick={toggleMenu} className="text-blue-500">
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-[#1f1f2e] w-[50%] px-[10px] py-[10px] flex items-center justify-between flex-col gap-[10px] absolute top-[85px] right-[5px] border-2 border-blue-500 rounded-[5px]">
                        <a href="#about" className="block bg-[#2b2b3c] w-full text-[20px] font-medium text-center py-[6px] text-gray-300 border-2 border-blue-500 rounded-[5px]">ABOUT</a>
                        <a href="#skills" className="block bg-[#2b2b3c] w-full text-[20px] font-medium text-center py-[6px] text-gray-300 border-2 border-blue-500 rounded-[5px]">SKILLS</a>
                        <a href="#projects" className="block bg-[#2b2b3c] w-full text-[20px] font-medium text-center py-[6px] text-gray-300 border-2 border-blue-500 rounded-[5px]">PROJECTS</a>
                        <a href="#education" className="block bg-[#2b2b3c] w-full text-[20px] font-medium text-center py-[6px] text-gray-300 border-2 border-blue-500 rounded-[5px]">EDUCATION</a>
                        <div className='w-full border-2 border-blue-500 rounded-[5px]'>
                            <a href="https://github.com" className='flex bg-gradient-to-r from-purple-500 to-blue-500 py-[6px] text-white text-[18px] items-center justify-center gap-[5px]'><img src={github} alt="Github logo" className='w-[30px] h-[30px]' />GitHub</a>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
import { TypeAnimation } from "react-type-animation";
import { HiOutlineMail, HiOutlineDocumentText } from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';

const HeroSection = () => {
  return (
    <div id='about' className='w-full bg-gradient-to-br from-pink-100 via-white to-blue-100'>
      <div className="max-w-[1280px] m-auto flex flex-col md:flex-row items-center justify-between py-[20px] md:pt-[100px] md:pb-[50px] gap-[5px]">
        <div className="md:w-1/2 md:order-1 order-2 flex items-center md:items-start justify-center flex-col m-[15px]">
          <div className='text-[30px] md:text-[45px] text-center md:text-left font-bold'>Hi, I am <br /></div>
          <div className='text-[30px] md:text-[45px] text-center md:text-left font-bold text-purple-500'>{personalInfo.name}</div>
          <div className="text-[24px] md:text-[35px] text-center md:text-left font-semibold md:mb-[10px]">I am a <TypeAnimation
            sequence={personalInfo.roles}
            wrapper="span"
            speed={250}
            repeat={Infinity}
            className="text-blue-500"/>
          </div>
          <div className="text-[16px] md:text-[20px] text-center md:text-left text-gray-800">{personalInfo.about}</div>
          <div className='flex items-center justify-between flex-col md:flex-row gap-[20px] md:gap-[30px] my-[20px] md:mx-auto w-full md:w-auto'>
            <a href="#contact" className='w-full md:w-auto px-[18px] py-[12px] md:px-[12px] md:py-[10px] border-2 bg-purple-500 md:bg-purple-500/20 hover:bg-purple-500 border-purple-500 rounded-full text-white md:text-black hover:text-white text-[16px] md:text-[20px] flex items-center justify-center gap-[5px] font-medium transition-all duration-300'>Contact Me <HiOutlineMail size={20}/></a>
            <a href={personalInfo.resume} className='w-full md:w-auto px-[8px] py-[12px] md:px-[15px] md:py-[10px] bg-blue-500 md:bg-blue-500/20 hover:bg-blue-500 text-white md:text-black hover:text-white border-2 border-blue-500 text-[16px] md:text-[20px] rounded-full flex items-center justify-center gap-[5px] font-medium transition-all duration-300'>Check Resume <HiOutlineDocumentText size={20} /></a>
          </div>
        </div>

        <div className="md:w-1/2 mx-[50px] mt-[50px] mb-[10px] md:m-0  md:order-2 order-1 flex items-center justify-center">
          <div className='h-[280px] w-[280px] md:h-[400px] md:w-[400px] md:m-auto'>
            <img src={personalInfo.developerImage} alt="Developer photo" className='object-cover border-2 border-solid border-blue-500 rounded-full curves' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection;
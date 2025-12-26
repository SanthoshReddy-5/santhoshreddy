import { skills } from "../data/portfolioData";

const SkillsSection = () => {

    return (
        <div id='skills' className='bg-gradient-to-br from-blue-100 via-white to-orange-100 w-full'>
            <div className='max-w-[1280px] m-auto py-[30px]'>
                <div className="text-center text-[30px] md:text-[40px] pt-[25px] text-purple-500 font-semibold">Skills</div>
                <div className='text-[16px] md:text-[20px] text-center px-[5px] text-gray-800 md:w-1/2 mx-auto'>
                  Here are some of my skills on which I have been working on for the past 2 years.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[20px] mt-[10px] mx-[20px] py-[20px] md:py-[30px] md:mx-[100px]">
                    {skills.map((category, index) => (
                        <div
                            key={index}
                            className="bg-[#1f1f2e] px-2 md:px-5 py-6 md:py-8 rounded-[10px] border-2 border-blue-500 shadow-md">
                            <h3 className="text-[18px] md:text-[24px] font-medium text-white text-center mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-3 md:gap-3.5 justify-center">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="p-2 md:px-3 rounded-[5px] text-[14px] md:text-[16px] border flex items-center justify-center gap-[8px] cursor-pointer bg-blue-500/10 hover:bg-blue-500/20 text-gray-300 font-medium hover:text-gray-50 border-blue-500"
                                    ><img src={category.logos[skillIndex]} alt={skill} className='w-[25px] md:w-[30px] h-[25px] md:h-[30px]' />
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;
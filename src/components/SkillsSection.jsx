import React from 'react';


const skillCategories = [
    {
        title: "Frontend",
        skills: [
            "React Js",
            "HTML",
            "CSS",
            "JavaScript",
            "TailwindCSS"
        ],
        logos: ["react.png", "html.png", "css.png", "JavaScript.png", "tailwind.webp"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "MySQL","Express.js", "MongoDB"],
        logos: ["nodejs.png", "mysql.png", "express.png", "mongodb.webp"]
    },
    {
        title: "Machine Learning",
        skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "TensorFlow"],
        logos: ["python.png", "pandas.png", "numpy.png","matplot.png", "sklearn.png", "tensorflow.png"]
    },
    {
        title: "Others",
        skills: ["Git", "GitHub","Java", "Postman", "VS Code","Android Studio"],
        logos: ["git.png", "github.png","java.jpg", "postman.jpg", "vscode.png","android.webp"]
    },
];

const SkillsSection = () => {

    return (
        <div id='skills' className='bg-gradient-to-br from-blue-100 via-white to-orange-100 w-full'>
            <div className='max-w-[1280px] m-auto'>
                <div className="text-center md:text-[35px] text-[30px] pt-[15px] text-purple-500 font-medium">Skills</div>
                <div className='text-[18px] md:text-[25px] text-center mx-[15px]'>
                    These skills represent my ability to build efficient, scalable and modern applications across different domains.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[20px] mx-[20px] py-[20px] md:py-[30px] md:mx-[100px]">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-[#1f1f2e] text-white p-6 rounded-[10px] border border-blue-500 shadow-md scrolls"
                        >
                            <h3 className="text-[25px] md:text-[20px] font-medium text-gray-200 text-center mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="px-2 md:px-4 py-2 md:py-3 rounded-[5px] text-[15px] md:text-[20px] text-gray-300 bg-[#2b2b3c] border border-blue-500 flex items-center justify-center gap-[8px]"
                                    ><img src={`./src/assets/${category.logos[skillIndex]}`} alt={skill} className='w-[30px] h-[30px]' />
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
import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.webp";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.webp";
import python from "../assets/python.png";
import pandas from "../assets/pandas.png";
import numpy from "../assets/numpy.png";
import matplot from "../assets/matplot.png";
import sklearn from "../assets/sklearn.png";
import tensorflow from "../assets/tensorflow.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import postman from "../assets/postman.png";
import vscode from "../assets/vscode.png";
import android from "../assets/android.webp";
import netlify from "../assets/netlify.png";
import powerbi from "../assets/powerbi.png";
import flutter from "../assets/flutter.png";
import streamlit from "../assets/streamlit.png";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            "React Js",
            "HTML",
            "CSS",
            "JavaScript",
            "TailwindCSS",
            "Flutter"
        ],
        logos: [react, html,css,js, tailwind,flutter]
    },
    {
        title: "Backend",
        skills: ["Node Js", "MySQL","Express Js", "MongoDB"],
        logos: [nodejs, mysql, express, mongodb]
    },
    {
        title: "AI & ML",
        skills: ["Python", "NumPy", "Matplotlib", "Scikit-Learn","Pandas", "TensorFlow","Streamlit"],
        logos: [python, numpy, matplot, sklearn, pandas, tensorflow,streamlit]
    },
    {
        title: "Others",
        skills: ["GitHub","Java", "VS Code", "Power BI", "Netlify","Postman", "Android Studio","Git"],
        logos: [github, java, vscode, powerbi, netlify, postman, android, git]
    },
];

const SkillsSection = () => {

    return (
        <div id='skills' className='bg-gradient-to-br from-blue-100 via-white to-orange-100 w-full'>
            <div className='max-w-[1280px] m-auto py-[10px]'>
                <div className="text-center text-[25px] md:text-[40px] pt-[25px] text-purple-500 font-semibold">Skills</div>
                <div className='text-[18px] md:text-[25px] text-center px-[20px]'>
                    These skills represent my ability to build efficient, scalable and modern applications across different domains.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[20px] mx-[20px] py-[20px] md:py-[30px] md:mx-[100px]">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-[#1f1f2e] text-white p-6 rounded-[10px] border-2 border-blue-500 shadow-md scrolls"
                        >
                            <h3 className="text-[20px] md:text-[25px] font-medium text-gray-200 text-center mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="px-2 md:px-4 py-2 md:py-3 rounded-[5px] text-[14px] md:text-[16px] bg-[#2b2b3c] text-gray-300 border-blue-500 border flex items-center justify-center gap-[8px]"
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
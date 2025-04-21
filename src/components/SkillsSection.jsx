import React from 'react';
import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javascript.png";
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
import java from "../assets/java.jpg";
import postman from "../assets/postman.jpg";
import vscode from "../assets/vscode.png";
import android from "../assets/android.webp";

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
        logos: [react, html, css, javaScript, tailwind]
    },
    {
        title: "Backend",
        skills: ["Node Js", "MySQL","Express Js", "MongoDB"],
        logos: [nodejs, mysql, express, mongodb]
    },
    {
        title: "Machine Learning",
        skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "TensorFlow"],
        logos: [python, pandas, numpy, matplot, sklearn, tensorflow]
    },
    {
        title: "Others",
        skills: ["Git", "GitHub","Java", "Postman", "VS Code","Android Studio"],
        logos: [git, github, java, postman, vscode, android]
    },
];

const SkillsSection = () => {

    return (
        <div id='skills' className='bg-gradient-to-br from-blue-100 via-white to-orange-100 w-full'>
            <div className='max-w-[1280px] m-auto'>
                <div className="text-center md:text-[35px] text-[30px] pt-[15px] text-purple-500 font-medium">Skills</div>
                <div className='text-[18px] md:text-[25px] text-center px-[20px]'>
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
                                    ><img src={category.logos[skillIndex]} alt={skill} className='w-[30px] h-[30px]' />
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
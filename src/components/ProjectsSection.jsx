import React from "react";
import github from "../assets/github.png";
import background from "../assets/background.png";
import blinkit from "../assets/blinkit.png";
import password from "../assets/password.png";
import weather from "../assets/weather.png";
import potato from "../assets/potato.png";

const projects = [
    {
        title: "Background Generator",
        description:
            "A gradient background generator creates smooth color transitions for backgrounds.",
        image: background,
        tags: ["HTML", "CSS", "JavaScript"],
        sourceCode: "https://github.com/SanthoshReddy-5",
    },
    {
        title: "BlinkIt Clone",
        description:
            "This project is a only frontend clone of Blinkit, a popular grocery delivery platform, created using HTML and CSS. It focuses on replicating the visual design, layout, and responsiveness of the Blinkit website.",
        image: blinkit,
        tags: ["HTML","CSS"],
        sourceCode: "https://github.com/SanthoshReddy-5/BlinkitFrontendClone",
    },
    {
        title: "Password Manager",
        description:
            "This project is a simple and secure password manager web application designed to store and manage credentials efficiently",
        image: password,
        tags: ["React.js", "Node.js", "Express.js", "MySQL"],
        sourceCode: "https://github.com/SanthoshReddy-5",
    },
    {
        title: "Weather Application",
        description:
            "This project is a user-friendly web app that provides real-time weather information for any city. It fetches data using the OpenWeather API and displays current weather details like temperature, humidity, and weather conditions.",
        image: weather,
        tags: ["HTML", "CSS", "JavaScript", "openWeatherMapAPI"],
        sourceCode: "https://github.com/SanthoshReddy-5/WeatherApplication",
    },
    {
        title: "Potato Leaf Disease Classification",
        description:
            "This project aims to classify potato leaf diseases using deep learning. The system processes images of potato leaves, applies a Convolutional Neural Network (CNN) model and predicts the disease category. The model is integrated with a Flask web application for easy user interaction.",
        image: potato,
        tags: ["Python", "Flask", "HTML", "CSS","JavaScript"],
        sourceCode: " https://github.com/SanthoshReddy-5/PotatoLeafDiseaseRecognition",
    }
];

const ProjectShowcase = () => {
    return (
        <div id="projects" className="w-full bg-gradient-to-br from-orange-100 via-white to-green-100">
            <div className="max-w-[1280px] m-auto py-[20px]">
                <div className="text-[30px] md:text-[40px] font-semibold pt-[20px] text-center text-purple-500">Projects</div>
                <div className="text-center text-[18px] md:text-[25px] mt-[10px] px-[20px]">Here are some of my projects built using web technologies and machine learning tools.</div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#1f1f2e] text-white p-4 rounded-[10px] shadow-md flex flex-col border-2 border-blue-500 scrolls"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-[5px] w-full object-cover border-2 border-blue-500"
                            />
                            <div className="flex flex-wrap gap-2 my-3">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-[14px] bg-[#2b2b3c] border-2 border-blue-500 rounded-[5px]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-[16px] md:text-[20px] font-bold mb-2">{project.title}</h3>
                            <p className="text-[15px] text-gray-300 line-clamp-3 flex-grow">
                                {project.description}
                            </p>
                            <a
                                href={project.sourceCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 text-center text-[18px] text-black bg-white px-4 py-2 rounded-[5px] flex items-center justify-center gap-[5px] border-2 border-blue-500"
                            > <img src={github} alt="GitHub logo" className="w-[30px] h-[30px]"/>
                                View On GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;



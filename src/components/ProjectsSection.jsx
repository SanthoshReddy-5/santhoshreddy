import React, { useState } from "react";
import background from "../assets/background.png";
import blinkit from "../assets/blinkit.png";
import password from "../assets/password.png";
import weather from "../assets/weather.png";
import potato from "../assets/potato.png";
import medicalchatbot from "../assets/medicalchatbot.png";
import { FiExternalLink } from 'react-icons/fi';
import { BiCodeAlt } from 'react-icons/bi';
import { IoCloseSharp } from "react-icons/io5";

const projects = [
    {
        title: "Background Generator",
        description: "A gradient background generator creates smooth color transitions for backgrounds.",
        image: background,
        tags: ["HTML", "CSS", "JavaScript"],
        sourceCode: "https://github.com/SanthoshReddy-5/BackgroundGenerator",
        livePreview: "https://santhoshreddy-5.github.io/BackgroundGenerator"
    },
    {
        title: "Medical Chatbot",
        description: "A responsive web-based Medical Chatbot designed to provide medical information. It uses Google Gemini API, Pinecone, Sentence Transformers, Flask and the knowledge base is powered by context from The Gale Encyclopedia of Medicine (Second Edition).",
        image: medicalchatbot,
        tags: ["HTML", "CSS", "JavaScript", "LangChain", "Flask", "Pinecone", "Gemini API", "The Gale Encyclopedia of Medicine"],
        sourceCode: "https://github.com/SanthoshReddy-5/MedicalChatBot"
    },
    {
        title: "Password Manager",
        description: "This project is a simple and secure password manager web application designed to store and manage credentials efficiently.",
        image: password,
        tags: ["React.js", "Node.js", "Express.js", "MySQL"],
        sourceCode: "https://github.com/SanthoshReddy-5/passwordManager",
    },
    {
        title: "BlinkIt Clone",
        description: "Frontend clone of Blinkit using HTML and CSS, replicating the design and responsiveness of the Blinkit website.",
        image: blinkit,
        tags: ["HTML", "CSS"],
        sourceCode: "https://github.com/SanthoshReddy-5/BlinkitFrontendClone",
        livePreview: "https://santhoshreddy-5.github.io/BlinkitFrontendClone"
    },
    {
        title: "Weather Application",
        description: "Real-time weather app using OpenWeather API that displays city weather details like temperature, humidity, and conditions.",
        image: weather,
        tags: ["HTML", "CSS", "JavaScript", "openWeatherMapAPI"],
        sourceCode: "https://github.com/SanthoshReddy-5/WeatherApplication",
    },
    {
        title: "Potato Leaf Disease Classification",
        description: "Classifies potato leaf diseases using CNN integrated with a Flask web app. Users can upload leaf images for instant diagnosis.",
        image: potato,
        tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
        sourceCode: "https://github.com/SanthoshReddy-5/PotatoLeafDiseaseClassification",
    }
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div id="projects" className="w-full bg-gradient-to-br from-orange-100 via-white to-green-100">
            <div className="max-w-[1280px] m-auto py-[20px]">
                <div className="text-[30px] md:text-[40px] font-semibold pt-[20px] text-center text-purple-500">Projects</div>
                <div className="text-center text-[18px] md:text-[25px] mt-[10px] px-[20px]">
                    Here are some of my projects built using web technologies and machine learning tools.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-[10px]">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(project)}
                            className="cursor-pointer bg-[#1f1f2e] text-white p-4 rounded-[10px] shadow-md flex flex-col border-2 border-blue-500"
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

                            {(project.sourceCode || project.livePreview) && (
                                <div
                                    className={`flex ${project.sourceCode && project.livePreview ? "flex-row justify-around gap-[5px]" : "flex-col"
                                        } mt-3 w-full`}
                                >
                                    {project.sourceCode && (
                                        <a
                                            href={project.sourceCode}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-center text-[12px] md:text-[16px] text-purple-500 bg-white px-4 md:px-6 py-2 rounded-[5px] border-2 border-blue-500 flex items-center justify-center gap-[5px] ${project.livePreview ? "w-full md:w-auto" : "w-full"
                                                }`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span>Source Code</span> <BiCodeAlt />
                                        </a>
                                    )}
                                    {project.livePreview && (
                                        <a
                                            href={project.livePreview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-center text-[12px] md:text-[16px] text-purple-500 bg-white px-4 md:px-6 py-2 rounded-[5px] border-2 border-blue-500 flex items-center justify-center gap-[5px] ${project.sourceCode ? "w-full md:w-auto" : "w-full"
                                                }`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span>Live Preview</span> <FiExternalLink />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="relative max-w-4xl w-[95%] bg-[#1f1f2e] text-white rounded-[10px] p-6 border-2 border-blue-500 overflow-auto max-h-[90vh]">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-3 right-3 cursor-pointer text-white text-3xl hover:text-red-500"
                        >
                            <IoCloseSharp />
                        </button>

                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-auto rounded-[5px] mt-[30px] border-2 border-blue-500"
                        />

                        <div className="flex flex-wrap gap-2 my-4">
                            {selectedProject.tags.map((tag, i) => (
                                <span key={i} className="px-2 py-1 text-[14px] md:text-[18px] bg-[#2b2b3c] border-2 border-blue-500 rounded-[5px]">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h2 className="text-[20px] md:text-[25px] font-bold text-white mb-2">{selectedProject.title}</h2>
                        <p className="text-[16px] md:text-[20px] text-gray-300 mb-4">{selectedProject.description}</p>

                        <div className="flex items-center justify-center gap-[10px] flex-wrap">
                            {selectedProject.sourceCode && (
                                <a
                                    href={selectedProject.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 bg-white w-full py-2 md:py-3 text-[18px] rounded-[5px] border-2 border-blue-500 flex items-center justify-center gap-[5px]"
                                >
                                    Source Code <BiCodeAlt />
                                </a>
                            )}
                            {selectedProject.livePreview && (
                                <a
                                    href={selectedProject.livePreview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 bg-white w-full py-2 md:py-3 text-[18px] rounded-[5px] border-2 border-blue-500 flex items-center justify-center gap-[5px]"
                                >
                                    Live Preview <FiExternalLink />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsSection;

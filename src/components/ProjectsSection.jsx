import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, projects } from "../data/portfolioData";
import profile from "../assets/profile.png";

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => setSelectedProject(project);
    const handleCloseModal = () => setSelectedProject(null);

    useEffect(() => {
        document.body.style.overflow = selectedProject ? "hidden" : "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [selectedProject]);

    return (
        <div id="projects" className="w-full bg-gradient-to-br from-green-100 via-white to-purple-100">
            <div className="max-w-[1280px] m-auto py-[20px]">
                <div className="text-[30px] md:text-[40px] font-semibold pt-[20px] text-center text-purple-500">
                    Projects
                </div>
                <div className="text-center text-[16px] md:text-[20px] mt-[10px] px-[5px] md:w-2/3 mx-auto text-gray-800">
                    Here are some of my projects that I built in the domains of Web Development and Artificial Intelligence & Machine Learning.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-[10px]">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(project)}
                            className="cursor-pointer bg-[#1f1f2e] text-white p-4 rounded-[10px] shadow-md flex flex-col border-2 border-blue-500 scrolls"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-[5px] w-full object-cover"
                            />
                            <div className="flex flex-wrap gap-2 my-3">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 text-[12px] md:text-[14px] rounded-[5px] bg-blue-500/10 hover:bg-blue-500/20 text-gray-300 font-medium hover:text-gray-50 border border-blue-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-[16px] md:text-[20px] font-bold mb-1">{project.title}</h3>
                            <span className="text-[14px] md:text-[16px] text-gray-300 mb-2">{project.duration || ""}</span>
                            <p className="text-[15px] text-gray-300 line-clamp-2 flex-grow">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 z-50 overflow-auto bg-black/90 p-1 md:p-4 flex justify-center items-start animate-fadeIn">
                    <div className="relative bg-[#1f1f2e] text-white rounded-[10px] w-full sm:w-[90%] max-w-4xl mx-auto p-5 md:p-10 flex flex-col transform transition-transform duration-300 scale-95 animate-scaleUp border-2 border-blue-500">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-3 md:top-4 right-2 md:right-4 cursor-pointer text-white text-[24px] md:text-[32px] hover:text-red-500"
                        >
                            <IoCloseSharp />
                        </button>

                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-auto rounded-[5px] mt-[20px]"
                        />

                        <div className="flex gap-2 my-4 flex-wrap">
                            {selectedProject.tags.map((tag, i) => (
                                <span key={i} className="px-1 md:px-2 py-0.5 md:py-1 text-[10px] md:text-[18px] rounded-[5px] bg-blue-500/10 hover:bg-blue-500/20 text-gray-300 font-medium hover:text-gray-50 border border-blue-500 cursor-pointer">{tag}</span>
                            ))}
                        </div>

                        <h2 className="text-[18px] md:text-[25px] font-bold text-white mb-1">{selectedProject.title}</h2>
                        <span className="text-[14px] md:text-[18px] text-gray-300 mb-4">{selectedProject.duration || ""}</span>
                        <p className="text-[12px] md:text-[20px] text-gray-300 mb-4">{selectedProject.description}</p>

                        <div className="mb-4">
                            <h3 className="font-semibold text-gray-100 mb-2 text-[16px] md:text-[22px]">Team Members</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={personalInfo.developerImage}
                                        alt="Santhosh Reddy"
                                        className="w-8 md:w-12 h-8 md:h-12 rounded-full object-cover border border-blue-500"
                                    />
                                    <span className="font-medium text-[12px] md:text-[18px] mr-[20px] text-gray-200">Santhosh Reddy (Me)</span>
                                    <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-500">
                                        <FaGithub size={30} />
                                    </a>
                                    <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-500">
                                        <FaLinkedin size={30} />
                                    </a>
                                </div>

                                {selectedProject.collaborators && selectedProject.collaborators.length > 0 && (
                                    selectedProject.collaborators.map((col, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <img
                                                src={col.image || profile}
                                                alt={col.name}
                                                className="w-8 md:w-12 h-8 md:h-12 rounded-full object-cover border border-blue-500"
                                            />
                                            <span className="font-medium text-[12px] md:text-[18px] mr-[20px] text-gray-200">{col.name}</span>
                                            <a href={col.github} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-500 cursor-pointer">
                                                <FaGithub size={30} />
                                            </a>
                                            <a href={col.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-500 cursor-pointer">
                                                <FaLinkedin size={30} />
                                            </a>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 mt-4 w-full justify-center flex-wrap">
                            {selectedProject.sourceCode && (
                                <a
                                    href={selectedProject.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center px-2 md:px-4 py-1.5 text-[14px] md:text-[18px] md:py-3 bg-green-500/50 md:bg-green-500/50 hover:bg-green-500/80 border-2 border-green-500 rounded-md text-white font-semibold flex items-center justify-center gap-2 min-w-[140px]"
                                >
                                    Source Code
                                </a>
                            )}
                            {selectedProject.livePreview && (
                                <a
                                    href={selectedProject.livePreview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center px-2 md:px-4 py-1.5 text-[14px] md:text-[18px] md:py-3 bg-purple-500/50 md:bg-purple-500/50 hover:bg-purple-500/80 border-2 border-purple-500 rounded-md text-white font-semibold flex items-center justify-center gap-2 min-w-[140px]"
                                >
                                    Live Preview
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

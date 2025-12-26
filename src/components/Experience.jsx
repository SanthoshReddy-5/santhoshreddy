import React from "react";
import {experiences} from "../data/portfolioData";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full bg-gradient-to-br from-orange-100 via-white to-green-100 py-12"
    >
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-purple-500 mb-2">
          Experience
        </h2>
        <p className="text-center text-gray-800 text-[16px] md:text-[20px] mt-[15px] mb-[25px] px-[5px]">
          I worked on diverse projects during internships and gained hands-on experience.
        </p>

        <div className="relative border-l-4 border-[#1f1f2e] pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 relative group">
              <div className="absolute left-[-35px] w-5 h-5 bg-white rounded-full border-4 border-blue-500"></div>

              <div className="bg-[#1f1f2e] text-white p-6 md:p-8 rounded-2xl border-2 border-blue-500 w-full relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-[18px] md:text-[24px] font-bold mb-1 text-purple-500">
                    {exp.title}
                  </h3>
                  <p className="font-semibold mb-1 text-[16px] md:text-[20px]">
                    {exp.organization}
                  </p>
                  <span className="text-gray-300 text-sm md:text-[16px] mb-1 block">
                    {exp.duration}
                  </span>

                  <p className="text-gray-300 text-[15px] md:text-[16px] leading-relaxed md:w-[85%]">
                    {exp.description.join(" ")}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.skills?.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs md:text-sm px-2 py-1 rounded-md bg-blue-500/10 hover:bg-blue-500/20 text-gray-300 font-medium hover:text-gray-50 border border-blue-500 cursor-pointer">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {exp.certificate && (
                  <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10 md:absolute md:top-[15%] md:right-[5%] flex-shrink-0">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={exp.certificate}
                        alt={`${exp.title} Certificate`}
                        className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-blue-500 shadow-md cursor-pointer"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

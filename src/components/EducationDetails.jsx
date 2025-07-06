import React from 'react';
import swarnandhraLogo from '../assets/swrn.png';
import interLogo from '../assets/inter.jpg';
import { MdSchool } from "react-icons/md";

const educationData = [
  {
    course: 'Bachelor of Computer Science and Engineering (Data Science)',
    college: 'Swarnandhra College of Engineering and Technology',
    place: 'Narsapur',
    year: '2022 - Present',
    cgpa: '8.35 / 10.0',
    logo: swarnandhraLogo,
    desc: "I am currently pursuing B.Tech Final Year in SCET, gained a strong foundation in the core concepts of Computer Science and Engineering, specializied in Data Science, resulting in an impressive CGPA of 8.35. I explored the depths of Artificial Intelligence and Machine Learning, working on hands-on projects that enhanced my problem solving and analytical abilities."
  },
  {
    course: 'Intermediate - MPC',
    college: 'Andhra Association (UK) Junior College',
    place: 'Penumantra',
    year: '2020 - 2022',
    percentage: '72%',
    logo: interLogo,
    desc: "I completed my Intermediate at Andhra Association (UK) Junior College, Penumantra where I not only focused on academics but also improved my communication skills in English and Hindi. This helped me articulate my thoughts confidently and effectively."
  },
  {
    course: 'SSC',
    college: 'R.A.Z.P High School',
    place: 'Penumantra',
    year: '2020',
    percentage: '79%',
    icon: <MdSchool className="text-purple-500 text-3xl" />,
    desc: "I completed my SSC at R.A.Z.P High School, Penumantra where I not only gained academic knowledge but also learned lifelong values like discipline, ethics and friendship that shaped my early growth."
  },
];

const EducationDetails = () => {
  return (
    <div id="education" className="w-full bg-gradient-to-br from-green-100 via-white to-blue-100 py-10">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-[30px] md:text-[40px] font-semibold text-center text-purple-500 mb-10">
          Educational Details
        </h2>

        <div className="relative border-l-4 border-[#1f1f2e] pl-6">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-10 relative group">
              <div className="absolute left-[-35px] w-5 h-5 bg-white rounded-full border-4 border-blue-500"></div>

              <div className="bg-[#1f1f2e] text-white p-5 rounded-xl shadow-md border-2 border-blue-500 w-full transition-all duration-300 ease-in-out">
                <div className="flex items-center gap-4 mb-1 flex-wrap">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={`${edu.college} logo`}
                      className="w-12 h-12 md:w-15 md:h-15 object-contain rounded-md border border-white"
                    />
                  ) : (
                    <div className="w-12 h-12 md:w-15 md:h-15 flex items-center justify-center bg-[#1f1f2e] border border-white rounded-md">
                      {edu.icon}
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{edu.course}</h3>
                    <p className="text-gray-400">
                      <strong className="text-gray-300">{index === 2 ? 'School' : 'College'} :</strong> {edu.college}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400">
                  <strong className="text-gray-300">Place :</strong> {edu.place}
                </p>
                <p className="text-gray-400">
                  <strong className="text-gray-300">Year :</strong> {edu.year}
                </p>
                {edu.cgpa && (
                  <p className="text-gray-400 font-medium mt-1">
                    <strong className="text-gray-300">CGPA :</strong> {edu.cgpa}
                  </p>
                )}
                {edu.percentage && (
                  <p className="text-gray-400 font-medium mt-1">
                    <strong className="text-gray-300">percentage :</strong> {edu.percentage}
                  </p>
                )}
                {edu.desc && (
                  <p className="text-gray-300 mt-1 text-sm leading-relaxed hidden group-hover:block transition-all duration-300">
                    {edu.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;

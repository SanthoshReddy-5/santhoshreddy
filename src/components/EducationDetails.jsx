import React from 'react';

const EducationDetails = () => {
  const educationData = [
    {
      course: 'Bachelor of Computer Science and Engneering (Data Science)',
      college: 'Swarnandhra College of Engineering and Technology',
      place: "Narsapur",
      year: '2022 - Present'
    },
    {
      course: 'Intermediate - MPC',
      college: 'Andhra Association (UK) Junior College',
      place: "Penumantra",
      year: '2020 - 2022'
    },
    {
      course: 'SSC',
      college: 'R.A.Z.P High School',
      place: "Penumantra",
      year: '2020'
    }
  ];

  return (
    <div id='education' className="w-full bg-gradient-to-br from-green-100 via-white to-blue-100">
      <div className='max-w-[1280px] m-auto py-[20px]'>
      <h2 className="text-[30px] md:text-[40px] font-semibold text-center mb-6 text-purple-500 pt-[15px]">Educational Details</h2>
        <div className="mx-[20px] flex items-center flex-col">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-6 p-4 w-[90%] md:w-[60%] bg-[#1f1f2e] rounded-[10px] shadow-md border-2 border-blue-500">
              <h3 className="text-[20px] font-semibold text-white">{edu.course}</h3>
              <p className="text-gray-300"><strong>College :</strong> {edu.college}</p>
              <p className="text-gray-300"><strong>Year :</strong> {edu.year}</p>
              <p className="text-gray-300"><strong>Place:</strong> {edu.place}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default EducationDetails;

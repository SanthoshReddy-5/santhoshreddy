import developerImage from "../assets/developerImage.jpg";
import password from "../assets/password.png";
import weather from "../assets/weather.png";
import potato from "../assets/potato.png";
import medicalchatbot from "../assets/chatbot.png";
import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import python from "../assets/python.png";
import pandas from "../assets/pandas.png";
import numpy from "../assets/numpy.png";
import matplot from "../assets/matplot.png";
import sklearn from "../assets/sklearn.png";
import tensorflow from "../assets/tensorflow.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import postman from "../assets/postman.png";
import vscode from "../assets/vscode.png";
import netlify from "../assets/netlify.png";
import trackpocket from "../assets/trackpocket.png";
import langchain from "../assets/langchain.png";
import docker from "../assets/docker.png";
import aws from "../assets/aws.png";
import pinecone from "../assets/pinecone.png";
import utkarsh from "../assets/utkarsh.png";
import next from "../assets/next.png";
import typescript from "../assets/typescript.png";
import flask from "../assets/flask.png";
import firebase from "../assets/firebase.png";
import bootstrap from "../assets/bootstrap.png";
import jupyter from "../assets/jupyter.png";
//import certificateImg from "../assets/certificate.png";

export const personalInfo = {
    name: "Santhosh Reddy",
    fullName: "Velagala Jaya Naga Santhosh Reddy",
    developerImage: developerImage,
    about: `I am a motivated and versatile individual, always eager to take on new challenges.
                I continuously learn and adapt to new technologies to deliver high-quality results.
                With a positive attitude and a growth mindset, I am ready to make meaningful 
                contributions and achieve great things.`,
    roles: [
        "AI/ML Engineer", 1000,
        "Full Stack Web Developer", 1000,
        "Data Scientist", 1000,
        "Programmer", 1000
    ],
    resume: "https://drive.google.com/file/d/1OB2mlE-m3aQV8rtjX83MnIUu6zygd0B_/view?usp=drivesdk",
    location: "Aravalli, Andhra Pradesh",
    email: "example@gmail.com",
    phone: "+91 xxxxx xxxxx",
    socials: {
        github: "https://github.com/SanthoshReddy-5",
        linkedin: "https://www.linkedin.com/in/santhosh-reddy-6a977a2ba",
        instagram: "https://instagram.com/santhosh__reddy__5",
        leetcode: "https://leetcode.com/u/santhosh__reddy__5"
    },
}


export const skills = [
    {
        title: "Frontend",
        skills: ["HTML","CSS","JavaScript","TailwindCSS","Bootstap", "React.js","TypeScript","Next.js"],
        logos: [ html, css, js, tailwind, bootstrap, react, typescript, next]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Flask","Firebase"],
        logos: [nodejs, express, mongodb, mysql, flask, firebase]
    },
    {
        title: "AI & ML",
        skills: ["Python", "NumPy", "Matplotlib", "Scikit-Learn", "Pandas", "TensorFlow", "LangChain","Pinecone"],
        logos: [python, numpy, matplot, sklearn, pandas, tensorflow, langchain,pinecone]
    },
    {
        title: "Others",
        skills: ["GitHub","VS Code", "Git", "Postman", "Netlify","Docker","AWS", "Jupyter Notebook"],
        logos: [github, vscode, git, postman, netlify, docker, aws, jupyter]
    },
];


export const experiences = [
    {
        title: "Internship in Artificial Intelligence",
        organization:
            "ARTIFICIAL INTELLIGENCE MEDICAL AND ENGINEERING RESEARCHERS SOCIETY (AIMERS)",
        duration: "May 2024 - Jul 2024",
        description: [
            "Developed an AI chatbot capable of answering queries using NLP and ML, implementing intent recognition and contextual responses to improve user interaction.",
            "Designed and developed dynamic data visualizations and interactive dashboards using Power BI, enabling actionable insights and real-time data analysis.",
            "Gained knowledge of cybersecurity concepts and best practices, including threat detection, risk mitigation, and secure coding principles."
        ],
        skills: ["NLP","Object Detection", "Machine Learning", "Power BI", "Cybersecurity"],
        certificate: "",
    },
    // Add more experiences here
];


export const projects = [
    {
        title: "Utkarsh 2025 - Website",
        description: "Utkarsh 2025 is the official website for the annual tech and cultural fest of Swarnandhra College of Engineering and Technology, organized by the IT Department (IT & DS). It serves as a registration portal for the 24-hour hackathon, technical and non-technical events and online games conducted during the fest. The website features a responsive, user-friendly design that ensures a smooth and engaging experience for all participants.",
        image: utkarsh,
        tags: ["TailwindCSS", "React.js", "TypeScript", "Shadcn", "Lovable"],
        livePreview: "https://www.swarnandhra.ac.in/utkarsh2025",
        sourceCode: "https://github.com/sumanthreddy217/Utkarsh2k25",
        duration: "Aug 2025",
        collaborators: [
            {
               name:"Sumanth Reddy",
               github:"https://github.com/sumanthreddy217",
               linkedin:"https://www.linkedin.com/in/k-sumanth-reddy",
            }
        ]
    },
    {
        title: "Medical Chatbot",
        description: "A responsive web-based Medical Chatbot designed to provide medical information. It uses Google Gemini API, Pinecone, Sentence Transformers, Flask and the knowledge base is powered by context from The Gale Encyclopedia of Medicine (Second Edition).",
        image: medicalchatbot,
        tags: ["HTML", "CSS", "JavaScript", "LangChain", "Flask", "Pinecone", "Gemini API"],
        sourceCode: "https://github.com/SanthoshReddy-5/MedicalChatBot",
        duration: "Jun 2025",
        collaborators: []
    },
    {
        title: "Expense Tracker",
        description: "TrackPocket is a modern expense tracker built with the MERN stack and Tailwind CSS, designed to help users manage their finances easily. It provides secure JWT-based authentication, allowing users to safely log in and track their expenses and income. With features like categorization, real-time updates, and a clean responsive UI, users can get a clear overview of their spending habits. TrackPocket makes budgeting simple, accessible, and efficient for everyone.",
        image: trackpocket,
        tags: ["React.js", "TailwindCSS", "MongoDB", "Node.js", "Express.js", "Vercel"],
        sourceCode: "https://github.com/SanthoshReddy-5/Expense_Tracker",
        livePreview: "https://trackpocket.vercel.app",
        duration: "May 2025 - Jun 2025",
        collaborators: []
    },
    {
        title: "Potato Leaf Disease Classification",
        description: "This project is a potato leaf disease classification system built using TensorFlow based Convolutional Neural Networks (CNN) integrated with a Flask web app. Users can upload potato leaf images through the web interface for instant disease detection. The trained model analyzes the image and predicts the disease type with high accuracy. This solution helps farmers and researchers quickly identify plant health issues and take timely action to protect crops.",
        image: potato,
        tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "TensorFlow", "Jupyter Notebook"],
        sourceCode: "https://github.com/SanthoshReddy-5/PotatoLeafDiseaseClassification",
        duration: "Oct 2024 - Dec 2024",
        collaborators: [
            {
               name:"Vinay Kumar Reddy",
               github:"https://github.com/vinaykumarreddy9",
               linkedin:"https://www.linkedin.com/in/kovvuri-vinay-kumar-reddy",
            }
        ]
    },
    {
        title: "Password Manager",
        description: "This project is a simple and secure password manager web application designed to store and manage credentials efficiently. It allows users to save, retrieve, and organize their passwords in one place with encryption to ensure data safety. A user-friendly interface makes it easy to manage multiple accounts securely. This solution helps users maintain strong, unique passwords without the risk of forgetting them.",
        image: password,
        tags: ["React.js", "CSS", "Node.js", "Express.js", "MySQL"],
        sourceCode: "https://github.com/SanthoshReddy-5/passwordManager",
        duration: "Apr 2024 - May 2024",
        collaborators: []
    },
    {
        title: "Weather Application",
        description: "This project is a real-time weather web app built with HTML, CSS, and JavaScript that fetches data from the OpenWeather API. Users can search any city to instantly view temperature, humidity, wind, and current conditions. It handles API responses gracefully with loading states and error messages for invalid locations. A clean, responsive UI makes the weather details easy to read on both desktop and mobile.",
        image: weather,
        tags: ["HTML", "CSS", "JavaScript", "openWeatherMapAPI"],
        sourceCode: "https://github.com/SanthoshReddy-5/WeatherApplication",
        duration: "Jan 2024",
        collaborators: []
    }
];
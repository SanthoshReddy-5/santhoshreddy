import developerImage from "../assets/developerImage.webp";
import background from "../assets/background.png";
import blinkit from "../assets/blinkit.png";
import password from "../assets/password.png";
import weather from "../assets/weather.png";
import potato from "../assets/potato.png";
import medicalchatbot from "../assets/medicalchatbot.png";
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
//import certificateImg from "../assets/background.png";

export const personalInfo = {
    name: "Santhosh Reddy",
    fullName:"Velagala Jaya Naga Santhosh Reddy",
    developerImage: developerImage,
    tagline: "Motivated Full-Stack Developer",
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
    resume: "https://drive.google.com/file/d/12xxq0G9Iy_p2b0J7DXovDGNSxraNtVkR/view?usp=drivesdk",
    location: "Aravalli, Andhra Pradesh",
    email: "velagalas222@gmail.com",
    phone: "+91 77026 90804",
    socials: {
        github: "https://github.com/SanthoshReddy-5",
        linkedin: "https://www.linkedin.com/in/santhosh-reddy-6a977a2ba",
        instagram: "https://instagram.com/santhosh__reddy__5",
        leetcode:"https://leetcode.com/u/santhosh__reddy__5"
    },
}


export const skills = [
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


export const experiences = [
  {
    title: "Internship in Artificial Intelligence",
    organization:
      "ARTIFICIAL INTELLIGENCE MEDICAL AND ENGINEERING RESEARCHERS SOCIETY (AIMERS)",
    duration: "May 2024 - Jul 2024",
    description: [
      "Developed an AI chatbot capable of answering queries using NLP and ML.",
      "Designed and developed dynamic data visualizations and dashboards using Power BI.",
      "Gained knowledge of cybersecurity concepts and best practices.",
    ],
    skills: ["NLP", "Machine Learning", "Power BI", "Cybersecurity"],
    certificate: "",
  },
  // Add more experiences here
];


export const projects = [
    {
        title: "Background Generator",
        description: "A gradient background generator creates smooth color transitions for backgrounds.",
        image: background,
        tags: ["HTML", "CSS", "JavaScript"],
        sourceCode: "https://github.com/SanthoshReddy-5/BackgroundGenerator",
        livePreview: "https://santhoshreddy-5.github.io/BackgroundGenerator",
        duration: "Jan 2024 - Feb 2024",
        collaborators: []
    },
    {
        title: "Medical Chatbot",
        description: "A responsive web-based Medical Chatbot designed to provide medical information. It uses Google Gemini API, Pinecone, Sentence Transformers, Flask and the knowledge base is powered by context from The Gale Encyclopedia of Medicine (Second Edition).",
        image: medicalchatbot,
        tags: ["HTML", "CSS", "JavaScript", "LangChain", "Flask", "Pinecone", "Gemini API"],
        sourceCode: "https://github.com/SanthoshReddy-5/MedicalChatBot",
        duration: "Mar 2024 - May 2024",
        collaborators: []
    },
    {
        title: "Password Manager",
        description: "This project is a simple and secure password manager web application designed to store and manage credentials efficiently.",
        image: password,
        tags: ["React.js", "Node.js", "Express.js", "MySQL"],
        sourceCode: "https://github.com/SanthoshReddy-5/passwordManager",
        duration: "Feb 2024 - Mar 2024",
        collaborators: []
    },
    {
        title: "BlinkIt Clone",
        description: "Frontend clone of Blinkit using HTML and CSS, replicating the design and responsiveness of the Blinkit website.",
        image: blinkit,
        tags: ["HTML", "CSS"],
        sourceCode: "https://github.com/SanthoshReddy-5/BlinkitFrontendClone",
        livePreview: "https://santhoshreddy-5.github.io/BlinkitFrontendClone",
        duration: "Dec 2023 - Jan 2024",
        collaborators: []
    },
    {
        title: "Weather Application",
        description: "Real-time weather app using OpenWeather API that displays city weather details like temperature, humidity, and conditions.",
        image: weather,
        tags: ["HTML", "CSS", "JavaScript", "openWeatherMapAPI"],
        sourceCode: "https://github.com/SanthoshReddy-5/WeatherApplication",
        duration: "Jan 2024",
        collaborators: []
    },
    {
        title: "Potato Leaf Disease Classification",
        description: "Classifies potato leaf diseases using CNN integrated with a Flask web app. Users can upload leaf images for instant diagnosis.",
        image: potato,
        tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
        sourceCode: "https://github.com/SanthoshReddy-5/PotatoLeafDiseaseClassification",
        duration: "Feb 2024 - Mar 2024",
        collaborators: []
    }
];
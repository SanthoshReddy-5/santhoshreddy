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
import trackpocket from "../assets/trackpocket.png";
import langchain from "../assets/langchain.png";
import docker from "../assets/docker.png";
import aws from "../assets/aws.png";
import pinecone from "../assets/pinecone.png";
import firebase from "../assets/firebase.png";
//import certificateImg from "../assets/background.png";

export const personalInfo = {
    name: "Santhosh Reddy",
    fullName: "Velagala Jaya Naga Santhosh Reddy",
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
        skills: ["React Js","HTML","CSS","JavaScript","TailwindCSS","Flutter"],
        logos: [react, html, css, js, tailwind, flutter]
    },
    {
        title: "Backend",
        skills: ["Node Js", "MySQL", "Express Js", "MongoDB","Java","Firebase"],
        logos: [nodejs, mysql, express, mongodb,java,firebase]
    },
    {
        title: "AI & ML",
        skills: ["Python", "NumPy", "Matplotlib", "Scikit-Learn", "Pandas", "TensorFlow", "Streamlit","LangChain","Pinecone"],
        logos: [python, numpy, matplot, sklearn, pandas, tensorflow, streamlit,langchain,pinecone]
    },
    {
        title: "Others",
        skills: ["GitHub","VS Code", "Power BI", "Netlify", "Postman", "Android Studio", "Git","Docker","AWS"],
        logos: [github, vscode, powerbi, netlify, postman, android, git,docker,aws]
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
        skills: ["NLP","Object Detection", "Machine Learning", "Power BI", "Cybersecurity"],
        certificate: "",
    },
    // Add more experiences here
];


export const projects = [
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
        collaborators: []
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
    // {
    //     title: "BlinkIt Clone",
    //     description: "Frontend clone of Blinkit using HTML and CSS, replicating the design and responsiveness of the Blinkit website.",
    //     image: blinkit,
    //     tags: ["HTML", "CSS"],
    //     sourceCode: "https://github.com/SanthoshReddy-5/BlinkitFrontendClone",
    //     livePreview: "https://santhoshreddy-5.github.io/BlinkitFrontendClone",
    //     duration: "Dec 2023 - Jan 2024",
    //     collaborators: []
    // },
    {
        title: "Weather Application",
        description: "This project is a real-time weather web app built with HTML, CSS, and JavaScript that fetches data from the OpenWeather API. Users can search any city to instantly view temperature, humidity, wind, and current conditions. It handles API responses gracefully with loading states and error messages for invalid locations. A clean, responsive UI makes the weather details easy to read on both desktop and mobile.",
        image: weather,
        tags: ["HTML", "CSS", "JavaScript", "openWeatherMapAPI"],
        sourceCode: "https://github.com/SanthoshReddy-5/WeatherApplication",
        duration: "Jan 2024",
        collaborators: []
    },
    {
        title: "Background Generator",
        description: "This project is a simple gradient background generator built with HTML, CSS, and JavaScript. It creates smooth left-to-right color transitions for backgrounds. Users can change each of the two colors using dedicated buttons and instantly preview the gradient. The generated CSS code can then be copied and used directly in any project.",
        image: background,
        tags: ["HTML", "CSS", "JavaScript"],
        sourceCode: "https://github.com/SanthoshReddy-5/BackgroundGenerator",
        livePreview: "https://santhoshreddy-5.github.io/BackgroundGenerator",
        duration: "Sept 2023",
        collaborators: []
    },
];
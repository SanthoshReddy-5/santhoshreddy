import developerImage from "../assets/developerImage.jpeg";
import potato from "../assets/potato.png";
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
import langchain from "../assets/langchain.png";
import docker from "../assets/docker.png";
import aws from "../assets/aws.png";
import utkarsh from "../assets/utkarsh.png";
import next from "../assets/next.png";
import typescript from "../assets/typescript.png";
import flask from "../assets/flask.png";
import fastapi from "../assets/fastapi.png";
import jupyter from "../assets/jupyter.png";
import streamlit from "../assets/streamlit.png";
import pdfassistant from "../assets/pdfassistant.png";
import jobportal from "../assets/jobportal.png";
import gotrip from "../assets/gotrip.png";
import trackpocket from "../assets/trackpocket.png";
import postgresql from "../assets/postgresql.png";
import langgraph from "../assets/langgraph.png";

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
        "Full Stack Developer", 1000,
        "Data Scientist", 1000,
        "Programmer", 1000
    ],
    resume: "https://drive.google.com/file/d/1Sw2lvamjh6hsLukicwNXo4Q2SEh90UeL/view?usp=drivesdk",
    location: "Aravalli, Andhra Pradesh",
    email: "santhoshreddyv01@gmail.com",
    phone: "+91 xxxxx xxxxx",
    socials: {
        github: "https://github.com/SanthoshReddy-5",
        linkedin: "https://www.linkedin.com/in/santhosh-reddy5",
        instagram: "https://instagram.com/santhosh__reddy__5",
        leetcode: "https://leetcode.com/u/santhosh__reddy__5"
    },
}

export const skills = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React.js", "TypeScript", "Next.js"],
        logos: [html, css, js, tailwind, react, typescript, next]
    },
    {
        title: "Backend",
        skills: ["Python", "Node.js", "Express.js", "MongoDB", "MySQL", "Flask", "FastAPI", "PostgreSQL"],
        logos: [python, nodejs, express, mongodb, mysql, flask, fastapi, postgresql]
    },
    {
        title: "AI & ML",
        skills: ["NumPy", "Matplotlib", "Scikit-Learn", "Pandas", "TensorFlow", "Streamlit", "LangChain", "LangGraph"],
        logos: [numpy, matplot, sklearn, pandas, tensorflow, streamlit, langchain, langgraph]
    },
    {
        title: "Others",
        skills: ["GitHub", "VS Code", "Git", "Postman", "Netlify", "Docker", "AWS", "Jupyter Notebook"],
        logos: [github, vscode, git, postman, netlify, docker, aws, jupyter]
    },
];

export const experiences = [
    {
        title: "Python Full Stack Development - Internship",
        organization:
            "Datavalley India Pvt. Ltd.",
        duration: "Dec 2025 - Apr 2026",
        description: 
            `Developed and deployed full-stack applications using FastAPI, Flask, PostgreSQL, 
            MySQL, Docker, and AWS. Built Agentic AI and LLM-based applications using 
            LangChain, LangGraph, and vector databases such as Pinecone and ChromaDB, 
            implementing RAG pipelines, intelligent agents, semantic search, and automated 
            task-based workflows. Gained hands-on experience in REST API development, 
            database management, AI integration, containerization, and cloud deployment.`,
        skills: ["Python Programming", "REST API","Flask", "FastAPI", "MySQL", "PostgreSQL",
             "Amazon Web Services", "System Design", "Agentic AI", "Vector Databases", "Docker", "Pinecone"],
        certificate: "",
    },
    {
        title: "Internship in Artificial Intelligence",
        organization:
            "Artificial Intelligence Medical and Engineering Researchers Society (AIMERS)",
        duration: "May 2024 - Jul 2024",
        description: 
            `Built a Telegram chatbot integrating the OpenWeatherMap API for real-time weather updates, 
            Hugging Face models for question answering and text-to-image generation, and 
            the OpenAI API for advanced conversational AI, delivering intelligent and 
            interactive experiences. Developed an object detection system using YOLOv8, 
            enabling accurate real-time detection and classification of objects from 
            images and video.`,
        skills: ["Natural Language Processing", "Artificial Intelligence","Object Detection", "Machine Learning", "Hugging Face",
             "Large Language Models", "YOLOv8", "RoboFlow", "OpenWeatherMap API", "OpenAI API"],
        certificate: "",
    }
];

export const projects = [
     {
        title: "GoTrip AI - Travel Planner",
        description: 
            `Developed an AI-powered travel planner that generates personalized itineraries, 
            recommendations, hotel suggestions, and travel plans. Built a multi-agent architecture 
            using LangGraph, LangChain, Groq LLMs, and FastAPI, integrating flight and web-search 
            tools for automated travel research. Implemented PostgreSQL-based persistence 
            and REST APIs for context-aware conversations and scalable backend services.`,
        image: gotrip,
        tags: ["Python", "Groq API", "LangGraph", "PostgreSQL", "Aviationstack API", "Tavily API", "React.js", "TailwindCSS", "Docker"],
        sourceCode: "https://github.com/SanthoshReddy-5/GoTrip-AI",
        duration: "Aug 2026 - Sep 2026",
        collaborators: []
    },
    {
        title: "Interactive PDF Assistant",
        description: 
            `Developed an Interactive PDF Assistant that enables users to upload documents and query them using natural language
            with secure, offline LLM processing via Ollama. Implemented semantic search using LangChain, ChromaDB, and Sentence
            Transformers, with multilingual support and text-to-speech for enhanced document interaction.`,
        image: pdfassistant,
        tags: ["Python", "Streamlit", "Ollama", "ChromaDB", "Langchain","Sentence-Transformers"],
        sourceCode: "https://github.com/SanthoshReddy-5/interactive_pdf_assistant",
        duration: "Jan 2026 - Feb 2026",
        collaborators: [
            {
                name: "Rahul Bunny",
                github: "",
                linkedin: "",
            },
            {
                name: "Harsha Vardhan",
                github: "",
                linkedin: "",
            }
        ]
    },
    {
        title: "Job Portal Application",
        description: 
            `Built a full-stack Job Portal using Next.js, React, TypeScript, Tailwind CSS, and MySQL, enabling job posting and application workflows. Implemented secure authentication with argon2, form handling using React Hook Form & Zod, and database management with Drizzle ORM. Integrated UploadThing and TipTap for file uploads and rich text editing.`,
        image: jobportal,
        tags: ["React.js", "Next.js", "MySQL","TailwindCSS","TypeScript","Zod","React Hook Form"],
        sourceCode: "https://github.com/SanthoshReddy-5/jobPortal",
        duration: "Nov 2025 - Mar 2026",
        collaborators: []
    },
    {
        title: "Utkarsh 2025 - Website",
        description: "Utkarsh 2025 is the official website for the annual tech and cultural fest of Swarnandhra College of Engineering and Technology, organized by the IT Department (IT & DS). It serves as a registration portal for the 24-hour hackathon, technical and non-technical events and online games conducted during the fest. The website features a responsive, user-friendly design that ensures a smooth and engaging experience for all participants.",
        image: utkarsh,
        tags: ["TailwindCSS", "React.js", "TypeScript", "Shadcn", "Google Forms"],
        livePreview: "https://utkarsh2k25.vercel.app",
        sourceCode: "https://github.com/sumanthreddy217/Utkarsh2k25",
        duration: "Aug 2025",
        collaborators: [
            {
                name: "Sumanth Reddy",
                github: "https://github.com/sumanthreddy217",
                linkedin: "https://www.linkedin.com/in/k-sumanth-reddy",
            }
        ]
    },
    {
        title: "Track Pocket - Expense Tracker",
        description: "TrackPocket is a modern expense tracker built with the MERN stack and Tailwind CSS, designed to help users manage their finances easily. It provides secure JWT-based authentication, allowing users to safely log in and track their expenses and income. With features like categorization, real-time updates, and a clean responsive UI, users can get a clear overview of their spending habits. TrackPocket makes budgeting simple, accessible, and efficient for everyone.",
        image: trackpocket,
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS", "MongoDB Atlas", "Vercel"],
        sourceCode: "https://github.com/SanthoshReddy-5/Expense_Tracker",
        livePreview: "https://trackpocket.vercel.app",
        duration: "May 2025 - Jun 2025",
        collaborators: []
    },
    {
        title: "Potato Leaf Disease Classification",
        description: "This project is a potato leaf disease classification system built using TensorFlow based Convolutional Neural Networks (CNN) integrated with a Flask web app. Users can upload potato leaf images through the web interface for instant disease detection. The trained model analyzes the image and predicts the disease type with high accuracy. This solution helps farmers and researchers quickly identify plant health issues and take timely action to protect crops.",
        image: potato,
        tags: ["Python", "TensorFlow", "Jupyter Notebook", "Numpy", "Flask", "HTML", "CSS", "JavaScript"],
        sourceCode: "https://github.com/SanthoshReddy-5/PotatoLeafDiseaseClassification",
        duration: "Oct 2024 - Dec 2024",
        collaborators: [
            {
                name: "Vinay Kumar Reddy",
                github: "https://github.com/vinaykumarreddy9",
                linkedin: "https://www.linkedin.com/in/kovvuri-vinay-kumar-reddy",
            }
        ]
    }
];
import React from 'react'
import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className = 'portfolio' id = 'portfolio'>
            <div className="left">
                <h1>Skills</h1>
                <div className="wrapper">
                    <h2>This website was written in React, designed with scss and hosted on Github.</h2>
                    <h2>Programming: Python, React JS (ES7), C++, Javascript, Html, CSS, SCSS, C#, R.</h2>
                    <h2>Libraries: OpenCV, ffmpeg, Scikit, OpenGL, Django, Flask, SQL-Alchemy, PyQt.</h2>
                    <h2>Tools: Github, Cloud Servers (AWS, GCP ...), Photoshop, Microsoft Excel.</h2>
                    <h2>Career Skills: Web design, Web app and Api development (Python), Data Analysis in R, 
                        Machine and Deep Learning (Python), Graphics programming(C++,OpenGL), 
                        Cross-platform desktop GUI development(PyQt).
                    </h2>
                </div>
            </div>
            <div className="center">
                <h1>Career and Experience</h1>
                <div className="wrapper">
                    <h2>(Machine Learning/Software Development Intern: July 2019 - June 2020) - 
                        I interned at the National Institute of Standards and Technology 
                        where I developed a video quality (brightness, blurriness ...) measurement tool 
                        for surviellance videos in the Actev database.</h2>
                    <h2>(Software Developer: Jan 2019 – July 2019) - 
                        At the image processing and machine learning lab, Morgan state university,
                        I developed a desktop based diagnostic aid for the classification and similar image
                        retrieval of skin lession images. This project was sponsored by the university towards
                        a patent.
                    </h2>
                    <h2>(Teaching Assistant: Jan 2019 – August 2019) - I taught the overflow section for an 
                        introduction to programming class at the Morgan State University</h2>
                </div>
            </div>
            <div className="right">
                <h1>Education</h1>
                <div className="wrapper">
                    <h2>Master of Science (Bioinformatics):
                    Computer Science, Morgan State University, Baltimore, MD USA.</h2>
                    <h2>Software Development (C++, C# - MVC, .Net):
                         New Horizons Institute, Lagos Nigeria.</h2>
                    <h2>Bachelor of Engineering (Biological Resources Engineering)
                        Federal University of Agriculture Abeokuta, Ogun State, Nigeria
                    </h2> 
                </div>
            </div>
        </div>
    )
}

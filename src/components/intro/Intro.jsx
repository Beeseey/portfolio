import React from 'react'
import "./intro.scss"

export default function Intro() {
    return (
        <div className = 'intro' id = "intro">
            <div className="left">
                <div className="wrapper">
                    <h2>
                        Hi, I'm
                    </h2>
                    <h1>Oyebisi Layode</h1>
                    <h3>Software, Machine Learning and Bioinformatics Engineer</h3>
                  
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow.png" alt=""/>
                </a>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/professional_pic.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

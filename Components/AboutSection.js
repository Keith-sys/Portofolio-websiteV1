import React from 'react';
import PersonalPhoto  from "../Images/PersonalPhoto.png";

function AboutSection() {
    return (
        <section className = "introduction-container">
            <div className= "introduction-content">
                <img src = { PersonalPhoto } alt="Jason Lui"/>
                <div className= "introduction-text">
                    <p><span>Hi, my name is</span></p>
                    <h1>Jason Lui</h1>
                    <p>I'm a software engineer & UI/UX designer and I live in Silicon Valley,California </p>
                    <div className = "wrap">
                        <div className = "item">
                            <button>RESUME</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection

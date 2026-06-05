import React from 'react';

function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Passionate Developer & Designer</h3>
                        <p>I am a Software Engineering student at Thuyloi University with a strong passion for building digital experiences that matter.</p>
                        <p>With a solid foundation in web technologies and a keen eye for design, I strive to create applications that are not only functional but also aesthetically pleasing and accessible to all users.</p>
                        <p>When I'm not coding, you can find me exploring new design trends, reading tech blogs, or playing video games.</p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-box">
                            <h4>2+</h4>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-box">
                            <h4>20+</h4>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-box">
                            <h4>5+</h4>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
import React from 'react';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Get to know more about who I am</p>
                </div>
                
                <div className="about-content visible">
                    <div className="about-image">
                        <img src="https://via.placeholder.com/400x500?text=Developer+Working" alt="Working" />
                    </div>
                    <div className="about-text">
                        <h3 className="hero-title" style={{fontSize: '1.5rem'}}>Passionate Developer & Designer</h3>
                        <p className="about-description">I am a Software Engineering student at Thuyloi University with a strong passion for building digital experiences that matter.</p>
                        <p className="about-description">With a solid foundation in web technologies and a keen eye for design, I strive to create applications that are not only functional but also aesthetically pleasing and accessible to all users.</p>
                        
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">2+</span>
                                <span className="stat-label">Years Exp</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
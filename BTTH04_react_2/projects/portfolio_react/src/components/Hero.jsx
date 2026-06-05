import React from 'react';

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>Hi, I'm <span className="highlight">Phạm Minh Đức</span></h1>
                    <h2>Frontend Developer & UI/UX Designer</h2>
                    <p>I build beautiful, responsive, and user-friendly web applications using modern technologies.</p>
                    <div className="hero-btns">
                        <a href="#portfolio" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="https://via.placeholder.com/400x400?text=PMD+Avatar" alt="Phạm Minh Đức Avatar" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
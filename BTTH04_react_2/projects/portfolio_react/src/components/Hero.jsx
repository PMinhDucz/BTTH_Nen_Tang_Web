import React from 'react';

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-bg"></div>
            <div className="container">
                <div className="hero-content visible">
                    <div className="hero-text">
                        <h1 className="hero-title">Hi, I'm <span className="highlight">Phạm Minh Đức</span></h1>
                        <p className="hero-subtitle">Frontend Developer & UI/UX Designer</p>
                        <div className="hero-buttons">
                            <a href="#portfolio" className="btn btn-primary">View My Work</a>
                            <a href="#contact" className="btn btn-outline">Contact Me</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="https://via.placeholder.com/400x400?text=PMD+Avatar" alt="Phạm Minh Đức Avatar" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
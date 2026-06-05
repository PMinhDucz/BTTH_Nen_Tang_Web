import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';
import ProjectCard from './ProjectCard';

function Portfolio() {
    // [STATE] Khởi tạo state để chứa danh sách dự án
    const [projects, setProjects] = useState(projectsData);

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">My Portfolio</h2>
                    <p className="section-subtitle">Check out some of my recent work</p>
                </div>

                {/* Sẽ render danh sách thẻ dự án ở các commit sau */}
                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
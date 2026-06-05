import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';
import ProjectCard from './ProjectCard';

function Portfolio() {
    // [STATE] Khởi tạo state để chứa danh sách dự án
    const [projects, setProjects] = useState(projectsData);
    
    // [STATE] Khởi tạo state cho bộ lọc (mặc định là 'All')
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Web', 'Mobile', 'Design'];

    // LOGIC: Lọc mảng dự án gốc dựa trên trạng thái bộ lọc hiện tại
    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">My Portfolio</h2>
                    <p className="section-subtitle">Check out some of my recent work</p>
                </div>

                {/* Danh sách nút bấm bộ lọc */}
                <div className="filter-buttons">
                    {filters.map((filter, index) => (
                        <button 
                            key={index} 
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Sẽ render danh sách thẻ dự án ở các commit sau */}
                <div className="portfolio-grid">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
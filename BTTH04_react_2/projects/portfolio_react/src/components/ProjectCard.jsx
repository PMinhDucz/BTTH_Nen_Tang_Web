import React from 'react';

function ProjectCard({ project }) {
    return (
        <div className="portfolio-card">
            <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                </div>
            </div>
            <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <div className="skill-tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="badge bg-primary" style={{marginRight: '5px'}}>
                            {tag}
                        </span>
                    ))}
                </div>
                <a href={project.link} className="btn btn-outline-primary" style={{marginTop: '15px', display: 'inline-block'}}>
                    View Details
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;

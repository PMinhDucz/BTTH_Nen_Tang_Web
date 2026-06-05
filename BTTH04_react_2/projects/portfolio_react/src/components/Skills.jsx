import React from 'react';

const skillsData = [
    { id: 1, name: "HTML5", percentage: 90, color: "bg-primary" },
    { id: 2, name: "CSS3 / SCSS", percentage: 85, color: "bg-success" },
    { id: 3, name: "JavaScript (ES6+)", percentage: 80, color: "bg-warning" },
    { id: 4, name: "React", percentage: 75, color: "bg-info" },
    { id: 5, name: "UI/UX Design", percentage: 70, color: "bg-primary" },
    { id: 6, name: "Node.js", percentage: 65, color: "bg-success" }
];

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">My Skills</h2>
                    <p className="section-subtitle">Technologies and tools I work with</p>
                </div>
                
                <div className="skills-grid">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="skill-item">
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.percentage}%</span>
                            </div>
                            <div className="skill-bar">
                                <div 
                                    className={`skill-progress ${skill.color}`} 
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
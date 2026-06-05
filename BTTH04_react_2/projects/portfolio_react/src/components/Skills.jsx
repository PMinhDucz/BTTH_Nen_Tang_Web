import React from 'react';
// Tạm thời hardcode data tĩnh, sẽ sửa lại lấy từ file portfolio.js ở commit sau
const skillsData = [
    { id: 1, name: "HTML5", percentage: 90 },
    { id: 2, name: "CSS3 / SCSS", percentage: 85 },
    { id: 3, name: "JavaScript (ES6+)", percentage: 80 },
    { id: 4, name: "React", percentage: 75 },
    { id: 5, name: "UI/UX Design", percentage: 70 },
    { id: 6, name: "Node.js", percentage: 65 }
];

function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-container">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="skill-item">
                            <div className="skill-info">
                                <h3>{skill.name}</h3>
                                <span>{skill.percentage}%</span>
                            </div>
                            <div className="skill-bar">
                                <div 
                                    className="skill-progress" 
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
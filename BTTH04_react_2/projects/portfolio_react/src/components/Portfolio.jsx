import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';

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
                    <p className="text-center text-muted" style={{gridColumn: '1 / -1'}}>
                        Dữ liệu đã được tải vào State. Chờ render...
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
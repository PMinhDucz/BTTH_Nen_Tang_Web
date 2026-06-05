import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="#" className="logo">Phạm Minh Đức</a>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#skills" className="nav-link">Skills</a></li>
                        <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <a href="#home">Phạm Minh <span className="brand-highlight">Đức</span></a>
                    </div>
                    <div className="navbar-collapse show">
                        <ul className="navbar-nav">
                            <li><a href="#home" className="nav-link">Home</a></li>
                            <li><a href="#about" className="nav-link">About</a></li>
                            <li><a href="#skills" className="nav-link">Skills</a></li>
                            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                            <li><a href="#contact" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
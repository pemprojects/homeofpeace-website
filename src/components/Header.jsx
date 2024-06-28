import React, { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-logo">Home Of Peace</div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#contact">Donate</a>
                    </li>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </div>
                {/* <div class="menu-icon" onclick="toggleMenu()" onClick={toggleMenu}>
                    ☰
                </div> */}
            </nav>
        </header>
    );
}

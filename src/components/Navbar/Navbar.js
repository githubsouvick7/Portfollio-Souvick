import React from 'react'
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Social from '../Social';

export default function Navbar() {
    const location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg nav">
                <div className="container-fluid nav-container">
                    <span className="logo" style={{ fontSize: "25px" }}>{"< "}
                        <Link className="navbar-brand logo-name" to="/">Souvick Chakraborty</Link>{'/'}
                        <span style={{ marginLeft: "-0.1px" }}>{">"}</span>
                    </span>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse me-0" id="navbarSupportedContent">
                        <ul className="navUl">
                            <li className="navList">
                                <Link className={`navItem ${location.pathname === "/" ? "activeLi" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="navList">
                                <Link className={`navItem ${location.pathname === "/skills" ? "activeLi" : ""}`} aria-current="page" to="/skills">My Skills</Link>
                            </li>
                            <li className="navList">
                                <Link className={`navItem ${location.pathname === "/projects" ? "activeLi" : ""}`} aria-current="page" to="/projects">Projects</Link>
                            </li>
                            <li className="navList">
                                <Social site="Linkedin" />
                                <Social site="Github" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

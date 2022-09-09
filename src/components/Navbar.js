import React, { useEffect } from 'react'
import { useLocation, Link } from "react-router-dom"

function Navbar(props) {
    let location = useLocation();
    useEffect(() => {
    }, [location])

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">GoCalci</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ink ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch" style={{color: props.theme==="dark"?"white":"black"}}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleTheme}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"
                            >Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
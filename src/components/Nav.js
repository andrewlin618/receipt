import React from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.png';

function Nav(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} width="30" height="30" alt="" />
            </Link>
            <Link className="navbar-brand" to="/">Receipt printer</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={`nav-item ${props.active === 'home' ? "active" : ""}`}>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {/* <li className={`nav-item ${props.active === 'upload' ? "active" : ""}`}>
                        <Link className="nav-link" to="/upload">Upload</Link>
                    </li> */}
                    <li className={`nav-item ${props.active === 'jsonPage' ? "active" : ""}`}>
                        <Link className="nav-link" to="/json">JSON</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/result">Result</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
export default Nav;
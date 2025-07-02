import React from "react";
import './Navbar.css';

const Navbar = () => (
    <div className="container">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand me-auto fs-4 fw-bold title" href="#">NAVBAR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {['Laptops', 'Smartphones', 'Cameras', 'Accessories'].map((item, index) => (
                            <li key={index} className="navbar-item px-2 fw-bold">
                                <a className={item === 'Laptops' ? 'active' : ''} href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Navbar;

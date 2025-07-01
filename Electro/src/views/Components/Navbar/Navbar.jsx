import React from "react";
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Brand on the left */}
                        <a className="navbar-brand me-auto fs-4 fw-bold title" href="#">NAVBAR</a>

                        {/* Toggler (on right for mobile) */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Collapsible content (on right) */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item pe-2" style={{ fontWeight: 'bold' }}>
                                    <a className=" active" aria-current="page" href="#">Laptops</a>
                                </li>
                                <li className="nav-item px-2" style={{ fontWeight: 'bold' }}>
                                    <a className="" href="#">Smartphones</a>
                                </li>
                                <li className="nav-item px-2" style={{ fontWeight: 'bold' }}>
                                    <a className="" href="#">Cameras</a>
                                </li>
                                <li className="nav-item px-2" style={{ fontWeight: 'bold' }}    >
                                    <a className="" href="#">Accessories</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    );
};

export default Navbar;

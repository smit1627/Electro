import React from 'react';
import './Card.css'; // Import the CSS

const Card = () => {
    return (
        <div className="laptop-collection">
            <img
                src="product01.png.webp" // replace with your image path
                alt="Laptop"
                className="background-image"
            />
            <div className="overlay">
                <div className="text-content">
                    <h2>Laptop <br /> Collection</h2>
                    <a href="#" className="shop-now">
                        SHOP NOW <span>&#10140;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;

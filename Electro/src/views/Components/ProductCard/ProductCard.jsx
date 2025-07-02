import React from "react";
import './ProductCard.css';
import { Tooltip } from 'react-tooltip';

const ProductCard = ({ img }) => (
    <div className="product-card">
        <Tooltip id="my-tooltip" />
        <div className="badge-container hidden">
            <span className="badge-discount">-30%</span>
            <span className="badge-new">NEW</span>
        </div>
        <img src={img} alt="Product" className="img-fluid mb-3" />
        <div className="category">Category</div>
        <div className="product-name">PRODUCT NAME GOES HERE</div>
        <div className="d-flex justify-content-center align-items-center">
            <span className="price">$980.00</span>
            <span className="price-old">$990.00</span>
        </div>
        <div className="rating my-2">
            {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star" />)}
        </div>
        <hr />
        <div className="actions d-flex justify-content-center">
            <i className="far fa-heart" data-tooltip-id="my-tooltip" data-tooltip-content="ADD TO WISHLIST" />
            <i className="fas fa-arrows-turn-to-dots" data-tooltip-id="my-tooltip" data-tooltip-content="COMPARE" />
            <i className="far fa-eye" data-tooltip-id="my-tooltip" data-tooltip-content="VIEW MORE" />
        </div>
        <div className="hover-cart-button">
            <button className="button">
                <i className="fa-solid fa-cart-shopping cart-hidden" />
                <span>Add to Cart</span>
            </button>
        </div>
    </div>
);

export default ProductCard;

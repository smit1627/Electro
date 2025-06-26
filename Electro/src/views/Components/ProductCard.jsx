import React from "react";
import './ProductCard.css'; // Assuming you have a CSS file for styling

const ProductCard = (props) => {
    const { img } = props;
    return (
        <div class="product-card">
            <div class="badge-container">
                <span class="badge-discount">-30%</span>
                <span class="badge-new">NEW</span>
            </div>
            <img src={img} alt="Product"
                class="img-fluid mb-3" />
            <div class="category">Category</div>
            <div class="product-name">PRODUCT NAME GOES HERE</div>
            <div class="d-flex justify-content-center align-items-center">
                <span class="price">$980.00</span>
                <span class="price-old">$990.00</span>
            </div>
            <div class="rating my-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <hr />
            <div class="actions d-flex justify-content-center">
                <i class="far fa-heart"></i>
                <i class="far fa-eye"></i>
                <i class="fas fa-shopping-cart"></i>
            </div>
        </div>
    );
};

export default ProductCard;

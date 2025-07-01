import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header_top">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Logo */}
                        <div className="col-12 col-md-2 text-center text-md-start mb-md-0 mb-23">
                            <a href="/" className="logo d-inline-block">
                                <img src="logo.png.webp" alt="Logo" className="img-fluid" />
                            </a>
                        </div>

                        {/* Search */}
                        <div className="col-12 col-md-7 mb-md-0 mb-3">
                            <form className="search-form d-flex flex-wrap justify-content-center">
                                <select name="All Category" id="Category" className=" mb-md-0">
                                    <option value="All Categories">All Categories</option>
                                    <option value="Category 1">Category 1</option>
                                    <option value="Category 2">Category 2</option>
                                </select>
                                <input
                                    type="text"
                                    className="form-control mb-md-0"
                                    placeholder="Search for products..." />
                                <button type="submit" className="btn-primary">Search</button>
                            </form>
                        </div>

                        {/* Nav Icons */}
                        <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end">
                            <nav className="header__nav">
                                <ul className="d-flex list-unstyled m-0 p-0">
                                    <li className="px-3 text-center">
                                        <a href="/about" className="d-flex flex-column align-items-center text-white text-decoration-none">
                                            <i className="fa-regular fa-heart mb-1"></i>
                                            <span>Your Wishlist</span>
                                        </a>
                                    </li>
                                    <li className="px-3 text-center">
                                        <a href="/contact" className="d-flex flex-column align-items-center text-white text-decoration-none">
                                            <i className="fa-solid fa-cart-shopping mb-1"></i>
                                            <span>Your Cart</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <ul className="d-flex list-unstyled m-0 p-0">
                                    <li className="pe-3 nav-item"><a href="/" className='active'>Home</a></li>
                                    <li className="px-3 nav-item"><a href="/products">Hot Deals</a></li>
                                    <li className="px-3 nav-item"><a href="/about">Categories</a></li>
                                    <li className="px-3 nav-item"><a href="/contact">Laptops</a></li>
                                    <li className="px-3 nav-item"><a href="/contact">Smartphones</a></li>
                                    <li className="px-3 nav-item"><a href="/contact">Cameras</a></li>
                                    <li className="px-3 nav-item"><a href="/contact">Accessories</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

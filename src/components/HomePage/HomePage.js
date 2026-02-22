import React, { useEffect, useState } from "react";
import UseCountdown from "../../hooks/useCountdown";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCab,faRotateForward, faMoneyBill, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import AllProducts from "./AllProducts/AllProducts";
import Product from "../../components/Product/Product";

//List product buttons navigation
const productNavButtons = [ 'All', 'Men', 'Women', 'Kids', 'Cosmetics', 'Accessories' ];

const HomePage = () => {
    // Discount timer setup
    const [discountEnd, setDiscountEnd] = useState(null);
    const [isButtonClick, setIsButtonClick] = useState(0);

    const countdown = UseCountdown(discountEnd);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/shop/discount/")
            .then((res) => res.json())
            .then((data) => setDiscountEnd(data.end_date));
    }, []);

    if (!countdown) return null;

    //Rendering New product by button clicking 

    const RenderComponent = ({index}) => {
        switch (index) {
          case 0: 
            return <AllProducts></AllProducts>
          case 1:
            return <Product cat="men" />
          case 2: 
            return <Product cat="wommen" />
          case 3: 
            return <Product cat="kids" />
          case 4: 
            return <Product cat="cosmetics" />
          case 5: 
            return <Product cat="accessories" />
          default:
            break;
        }
    }

    return(
        <div>
            <div className="categories-container">
                <div className="mens-fashion-container">
                    <div className="men-fashion-detiles">
                        <p>MEN'S FASHION</p>
                        <p>LIMITED <span>EDITION</span></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum felis lorem, venenatis id nunc ac, vulputate ultricies erat. Ut vitae lorem sed tortor vehicula consectetur a quis purus</p>
                        <button>Shop Now</button>
                    </div>
                    <div className="home_img">
                        <img src={require('../../Images/MensImages/Mens_Fashion_Picture.png')} alt="men's fashion"></img>
                    </div>
                    <div>
                        <div className="crown">
                            <img src={require('../../Images/crown.png')} alt="crown"></img>
                        </div>
                    </div>
                </div>
                <div className="sub-categories-cotainer">
                    <div className="sub-categories">
                        <div className="fashion-container womens-fashion-container">
                            <p>WOMEN'S FASHION</p>
                            <p>452 items</p>
                            <button>Shop Now</button>
                        </div>
                        <div className="fashion-container kids-fashion-container">
                            <p>KID'S FASHION</p>
                            <p>854 items</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="sub-categories">
                        <div className="fashion-container cosmetiics-container">
                            <p>COSMETICS</p>
                            <p>140 items</p>
                            <button>Shop Now</button>
                        </div>
                        <div className="fashion-container accessories-container">
                            <p>ACCESSORIES</p>
                            <p>444 items</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="new-product-nav-container">
                <h2>NEW PRODUCT</h2>
                <nav className="new-product-nav">
                    {
                        productNavButtons.map((productNavButton, index) => {
                            return <button key={index} className={isButtonClick === index ? "product-nav-active" : "product-nav"} onClick={() => setIsButtonClick(index)}> {productNavButton} </button>
                        })
                    }
                </nav>
            </div>
            <RenderComponent index={isButtonClick}></RenderComponent>
            <div className="more-product-container">
                <div className="more-product">
                    <h4>HOT TRED</h4>
                    <div className="product-item-container">
                        <img src="https://m.media-amazon.com/images/I/51cUIDgZYNL._AC_UY580_.jpg" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                    <div className="product-item-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJJDyZ3bbLEbq0xuqL01tYRIzz8DQxw3Y-A&usqp=CAU" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                    <div className="product-item-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxzDgCchBsL8rnACCKkvgCW-Xpw7z4SiQvQ&usqp=CAU" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                    <div className="product-item-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lE14UVpqEwdPoJFvhZfK-SqdMw7IOfCmiQ&usqp=CAU" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                </div>
                <div className="more-product">
                    <h4>BEST SELLER</h4>
                    <div className="product-item-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPrzZ0v9wYegjYGVtj3TspQmYXYy82iLzsw&usqp=CAU" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                    <div className="product-item-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSP9iZNWbrqMxk_UZZP89PUgN7kFbtR_AYA&usqp=CAU" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                    <div className="product-item-container">
                        <img src="https://i5.walmartimages.com/asr/4db8941e-57b9-48d3-982e-9768ff3751b5.1856bc2f87c95ddad35f76782ceef730.jpeg" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                    <div className="product-item-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT9rBymY8lG25soT1SaL_SIQHQw7QDD0nFA&usqp=CAU" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                </div>
                <div className="more-product">
                    <h4>FEATURE</h4>
                    <div className="product-item-container">
                        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPrzZ0v9wYegjYGVtj3TspQmYXYy82iLzsw&usqp=CAU" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                    <div className="product-item-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJfOiUup-UROqQYycq9XAoyxI0ftTjGV6eA&usqp=CAU" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                    <div className="product-item-container">
                        <img src="https://m.media-amazon.com/images/I/61gpUHy4pCL._AC_UF1000,1000_QL80_.jpg" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                    <div className="product-item-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNygs3xncMpTX5mxE92d242541Dz4sl43jg&usqp=CAU" alt="long sleeve shirt"></img>
                        <div>
                            <p className="product-name">product name</p>
                            <p className="product-price">price</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discount-countdown">
                <div className="discount-left-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZcTdxDBC1w1TadprbYDvyiHltyg4e1D6eg&usqp=CAU" alt="countdown-img"></img>
                </div>
                <div className="discount-right-container">
                    <div className="discount-right-item-container">
                        <p className="discount">DISCOUNT</p>
                        <p className="summer">SummarFash 2024</p>
                        <p className="sales">Sale <span className="percentage">35%</span></p>
                        <div className="counter-timmer">
                            {!countdown.expired ? (
                                <div className="counter-timmer-data">
                                    <p className="days timmer">{countdown.days}</p>
                                    <p className="hrs timmer">{countdown.hours}</p>
                                    <p className="min timmer">{countdown.minutes}</p>
                                    <p className="sec timmer">{countdown.seconds}</p>
                                </div>
                            ) : (
                                <p className="time-up">Discount Time Up</p>
                            )}
                        </div>

                        <button className="discount-button">Get it Now</button>
                    </div>
                </div>
            </div>
            <div className="offer-container">
                <div className="offer">
                    <FontAwesomeIcon icon={faRotateForward}></FontAwesomeIcon>
                    <div>
                        <p>Online Support 24/7</p>
                        <p>Dedicated Support</p>
                    </div>
                </div>
                <div className="offer">
                    <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>
                    <div>
                        <p>Money Back Guarantee</p>
                        <p>If good have problem</p>
                    </div>
                </div>
                <div className="offer">
                    <FontAwesomeIcon icon={faCab}></FontAwesomeIcon>
                    <div>
                        <p>Free Shipping</p>
                        <p>For order abouve $100</p>
                    </div>
                </div>
                <div className="offer">
                    <FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon>
                    <div>
                        <p>Payment system</p>
                        <p>100% Secure Payment System</p>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default HomePage;
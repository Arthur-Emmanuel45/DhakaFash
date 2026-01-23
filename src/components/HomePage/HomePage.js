import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCab,faRotateForward, faMoneyBill, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import AllProducts from "./AllProducts/AllProducts";
import MenProducts from "./MenProducts/MenProducts";
import WomenProducts from "./WomenProducts/WomenProducts";
import KidProducts from "./KidProducts/KidProducts";
import Cosmetics from "./Cosmetics/Cosmetics";
import Accessories from "./Accessories/Accessories";

//List product buttons navigation
const productNavButtons = [ 'All', 'Men', 'Women', 'Kid', 'Cosmetics', 'Accessories' ];

const HomePage = () => {
    // Discount timer setup
    const[timerdays, setTimerDays] = useState("00");
    const[timerhours, setTimerHours] = useState("00");
    const[timerminutes, setTimerMinutes] = useState("00");
    const[timerseconds, setTimerSeconds] = useState("00");

    const timeUp = useRef("Discount TimeUp");

    const updateTimeUp = () => {
        timeUp.current.style.display = "block";
    }

    let interval;
    //Discount Timer function
    const startTimer = () => {
        const countdownDate = new Date("September 15, 2025 00:00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
            const seconds = Math.floor(distance % (60 * 1000) / 1000);
    
            if(distance < 0) {
                clearInterval(interval.current);
                updateTimeUp();
            }
            else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer();
    })
    //Rendering New product by button clicking 
    const [isButtonClick, setIsButtonClick] = useState(0);
    const RenderComponent = ({index}) => {
        switch (index) {
          case 0: 
            return <AllProducts></AllProducts>
            break;
          case 1:
            return <MenProducts></MenProducts>
            break;
          case 2: 
            return <WomenProducts></WomenProducts>
            break;
          case 3: 
            return <KidProducts></KidProducts>
            break;
          case 4: 
            return <Cosmetics></Cosmetics>
            break;
          case 5: 
            return <Accessories></Accessories>
            break;
          default:
            break;
        }
    }

    return(
        <div>
            <div id="categories-container">
                <div id="mens-fashion-container">
                    <div id="men-fashion-detiles">
                        <p>MEN'S FASHION</p>
                        <p>LIMITED <span>EDITION</span></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum felis lorem, venenatis id nunc ac, vulputate ultricies erat. Ut vitae lorem sed tortor vehicula consectetur a quis purus</p>
                        <button>Shop Now</button>
                    </div>
                    <div className="home_img">
                        <img src={require('../../Images/MensImages/Mens_Fashion_Picture.png')} alt="men's fashion"></img>
                    </div>
                    <div>
                        <div id="crown">
                            <img src={require('../../Images/crown.png')} alt="crown"></img>
                        </div>
                    </div>
                </div>
                <div id="sub-categories-cotainer">
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
            <div id="new-product-nav-container">
                <h2>NEW PRODUCT</h2>
                <nav id="new-product-nav">
                    {
                        productNavButtons.map((productNavButton, index) => {
                            return <button key={index} className={isButtonClick === index ? "product-nav-active" : "product-nav"} onClick={() => setIsButtonClick(index)}> {productNavButton} </button>
                        })
                    }
                </nav>
            </div>
            <RenderComponent index={isButtonClick}></RenderComponent>
            <div id="more-product-container">
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
            <div id="discount-countdown">
                <div id="discount-left-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZcTdxDBC1w1TadprbYDvyiHltyg4e1D6eg&usqp=CAU" alt="countdown-img"></img>
                </div>
                <div id="discount-right-container">
                    <div id="discount-right-item-container">
                        <p id="discount">DISCOUNT</p>
                        <p id="summer">SummarFash 2024</p>
                        <p id="sales">Sale <span id="percentage">35%</span></p>
                        <div id="counter-timmer">
                            <p className="days timmer">{timerdays}</p>
                            <p className="hrs timmer">{timerhours}</p>
                            <p className="min timmer">{timerminutes}</p>
                            <p className="sec timmer">{timerseconds}</p>
                            <p ref={timeUp} id="time-up">Discount TimeUp</p>
                        </div>
                        <button id="discount-button">Get it Now</button>
                    </div>
                </div>
            </div>
            <div id="offer-container">
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
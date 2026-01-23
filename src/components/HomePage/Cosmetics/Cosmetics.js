import React from 'react'
import './Cosmetics.css'
import '../product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Cosmetics = () => {
  return (
    <div id="product_container">
        <div id="new-product-cat">
            <div className="product-container">
                <div className="product">
                    <div className="product-img cosmetics_img1">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img cosmetics_img2">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img cosmetics_img3">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img cosmetics_img4">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
            </div>
            <div className="product-container">
                <div className="product">
                    <div className="product-img cosmetics_img5">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img cosmetics_img6">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img cosmetics_img7">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img cosmetics_img8">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cosmetics
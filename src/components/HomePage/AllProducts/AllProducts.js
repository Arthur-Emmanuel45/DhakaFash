import React, {useState} from 'react'
import './AllProducts.css'
import '../product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const AllProducts = () => {

    const [likeHover, setlikeHover] = useState(false);

    // if(likeHover){
    //     console.log("let work");
    // }
    // const tyfunc = () => {
    //     console.log("let's move");
    // }
    // setlikeHover(tyfunc());

  return (
    <div id="product_container">
        <div id="new-product-cat">
            <div className="product-container">
                <div className="product">
                    <div className="product-img product_img1">
                        <div className="product-hover-background" onMouseEnter={() => setlikeHover(true)} onMouseLeave={() => setlikeHover(false)}>                       
                            {/* <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon> */}
                            {likeHover && <FontAwesomeIcon icon={faHeart} className="product-heart" />}
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img product_img2">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img product_img3">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img product_img4">
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
                    <div className="product-img product_img5">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img product_img6">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img product_img7">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img product_img8">
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
                    <div className="product-img product_img9">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img product_img10">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img product_img11">
                        <div className="product-hover-background">                       
                            <FontAwesomeIcon  icon={faHeart} className="product-heart"></FontAwesomeIcon>
                        </div> 
                    </div>
                    <p className="product-name">product name</p>
                    <p className="product-price">price</p>
                </div>
                <div className="product">
                    <div className="product-img product_img12">
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

export default AllProducts
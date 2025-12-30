import Header, { Footer } from './header';
import './navbar.css';
import img from './image/Linen-pant-1.jpg';
import img1 from './image/Linen-pant.jpg';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import React, { useState, useEffect } from 'react';



export default function Linenpant() {
  return (
    <>
        
        {/* <div> <Header /> </div> */}

         
                               
<br />


                    <div>   
                        <section className="homepage">
                            <img src={img1} alt="wallpaper"/>
                                <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />
                                    <br /> <br /> <br /> <br /> <br /> 
                                    <h1 >Light on you. Heavy on style</h1>
                                     <a href="#" className="banner-btn"> In your reach </a>
                                </div>
                        </section>
                    </div>
<br/>
        
        
         <div className="card-container">
                    <Design name="Linen Cream" price="₹599"  image='./IMG/J1.jpeg' img='./IMG/j1-1.jpg'  />
                    <Design name="Off-White Linen Pant" price="₹699"  image='./IMG/J2.jpeg' img='./IMG/J2-2.jpeg' />
                    <Design name="Olive Linen Pant" price="₹899"  image='./IMG/J4.jpeg' img='./IMG/j4-4.jpg'/>
                    <Design name="Mauve Off White Mandarin" price="₹899"  image='./IMG/J5.jpeg' img='./IMG/j5-5.jpg' />
                    <Design name="Gray Shirt" price="₹499"  image='./IMG/J6.jpeg' img='./IMG/j6-6.jpg' />
                    <Design name="Cream color Shirt" price="₹399"  image='./IMG/J7.jpg' img='./IMG/J7-7.jpg' />
                    <Design name="Black Shirt" price="₹599"  image='./IMG/J8.jpg' img='./IMG/J8-8.jpg' />
                    <Design name="Off White Shirt" price="₹399" image='./IMG/J9.jpg' img='./IMG/J9-9.jpg'  />
        </div>
        
                                   
<br />


                    <div>   
                        <section className="homepage">
                            <img src={img} alt="wallpaper"/>
                                <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />
                                    <br /> <br /> <br /> <br /> <br /> 
                                    <h1 >Linen that moves like summer.. </h1>
                                     <a href="#" className="banner-btn"> Just landed</a>
                                </div>
                        </section>
                    </div>
<br/>

<div> <Footer /> </div>
    </>

  );
}





export function Design({ name, price, image, img }) {
  const [isWished, setIsWished] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const exists = wishlist.some(item => item.name === name);
    setIsWished(exists);
  }, [name]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const exists = wishlist.some(item => item.name === name);

    let updatedWishlist;
    if (exists) {
      updatedWishlist = wishlist.filter(item => item.name !== name);
    } else {
      updatedWishlist = [...wishlist, { name, price, image, img }];
    }

    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setIsWished(!exists);
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="image-wrapper">
          <img src={image} alt='product' className="img-front" />
          <img src={img} alt='product-back' className="img-back" />
        </div>

        <div className="card-nav">
          <button
  className="nav-btns add-to-wishlist-btn"
  onClick={toggleWishlist}
  style={{ color: isWished ? 'red' : 'black' }}
>
  <FaHeart />
</button>
          <button className="nav-btns add-to-cart">&#128722;</button>
        </div>

        <div className="card-content">
          <div className="card-title">{name}</div>
          <div className="card-description">{price}</div>
        </div>
      </div>
    </div>
  );
}
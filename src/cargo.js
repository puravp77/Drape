import Header, { Footer } from './header';
import './navbar.css';
import img from './image/CARGO.jpeg';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import React, { useState, useEffect } from 'react';



export default function Cargo() {
  return (
    <>
        
        {/* <div> <Header /> </div> */}

         
                   
<br />


                    <div>   
                        <section className="homepage">
                            <img src={img} alt="wallpaper"/>
                                <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />
                                    <br /> <br /> <br /> <br /> <br /> 
                                    <h1 >The modern essential.. </h1>
                                     <a href="#" className="banner-btn"> In stock </a>
                                </div>
                        </section>
                    </div>
<br/>
        
        
         <div className="card-container">
                    <Design name="Navy Blue Shirt" price="₹599"  image='./IMG/C1.jpg' img='./IMG/C1-1.jpg'  />
                    <Design name="Blue Shirt" price="₹699"  image='./IMG/C2.jpg' img='./IMG/C2-2.jpg' />
                    <Design name="Black T-Shirt" price="₹899"  image='./IMG/C3.jpg' img='./IMG/C3-3.jpg'/>
                    <Design name="Mauve Off White Mandarin Shirt" price="₹899"  image='./IMG/C4.jpg' img='./IMG/C4-4.jpg' />
                    <Design name="Gray Shirt" price="₹499"  image='./IMG/C5.jpg' img='./IMG/C5-5.jpg' />
                    <Design name="Cream color Shirt" price="₹399"  image='./IMG/C6.jpg' img='./IMG/C6-6.jpg' />
                    <Design name="Black Shirt" price="₹599"  image='./IMG/C7.jpg' img='./IMG/C7-7.jpg' />
                    <Design name="Off White Shirt" price="₹399" image='./IMG/C8.jpg' img='./IMG/C8-8.jpg'  />
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
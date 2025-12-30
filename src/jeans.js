import Header, { Footer } from './header';
import './navbar.css';
import img from './image/HomePage-9.jpg';
import img1 from './image/HomePage-11.jpg';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import React, { useState, useEffect } from 'react';






export default function Jeans() {
  return (
    <>
        
        {/* <div> <Header /> </div> */}

         
                         
<br />


                    <div>   
                        <section className="homepage">
                            <img src={img} alt="wallpaper"/>
                                <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />
                                    <br /> <br /> <br /> <br /> <br /> 
                                    <h1 >Classic denim, timeless fit.. </h1>
                                     <a href="#" className="banner-btn"> Ready to ship </a>
                                </div>
                        </section>
                    </div>
<br/>
        
        
         <div className="card-container">
                    <Design name="Navy Blue Shirt" price="₹599"  image='./IMG/JJ1.jpg' img='./IMG/JJ1-1.jpg'  />
                    <Design name="Blue Shirt" price="₹699"  image='./IMG/JJ2.jpg' img='./IMG/JJ2-2.jpg' />
                    <Design name="Black T-Shirt" price="₹899"  image='./IMG/JJ3.jpg' img='./IMG/JJ3-3.jpg'/>
                    <Design name="Mauve Off White Mandarin Shirt" price="₹899"  image='./IMG/JJ4.jpg' img='./IMG/JJ4-4.jpg' />
                    <Design name="Gray Shirt" price="₹499"  image='./IMG/JJ5.jpg' img='./IMG/JJ5-5.jpg' />
                    <Design name="Cream color Shirt" price="₹399"  image='./IMG/JJ6.jpg' img='./IMG/JJ6-6.jpg' />
                    <Design name="Black Shirt" price="₹599"  image='./IMG/JJ7.jpg' img='./IMG/JJ7-7.jpg' />
                    <Design name="Off White Shirt" price="₹399" image='./IMG/JJ8.jpg' img='./IMG/JJ8-8.jpg'  />
                    <Design name="Gray Shirt" price="₹499"  image='./IMG/JJ9.jpg' img='./IMG/JJ9-9.jpg' />
                    <Design name="Cream color Shirt" price="₹399"  image='./IMG/JJ10.jpg' img='./IMG/JJ10-10.jpg' />
                    <Design name="Black Shirt" price="₹599"  image='./IMG/JJ11.jpg' img='./IMG/JJ11-11.jpg' />
                    <Design name="Off White Shirt" price="₹399" image='./IMG/JJ12.jpg' img='./IMG/JJ12-12.jpg'  />
        </div>

                               
<br />


                    <div>   
                        <section className="homepage">
                            <img src={img1} alt="wallpaper"/>
                                <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />
                                    <br /> <br /> <br /> <br /> <br /> 
                                    <h1 >A cut above the rest... </h1>
                                     <a href="#" className="banner-btn"> Now launched </a>
                                </div>
                        </section>
                    </div>
<br/>
        
       
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
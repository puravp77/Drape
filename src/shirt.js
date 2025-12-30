import Header, { Footer } from './header';
import img from './image/Stiped-short.jpg';
import img1 from './image/HomePage-A.jpg';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import React, { useState, useEffect } from 'react';



export default function Shirt() {
return (
    <>

{/* <div> <Header /> </div> */}
 
<br />


                    <div>   
                        <section className="homepage">
                            <img src={img} alt="wallpaper"/>
                                <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br />
                                    <h1 > New season. New standard. </h1>
                                     <a href="#" className="banner-btn"> Now in stock </a>
                                </div>
                        </section>
                    </div>
<br/>


 <div className="card-container">
            <Design name="Striped Shirt" price="₹599"  image='./IMG/23.jpg' img='./IMG/23-23.jpg'  />
            <Design name="Olive Shirt" price="₹699"  image='./IMG/22.jpg' img='./IMG/22-22.jpg' />
            <Design name="Old School Shirt" price="₹899"  image='./IMG/21.jpg' img='./IMG/21-21.jpg'/>
            <Design name="Mauve Blue Striped Shirt" price="₹899"  image='./IMG/20.jpg' img='./IMG/20-20.jpg' />
            <Design name="Pure Cotton Black Shirt" price="₹499"  image='./IMG/19.jpeg' img='./IMG/19-19.jpg' />
            <Design name="Multi Check Shirt" price="₹399"  image='./IMG/18.jpeg' img='./IMG/18-18.jpg' />
            <Design name="Light Blue Shirt" price="₹599"  image='./IMG/17.jpg' img='./IMG/17-17.jpg'/>
            <Design name="Peach Shiny Shirt" price="₹399" image='./IMG/16.jpeg' img='./IMG/16-16.jpg'  />
</div>

<br />

 <div className="card-container">
            <Design name="Violet Cotton Linen Shirt" price="₹599"  image='./IMG/1.jpg' img='./IMG/1-1.jpg'  />
            <Design name="Olive Linen Shirt" price="₹699"  image='./IMG/2.jpg' img='./IMG/2-2.jpg' />
            <Design name="Brown Irish Linen Shirt" price="₹899"  image='./IMG/3.jpg' img='./IMG/3-3.jpg'/>
            <Design name="JMIERR Men's Cotton Linen Shirt" price="₹899"  image='./IMG/4.jpg' img='./IMG/4-4.jpg' />
            <Design name="J.VER Men's Casual Linen Button-Down Shirt" price="₹499"  image='./IMG/5.jpg' img='./IMG/5-5.jpg' />
            <Design name="Irish Tan Beige Linen Shirt" price="₹399"  image='./IMG/6.jpg' img='./IMG/6-6.jpg' />
            <Design name="Ivory White Cotton Linen Shirt" price="₹599"  image='./IMG/7.jpeg' img='./IMG/7-7.jpg'/>
            <Design name="COOFANDY Men's Linen Casual Shirt" price="₹399" image='./IMG/8.jpg' img='./IMG/8-8.jpg'  />
</div>


<br />


                    <div>   
                        <section className="homepage">
                            <img src={img1} alt="wallpaper"/>
                        </section>
                    </div>
<br/>





 <div className="card-container">
            <Design name="Navy Blue Shirt" price="₹599"  image='./IMG/9.jpg' img='./IMG/9-9.jpg'  />
            <Design name="Blue Shirt" price="₹699"  image='./IMG/10.jpeg' img='./IMG/10-10.jpg' />
            <Design name="Black T-Shirt" price="₹899"  image='./IMG/11.jpeg' img='./IMG/11-11.jpg'/>
            <Design name="Mauve Off White Mandarin Shirt" price="₹899"  image='./IMG/12.jpeg' img='./IMG/12-12.jpg' />
            <Design name="Gray Shirt" price="₹499"  image='./IMG/13.jpeg' img='./IMG/13-13.jpg' />
            <Design name="Cream color Shirt" price="₹399"  image='./IMG/14.jpeg' img='./IMG/14-14.jpg' />
            <Design name="Black Shirt" price="₹599"  image='./IMG/15.jpeg' img='./IMG/15-15.jpg'/>
            <Design name="Off White Shirt" price="₹399" image='./IMG/16.jpeg' img='./IMG/16-16.jpg'  />
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
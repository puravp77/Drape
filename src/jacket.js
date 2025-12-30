
import img1 from './image/jacket-1.jpg';
import img from './image/jacket-2.jpg';
import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist } from "./wishlistUtils"; 
import { FaHeart } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
  import Header, { Footer } from './header';



function useQuery() {
  return new URLSearchParams(useLocation().search);
}




export default function Jacket(){
    const query = useQuery();
          const searchQuery = query.get('q')?.toLowerCase() || '';
                  const navigate = useNavigate();  



return(

<>

<br/>
{!searchQuery && (
                    <div>   
                        <section className="homepage1">
                            <img src={img} alt="wallpaper"/>
                                <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br />
                                    <h1> Layered Looks Ahead </h1>
                                </div>
                        </section>
</div> )}
<br/>

 



 <div className="card-container">

                      { "Black Jacket".toLowerCase().includes(searchQuery) &&
                      <Design name="Black Jacket" price="₹599"  image='./IMG/jack-1.jpg' img='./IMG/jack-1-1.jpg'  />
                      }

                      { "Grey Jacket".toLowerCase().includes(searchQuery) &&
                      <Design name="Grey Jacket" price="₹699"  image='./IMG/jack2.jpg' img='./IMG/jack2-2.jpg' />
                      }

                      { "Black Printed Jacket".toLowerCase().includes(searchQuery) &&
                      <Design name="Black Printed Jacket" price="₹899"  image='./IMG/jack3.jpg' img='./IMG/jack3-3.jpg'/>
                      }

                      { "Denim Blue Jacket".toLowerCase().includes(searchQuery) &&
                      <Design name="Denim Blue Jacket" price="₹899"  image='./IMG/jack4.jpg' img='./IMG/jack4-4.jpg' />
                      }

                      { "Denim Printed Jacket".toLowerCase().includes(searchQuery) &&
                      <Design name="Denim Printed Jacket" price="₹499"  image='./IMG/jack5.jpg' img='./IMG/jack5-5.jpg' />
                      }

                      { "Wine Plain Jacket".toLowerCase().includes(searchQuery) &&
                      <Design name="Wine Plain Jacket" price="₹399"  image='./IMG/jack6.jpg' img='./IMG/jack6-6.jpg' />
                      }

                      { "Biscoff Jacket".toLowerCase().includes(searchQuery) &&
                      <Design name="Biscoff Jacket" price="₹599"  image='./IMG/jack7.jpg' img='./IMG/jack7-7.jpg'/>
                      }

                      { "Blahit Jacket".toLowerCase().includes(searchQuery) &&
                      <Design name="Blahit Jacket" price="₹399" image='./IMG/jack8.jpg' img='./IMG/jack8-8.jpg'  />
                      }





</div>


<br/>
{!searchQuery && (

                    <div>   
                        <section className="homepage1">
                            <img src={img1} alt="wallpaper"/>
                                <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br />
                                </div>
                        </section>
                    </div> )}
<br/>


  {searchQuery && document.querySelectorAll('.card').length === 0 && (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <h2> No results found for "{searchQuery}"</h2>
  </div>
)}

  <div> <Footer /> </div>


</>
)
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
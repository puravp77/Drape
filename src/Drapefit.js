  import './navbar.css';
  import img from './image/HomePage-4.jpg';
  import img1 from './image/HomePage-7.jpg';
  import img2 from './image/HomePage-8.jpg';
  import img3 from './image/HomePage-10.jpg';
  import img4 from './image/CARGO1.jpeg';
  import img5 from './image/jacket-1.jpg';
  import img6 from './image/jacket-2.jpg';
  import Header, { Footer } from './header';
  import { useNavigate, useLocation  } from 'react-router-dom';
  import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist } from "./wishlistUtils"; 
  import { FaHeart } from "react-icons/fa";
  import React, { useState, useEffect } from 'react';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}



  export default function Drapefit(){
        const query = useQuery();
        const searchQuery = query.get('q')?.toLowerCase() || '';
                const navigate = useNavigate();





  return(

  <>
  {/* <div> <Header /> </div> */}

  <br/> {!searchQuery && (

                      <div>   
                          <section className="homepage1">
                              <img src={img3} alt="wallpaper"/>
                                  <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br />
                                      <h1> Grab the Look </h1>
                                  </div>
                          </section>
                      </div> )}
  <br/>

  



  <div className="card-container">


              { "Violet Cotton Linen Shirt".toLowerCase().includes(searchQuery) &&
                <Design name="Violet Cotton Linen Shirt" price="₹599" image='./IMG/1-1.jpg' img='./IMG/1.jpg' />
              }

              { "Olive Linen Shirt".toLowerCase().includes(searchQuery) &&
              <Design name="Olive Linen Shirt" price="₹699" image='./IMG/2.jpg' img='./IMG/2-2.jpg' />
              }

              {"Brown Irish Linen Shirt".toLowerCase().includes(searchQuery) &&
              <Design name="Brown Irish Linen Shirt" price="₹899"  image='./IMG/3.jpg' img='./IMG/3-3.jpg'/>
              }

              {"JMIERR Men's Cotton Linen Shirt".toLowerCase().includes(searchQuery) &&
              <Design name="JMIERR Men's Cotton Linen Shirt" price="₹899"  image='./IMG/4.jpg' img='./IMG/4-4.jpg' />
              }

              {"J.VER Men's Casual Linen Button-Down Shirt".toLowerCase().includes(searchQuery) &&
              <Design name="J.VER Men's Casual Linen Button-Down Shirt" price="₹499"  image='./IMG/5-5.jpg' img='./IMG/5.jpg' />
              }
              
              {"Irish Tan Beige Linen Shirt".toLowerCase().includes(searchQuery) &&
              <Design name="Irish Tan Beige Linen Shirt" price="₹399"  image='./IMG/6.jpg' img='./IMG/6-6.jpg' />
              }

              {"Ivory White Cotton Linen Shirt".toLowerCase().includes(searchQuery) &&
              <Design name="Ivory White Cotton Linen Shirt" price="₹599"  image='./IMG/7.jpeg' img='./IMG/7-7.jpg'/>
              }

               {"COOFANDY Men's Linen Casual Shirt".toLowerCase().includes(searchQuery) &&
              <Design name="COOFANDY Men's Linen Casual Shirt" price="₹399" image='./IMG/8.jpg' img='./IMG/8-8.jpg'  />
              }

</div>

  <br />

  {!searchQuery && (
                      <div>   
                          <section className="homepage">
                              <img src={img} alt="wallpaper"/>
                                  <div className="banner-text"><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />
                                      <h1>Essential Shirts </h1>  
                                      <a href="#" onClick={() => navigate('/shirt')} className="banner-btn">Own the Style</a>
                                  </div>
                          </section>
                      </div>
                      )}
  <br/> 




  <div className="card-container">

      

                  {"Stone Grey Cotton Linen Shirt".toLowerCase().includes(searchQuery) &&
                  <Design name="Stone Grey Cotton Linen Shirt" price="₹1199" image='./IMG/9.jpg' img='./IMG/9-9.jpg'  />
                  }

                  {"Grey Stripe Linen Shirt".toLowerCase().includes(searchQuery) &&
                  <Design name="Grey Stripe Linen Shirt" price="₹1999" image='./IMG/10.jpeg' img='./IMG/10-10.jpg'  />
                  }

                  {"Violet Linen Shirt".toLowerCase().includes(searchQuery) &&
                  <Design name="Violet Linen Shirt" price="₹1199"  image='./IMG/11.jpeg' img='./IMG/11-11.jpg' />
                  }

                  {"Brown Pure Linen Shirt".toLowerCase().includes(searchQuery) &&
                  <Design name="Brown Pure Linen Shirt" price="₹899" image='./IMG/12.jpeg' img='./IMG/12-12.jpg' />
                  }

                  {"Vintage Smoothy Blue Linen Shirt".toLowerCase().includes(searchQuery) &&
                   <Design name="Vintage Smoothy Blue Linen Shirt" price="₹1199"  image='./IMG/13.jpeg' img='./IMG/13-13.jpg'/>
                  }

                  {"Pure Linen Blue Shirt".toLowerCase().includes(searchQuery) &&
                   <Design name="Pure Linen Blue Shirt" price="₹1299" image='./IMG/14.jpeg' img='./IMG/14-14.jpg'  />
                  }

                  {"White Pearl Linen Shirt".toLowerCase().includes(searchQuery) &&
                  <Design name="White Pearl Linen Shirt" price="₹1749"   image='./IMG/15.jpeg' img='./IMG/15-15.jpg'/>
                  }

                   {"Peach Cherry Linen Shirt".toLowerCase().includes(searchQuery) &&
                     <Design name="Peach Cherry Linen Shirt" price="₹1999" image='./IMG/16.jpeg' img='./IMG/16-16.jpg'  />         
                   }

      


            
  </div>

  <br/> {!searchQuery && (
                      <div>   
                          <section className="homepage">
                              <img src={img1} alt="wallpaper"/>
                                  <div className="banner-text">
                                      <h1> Graphic Game </h1>
                                      <a href="#" onClick={() => navigate('/T-shirt')} className="banner-btn">Explore</a>
                                  </div>
                          </section>
                      </div>)}
  <br/>

          <div className="card-container">

          

                    {"OverSized Street T-Shirt".toLowerCase().includes(searchQuery) &&
                      <Design name="OverSized Street T-Shirt" price="₹1199" image='./IMG/T1.jpg' img='./IMG/T1-1.jpg'  />
                    }

                    {"Pure Olive T-Shirt".toLowerCase().includes(searchQuery) &&
                      <Design name="Pure Olive T-Shirt" price="₹1999" image='./IMG/T2.jpg' img='./IMG/T2-2.jpg'  />
                    }

                    {"Deep Black T-Shirt".toLowerCase().includes(searchQuery) &&
                      <Design name="Deep Black T-Shirt" price="₹1199"  image='./IMG/T3.JPG' img='./IMG/T3-3.jpg' />
                    }

                     {"Mauve White T-Shirt".toLowerCase().includes(searchQuery) &&
                      <Design name="Mauve White T-Shirt" price="₹899" image='./IMG/T4.JPG' img='./IMG/T4-4.jpg' />
                     }

                     {"Polo Dark Blue T-Shirt".toLowerCase().includes(searchQuery) &&
                      <Design name="Polo Dark Blue T-Shirt" price="₹1199"  image='./IMG/T5.jpg' img='./IMG/T5-5.jpg'/>
                     }

                     {"VeloCity White T-Shirt".toLowerCase().includes(searchQuery) &&
                      <Design name="VeloCity White T-Shirt" price="₹1299" image='./IMG/T6.JPG' img='./IMG/T6-6.jpg'  />
                     }

                     {"Flecked Polo T-Shirt".toLowerCase().includes(searchQuery) &&
                      <Design name="Flecked Polo T-Shirt" price="₹1749"   image='./IMG/T7.JPG' img='./IMG/T7-7.jpg'/>
                     }

                     {"Vintage Classy T-Shirt".toLowerCase().includes(searchQuery) &&
                      <Design name="Vintage Classy T-Shirt" price="₹1999" image='./IMG/T8.JPG' img='./IMG/T8-8.jpg'  />        
                     }


            
            </div>
        


  <br/> {!searchQuery && (
                      <div>   
                          <section className="homepage">
                              <img src={img2} alt="wallpaper"/>
                                  <div className="banner-text">
                                      <h1> Denim Days — Fit to Live </h1>
                                      <a href="#" onClick={() => navigate('/jeans')} className="banner-btn">Buy Now</a>
                                  </div>
                          </section>
                      </div>)}
  <br/>



  <div className="card-container">

                     {"Lilac Denim Jeans".toLowerCase().includes(searchQuery) &&
                      <Design name="Lilac Denim Jeans" price="₹1199" image='./IMG/JJ1.jpg' img='./IMG/JJ1-1.jpg'  />
                     }

                     {"Pure Dark Grey Denim Pant".toLowerCase().includes(searchQuery) &&
                      <Design name="Pure Dark Grey Denim Pant" price="₹1999" image='./IMG/JJ2.jpg' img='./IMG/JJ2-2.jpg'  />
                     }

                     {"Deep Gray Gurkha Jeans".toLowerCase().includes(searchQuery) &&
                      <Design name="Deep Gray Gurkha Jeans" price="₹1199"  image='./IMG/JJ3.JPG' img='./IMG/JJ3-3.jpg' />
                     }

                     {"Mauve Pink Plain Mandarin Collar Shirt".toLowerCase().includes(searchQuery) &&
                      <Design name="Mauve Pink Plain Mandarin Collar Shirt" price="₹899" image='./IMG/JJ4.JPG' img='./IMG/JJ4-4.jpg' />
                     }

                     {"Pure Classy Jeans".toLowerCase().includes(searchQuery) &&
                      <Design name="Pure Classy Jeans" price="₹1199"  image='./IMG/JJ5.jpg' img='./IMG/JJ5-5.jpg'/>
                     }

                     {"Brown Beeclub Jeans".toLowerCase().includes(searchQuery) &&
                      <Design name="Brown Beeclub Jeans" price="₹1299" image='./IMG/JJ6.JPG' img='./IMG/JJ6-6.jpg'  />
                     }

                     {"Black Jeans".toLowerCase().includes(searchQuery) &&
                      <Design name="Black Jeans" price="₹1749"   image='./IMG/JJ7.JPG' img='./IMG/JJ7-7.jpg'/>
                     }

                     {"Loose Fit Jeans".toLowerCase().includes(searchQuery) &&
                      <Design name="Loose Fit Jeans" price="₹1999" image='./IMG/JJ8.JPG' img='./IMG/JJ8-8.jpg'  />         
                     }




                    
  </div> 

  <br/>

{!searchQuery && (
                      <div>   
                          <section className="homepage">
                              <img src={img4} alt="wallpaper"/>
                                  <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br />
                                    
                                      <a href="#" onClick={() => navigate('/cargo')} className="banner-btn"> Available </a>
                                  </div>
                          </section>
                      </div> )}
  <br/>


  <div className="card-container">

                      {"Brown Cargo".toLowerCase().includes(searchQuery) &&
                        <Design name="Brown Cargo" price="₹1199" image='./IMG/C1.jpg' img='./IMG/C1-1.jpg'  />
                      }

                      {"Grey Cargo".toLowerCase().includes(searchQuery) &&
                        <Design name="Grey Cargo" price="₹1999" image='./IMG/C2.jpg' img='./IMG/C2-2.jpg'  />
                      }

                      {"Deep Blue Cargo".toLowerCase().includes(searchQuery) &&
                        <Design name="Deep Blue Cargo" price="₹1199"  image='./IMG/C3.JPG' img='./IMG/C3-3.jpg' />
                      }

                      {"Mandarin Cargo".toLowerCase().includes(searchQuery) &&
                        <Design name="Mandarin Cargo" price="₹899" image='./IMG/C4.JPG' img='./IMG/C4-4.jpg' />
                      }

                      {"Lee Cargo".toLowerCase().includes(searchQuery) &&
                        <Design name="Lee Cargo" price="₹1199"  image='./IMG/C5.jpg' img='./IMG/C5-5.jpg'/>
                      }

                      {"Puma Cargo".toLowerCase().includes(searchQuery) &&
                        <Design name="Puma Cargo" price="₹1299" image='./IMG/C6.JPG' img='./IMG/C6-6.jpg'  />
                      }

                      {"Flecked Sequenced Black Cargo".toLowerCase().includes(searchQuery) &&
                        <Design name="Flecked Sequenced Black Cargo" price="₹1749"   image='./IMG/C7.JPG' img='./IMG/C7-7.jpg'/>
                      }

                      {"Dark olive Cargo".toLowerCase().includes(searchQuery) &&
                        <Design name="Dark olive Cargo" price="₹1999" image='./IMG/C8.JPG' img='./IMG/C8-8.jpg'  />         
                      }
            
  </div>
  <br/>


  {!searchQuery && (
                    <div>   
                        <section className="homepage1">
                            <img src={img5} alt="wallpaper"/>
                                <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br />
                                    
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
                        <section className="homepage">
                            <img src={img6} alt="wallpaper"/>
                                <div className="banner-text"> <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br />
                                    <h1> Layered Looks Ahead </h1>
                                </div>
                        </section>
                    </div> )}
<br/>





  {searchQuery && document.querySelectorAll('.card').length === 0 && (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <h2> No results found for "{searchQuery}"</h2>
  </div>
)}




          
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

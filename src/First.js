import Header from './header';
import { Footer } from './header';
import './navbar.css';

export default function First(){
return(

<>

<div>
  <div> <Header /> </div>
 



<div className="card-container" >

    <div className="card"  data-main="men" data-sub="shirt" data-price="250"> 
      <div className="image-wrapper">
        <img src="./IMG/1.jpg" alt="Image 1"  class="img-front" />
        <img src="./IMG/1-1.jpg" alt="image1.2"  class="img-back" />
      </div>
      <div className="nav-iconss">
        <button className="nav-btnn add-to-wishlist-btn" data-id="1" data-name="Violet Cotton Linen Shirt" data-price="250" data-img="IMG/1.jpg"> &#10084;</button>
        <button className="nav-btnn add-to-cart" title="Cart" data-id="1" data-name="Violet Cotton Linen Shirt" data-price="250" data-img="IMG/1.jpg"> &#128722; </button> 
      </div>
      <div className="card-content">
        <div className="card-title">Violet Cotton Linen Shirt</div>
        <div className="card-description">₹250</div>
      </div>
    </div>


    <div className="card"  data-main="men" data-sub="shirt" data-price="300"> 
      <div className="image-wrapper">
        <img src="./IMG/2.jpg" alt="Image 1"  class="img-front" />
        <img src="./IMG/2-2.jpg" alt="image1.2"  class="img-back" />
      </div>
      <div className="nav-iconss">
        <button className="nav-btnn add-to-wishlist-btn"  title="Favorites" data-id="2" data-name="Olive Linen Shirt" data-price="300" data-img="IMG/2.jpg">&#10084; </button> 
        <button className="nav-btnn add-to-cart" title="Cart" data-id="2" data-name="Olive Linen Shirt" data-price="300" data-img="IMG/2.jpg"> &#128722; </button>  
      </div>
      <div className="card-content">
        <div className="card-title">Olive Linen Shirt</div>
        <div className="card-description">₹300</div>
      </div>
    </div>


    <div className="card"  data-main="men" data-sub="shirt" data-price="700"> 
      <div className="image-wrapper">
        <img src="./IMG/3.jpg" alt="Image 1"  class="img-front" />
        <img src="./IMG/3-3.jpg" alt="image1.2"  class="img-back" />
      </div>
      <div className="nav-iconss">
        <button className="nav-btnn add-to-wishlist-btn" title="Favorites" data-id="3" data-name="Brown Irish Linen Shirt" data-price="700" data-img="IMG/3.jpg">&#10084; </button> 
        <button className="nav-btnn add-to-cart" title="Cart" data-id="3" data-name="Brown Irish Linen Shirt" data-price="700" data-img="IMG/3.jpg"> &#128722; </button>  
      </div>
      <div className="card-content">
        <div className="card-title">Brown Irish Linen Shirt</div>
        <div className="card-description">₹700</div>
      </div>
    </div>


    <div className="card"  data-main="men" data-sub="shirt" data-price="300"> 
      <div className="image-wrapper">
        <img src="./IMG/4.jpg" alt="Image 1"  class="img-front" />
        <img src="./IMG/4-4.jpg" alt="image1.2"  class="img-back" />
      </div>
      <div className="nav-iconss">
        <button className="nav-btnn add-to-wishlist-btn" title="Favorites" data-id="4" data-name="JMIERR Men's Cotton Linen Shirt" data-price="300" data-img="IMG/4.jpg">&#10084; </button> 
        <button className="nav-btnn add-to-cart" title="Cart" data-id="4" data-name="JMIERR Men's Cotton Linen Shirt" data-price="300" data-img="IMG/4.jpg"> &#128722; </button>  
      </div>
      <div className="card-content">
        <div className="card-title">JMIERR Men's Cotton Linen Shirt</div>
        <div className="card-description">₹300</div>
      </div>
    </div>
          

</div> 

        <div> <Footer /> </div>

</div>



</>
    
  
  );
}

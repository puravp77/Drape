import React, { useEffect, useState } from 'react';
import './navbar.css';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const removeFromWishlist = (name) => {
    const updatedWishlist = wishlistItems.filter(item => item.name !== name);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlistItems(updatedWishlist);
  };

  const addToCart = (item) => {
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

  // Avoid duplicates (optional)
  const alreadyInCart = existingCart.some(cartItem => cartItem.name === item.name);
  if (!alreadyInCart) {
    const updatedCart = [...existingCart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${item.name} added to cart!`);
  } else {
    alert(`${item.name} is already in the cart.`);
  }
};

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-heading">Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="empty-text">Your wishlist is empty.</p>
      ) : (
        <div className="card-container">
          {wishlistItems.map(({ name, price, image, img }, index) => (
            <div className="card" key={index}>
              <div className="image-wrapper">
                <img src={image} alt="product" className="img-front" />
                <img src={img} alt="product-back" className="img-back" />
              </div>

              <div className="card-nav">
                <button
                  className="nav-btns remove-btn"
                  onClick={() => removeFromWishlist(name)}
                  title="Remove from Wishlist"
                  style={{ color: 'black' }}
                >
                  &#10060;
                </button>

               <button
                    className="nav-btns"
                    title="Add to Cart"
                    onClick={() => addToCart({ name, price, image, img })}
                    >
                    &#128722;
                    </button>
              </div>

              <div className="card-content">
                <div className="card-title">{name}</div>
                <div className="card-description">{price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
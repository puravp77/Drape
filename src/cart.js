import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Footer } from './header';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartWithQty = storedCart.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setCartItems(cartWithQty);
  }, []);

  const removeFromCart = (name) => {
    const updatedCart = cartItems.filter(item => item.name !== name);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, delta) => {
    setCartItems(prevItems => {
      const updated = prevItems.map((item, idx) => {
        if (idx === index) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty < 1 ? 1 : newQty };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const numericPrice = item?.price
        ? parseInt(item.price.replace(/[^0-9]/g, ''), 10)
        : 0;
      return total + numericPrice * (item.quantity || 1);
    }, 0);
  };

  return (
    <>
      <main>
        <h2 className="cart-heading">Your Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item, index) => {
              const numericPrice = item?.price
                ? parseInt(item.price.replace(/[^0-9]/g, ''), 10)
                : 0;

              return (
                <div className="cart-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>Price: {item.price || 'N/A'}</p>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '8px 0',
                      }}
                    >
                      <span style={{ marginRight: 8 }}>Quantity:</span>
                      <button
                        style={{
                          padding: '2px 10px',
                          borderRadius: '6px',
                          border: '1px solid #aaa',
                          backgroundColor: '#f0f0f0',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          marginRight: 4,
                        }}
                        onClick={() => handleQuantityChange(index, -1)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        style={{
                          width: 40,
                          textAlign: 'center',
                          borderRadius: '6px',
                          border: '1px solid #aaa',
                          margin: '0 4px',
                          background: '#fff',
                        }}
                      />
                      <button
                        style={{
                          padding: '2px 10px',
                          borderRadius: '6px',
                          border: '1px solid #aaa',
                          backgroundColor: '#f0f0f0',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          marginLeft: 4,
                        }}
                        onClick={() => handleQuantityChange(index, 1)}
                      >
                        +
                      </button>
                    </div>
                    <p>Subtotal: ₹{numericPrice * (item.quantity || 1)}</p>
                    <button
                      style={{
                        padding: '6px 14px',
                        borderRadius: '10px',
                        border: 'none',
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        marginTop: '8px',
                      }}
                      onClick={() => removeFromCart(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-total">
            <p>Total: ₹{getTotalPrice()}</p>
            <button
              onClick={() => {
                alert('Thanks For Shopping With DrapeFit');
                localStorage.removeItem('cart');
                setCartItems([]);
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )} 
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div> <Footer /> </div>
        
      </main>
    </>
  );
}
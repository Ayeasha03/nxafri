import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems}) {

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex space-x-4 items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <h3 className="text-xl font-bold">
              Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}
            </h3>
            <Link
              href="/checkout">
                <button
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Proceed to Checkout
              </button>
              </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;


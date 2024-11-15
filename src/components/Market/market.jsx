import React from 'react';
import { Link } from 'react-router-dom';

const Marketplace = ({addToCart, item }) => {
  const items = [
    { id: 1, name: 'African Art Piece', price: '$50', image: '/src/assets/images/art1.jpg' },
    { id: 2, name: 'Handmade Jewelry', price: '$30', image: '/src/assets/images/bracelet3.jpg' },
    { id: 3, name: 'Fashion Bag', price: '$100', image: '/src/assets/images/bagmaking2.jpg' }
  ];

  
  return (
    <div id='marketplace' className="p-8 bg-yellow-100 ">
      <h2 className="text-3xl font-bold mb-4 text-center">Shop from Talented Young Creators</h2>
      <p className='text-center mb-12 italic'>Explore unique items created by young talents</p>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6  ">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg w-full h-100 overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-80 object-fill rounded-md" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
              <button onClick={() => addToCart(item)} className="mt-4 hover:bg-blue-700 bg-blue-500 text-white px-4 py-2 rounded">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/full-marketplace" className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">See More</Link>
      </div>
    </div>
  );
};

export default Marketplace;


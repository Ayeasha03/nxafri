import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const images = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,svg}');

function FullMarketplace() {
  const [loadedImages, setLoadedImages] = useState({});
  const [activeTab, setActiveTab] = useState('Painting');

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = {};
      for (const path in images) {
        const img = await images[path]();
        importedImages[path.split('/').pop()] = img.default;
      }
      setLoadedImages(importedImages);
    };
    loadImages();
  }, []);

   const items = {
    Arts: [
            { id: 1, name: 'Art Work', price: 'N10,000', img: 'art1.jpg' },
            { id: 2, name: 'Art Work', price: 'N10,000', img: 'art2.jpg' },
            { id: 3, name: 'Art Work', price: 'N10,000', img: 'art3.jpg' },
            { id: 4, name: 'Art Work', price: 'N10,000', img: 'art4.jpg' },
            { id: 5, name: 'Art Work', price: 'N10,000', img: 'art5.jpg' },
            { id: 6, name: 'Art Work', price: 'N10,000', img: 'art6.jpg' },
            { id: 7, name: 'Art Work', price: 'N10,000', img: 'art7.jpg' },
        ],
       
        'Bag Making': [
            { id: 1, name: 'ankara bag', price: 'N15,000', img: 'bagmaking1.jpg'},
            { id: 2, name: 'ankara bag', price: 'N15,000', img: 'bagmaking2.jpg'},
            { id: 3, name: 'ankara bag', price: 'N15,000', img: 'bagmaking3.jpg'},
            { id: 4, name: 'ankara bag', price: 'N15,000', img: 'bagmaking4.jpg'},
            { id: 5, name: 'ankara bag', price: 'N15,000', img: 'bagmaking5.jpg'},
            { id: 6, name: 'ankara bag', price: 'N15,000', img: 'bagmaking6.jpg'},
           ],
       
       'Bead Making': [
            { id: 1, name: 'Bead', price: 'N7,000', img: 'beadmaking1.jpg'},
            { id: 2, name: 'Bead', price: 'N7,000', img: 'beadmaking2.jpg'},
            { id: 3, name: 'Bead', price: 'N7,000', img: 'beadmaking3.jpg'},
            { id: 4, name: 'Bead', price: 'N7,000', img: 'beadmaking4.jpg'},
            { id: 5, name: 'Bead', price: 'N7,000', img: 'beadmaking5.jpg'},
        ],
       
        Bracelet: [
            { id: 1, name: 'Bracelet', price: 'N5,000', img: 'bracelet1.jpg'},
            { id: 2, name: 'Bracelet', price: 'N5,000', img: 'bracelet2.jpg'},
            { id: 3, name: 'Bracelet', price: 'N5,000', img: 'bracelet3.jpg'},
            { id: 4, name: 'Bracelet', price: 'N5,000', img: 'bracelet4.jpg'},
        ],
        Crafts: [
            { id: 1, name: 'Crafts', price: 'N25,000', img: 'craft1.jpg'},
            { id: 2, name: 'Crafts', price: 'N25,000', img: 'craft2.jpg'},
            { id: 3, name: 'Crafts', price: 'N25,000', img: 'craft3.png'},
            { id: 4, name: 'Crafts', price: 'N25,000', img: 'craft4.png'},
            { id: 5, name: 'Crafts', price: 'N25,000', img: 'craft5.png'},
            { id: 6, name: 'Crafts', price: 'N25,000', img: 'craft6.png'},
            { id: 7, name: 'Crafts', price: 'N25,000', img: 'craft7.png'},
            { id: 8, name: 'Crafts', price: 'N25,000', img: 'crat8.png'},
        ],
    
        'Fashion Design': [
            { id: 1, name: 'Gown', price: 'N60,000', img: 'fashion1.jpg'},
            { id: 2, name: 'Gown', price: 'N60,000', img: 'fashion2.jpg'},
            { id: 3, name: 'Gown', price: 'N60,000', img: 'fashion3.jpg'},
            { id: 4, name: 'Gown', price: 'N60,000', img: 'fashion4.jpg'},
            { id: 5, name: 'Gown', price: 'N60,000', img: 'fashion5.jpg'},
        ],
        Footwear: [
        { id: 1, name: 'Slippers', price: 'N12,000', img: 'footware1.jpg'},
        { id: 2, name: 'Slippers', price: 'N12,000', img: 'footware2.jpg'},
        { id: 3, name: 'Slippers', price: 'N12,000', img: 'footware3.jpg'},
        { id: 4, name: 'Slippers', price: 'N12,000', img: 'footware4.jpg'},
        { id: 5, name: 'Slippers', price: 'N12,000', img: 'footware5.jpg'},
       ],

       Paintings: [
            { id: 1, name: 'Paint', price: 'N32,000', img: 'painting1.jpg'},
            { id: 2, name: 'Paint', price: 'N32,000', img: 'painting2.jpg'},
            { id: 3, name: 'Paint', price: 'N32,000', img: 'painting3.jpg'},
            { id: 4, name: 'Paint', price: 'N32,000', img: 'painting4.jpg'},
            { id: 5, name: 'Paint', price: 'N32,000', img: 'painting5.jpg'},
            { id: 6, name: 'Paint', price: 'N32,000', img: 'painting6.jpg'},
        ],
    };

  return (
    <div id='marketplace' className="p-8 bg-yellow-100 ">
      <h2 className="text-3xl font-bold mb-4 text-center">Shop from Talented Young Creators</h2>
      <p className='text-center mb-12 italic'>Explore unique items created by young talents</p>

      <div className=" flex justify-center space-x-4 mb-6">
     
        {Object.keys(items).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 h-14 text-gray-800 ${activeTab === category ? 'bg-orange-600' : 'bg-orange-600 hover:bg-orange-700'} rounded`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Items for the active tab */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
        
        {items[activeTab] && items[activeTab].map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg w-full h-100 overflow-hidden">
            <img src={loadedImages[item.img]} alt={item.name} className="w-full h-80 object-fill rounded-md" />
            <h3 className="text-lg font-bold mt-4">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
                <Link
                  to='/home'
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                >
                  Back to MarketList
                </Link>
              </div>
    </div>
  );
};


export default FullMarketplace;
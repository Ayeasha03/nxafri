import React from 'react';
import { Link } from 'react-router-dom';

function Talent() {
  const talents = [
    { id: 1, name: 'Singer', skill: 'Showcasing beautiful voices across the continent.', image: 'https://media.istockphoto.com/id/488313722/photo/group-of-school-children-singing-in-choir-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=fUBJkQjGzm2pqe_3hB1fLFOENc7kvs68rCnODSEf-ac=' },
    { id: 2, name: 'Fashion Designer', skill: 'Crafting unique African-inspired outfits.', image: 'https://media.istockphoto.com/id/1282682102/photo/smiling-little-girl-working-at-the-sewing-machine.webp?a=1&b=1&s=612x612&w=0&k=20&c=4AUpOw7FTDdvV11QG1O6MdKJ7ObrUYE7upifYeLDmWQ=' },
    { id: 3, name: 'Dancer', skill: 'Explore the rhythmic world of African dance moves.', image: 'https://media.istockphoto.com/id/1271762813/photo/happy-tweens-practicing-hip-hop-in-dance-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=nIUJ7li523s6yRzZeC111978vC9RhrvboBd13BmvJf0=' },
    { 
      id: 4, 
      name: 'Crafting', 
      skill: 'Unleashing creativity with African arts and crafts.', 
      image: 'https://media.istockphoto.com/id/1386022527/photo/a-close-up-of-a-schoolboy-who-made-an-easter-card-in-the-form-of-a-rabbit-easter-crafts-craft.jpg?s=612x612&w=0&k=20&c=okrjfGn6XQRyxePSR5Oo5mhybGMvyEE0Br3lF8RhI08=' 
    },
    { 
      id: 5, 
      name: 'Coding', 
      skill: 'The future of African tech creators is here.', 
      image: 'https://media.istockphoto.com/id/1254050848/photo/smart-schoolboy-uses-laptop-to-program-software-for-robotics-engineering-class-elementary.webp?a=1&b=1&s=612x612&w=0&k=20&c=P8YIFsPddkF4gjP0KSqL7jEfUu061heOpB0pRprrJ3g=' 
    },
    { 
      id: 6, 
      name: 'Painting', 
      skill: 'Showcasing vibrant colors and culture on canvas.', 
      image: 'https://media.istockphoto.com/id/1349262136/photo/cute-little-girl-finger-painting-with-various-colors.jpg?s=612x612&w=0&k=20&c=JBjN0td9JuGchTxto4l2KAofwGmFjorVGqmrBNfptuc=' 
    },
  ];

  return (
    <section className="py-12 bg-gray-100" id="talent">
    <div className=" px-4 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Talents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {talents.map(talent => (
          <div key={talent.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={talent.image} alt={talent.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold">{talent.name}</h2>
              <p className="text-gray-800">{talent.skill}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/full-discover-talent" className='bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300' >See More</Link>
      </div>
    </div>
    </section>
  );
};

export default Talent;
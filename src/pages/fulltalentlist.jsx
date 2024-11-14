import { useState} from 'react';
import { Link } from 'react-router-dom';

const talents = [
  { 
    id: 1, 
    name: 'Dancing', 
    description: 'Explore the rhythmic world of African dance moves.', 
    image: 'https://media.istockphoto.com/id/1271762813/photo/happy-tweens-practicing-hip-hop-in-dance-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=nIUJ7li523s6yRzZeC111978vC9RhrvboBd13BmvJf0=' 
  },
  { 
    id: 2, 
    name: 'Singing', 
    description: 'Showcasing beautiful voices across the continent.', 
    image: 'https://media.istockphoto.com/id/488313722/photo/group-of-school-children-singing-in-choir-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=fUBJkQjGzm2pqe_3hB1fLFOENc7kvs68rCnODSEf-ac=' 
  },
  { 
    id: 3, 
    name: 'Fashion Designing', 
    description: 'Crafting unique African-inspired outfits.', 
    image: 'https://media.istockphoto.com/id/1282682102/photo/smiling-little-girl-working-at-the-sewing-machine.webp?a=1&b=1&s=612x612&w=0&k=20&c=4AUpOw7FTDdvV11QG1O6MdKJ7ObrUYE7upifYeLDmWQ=' 
  },
  { 
    id: 4, 
    name: 'Crafting', 
    description: 'Unleashing creativity with African arts and crafts.', 
    image: 'https://media.istockphoto.com/id/1386022527/photo/a-close-up-of-a-schoolboy-who-made-an-easter-card-in-the-form-of-a-rabbit-easter-crafts-craft.jpg?s=612x612&w=0&k=20&c=okrjfGn6XQRyxePSR5Oo5mhybGMvyEE0Br3lF8RhI08=' 
  },
  { 
    id: 5, 
    name: 'Coding', 
    description: 'The future of African tech creators is here.', 
    image: 'https://media.istockphoto.com/id/1254050848/photo/smart-schoolboy-uses-laptop-to-program-software-for-robotics-engineering-class-elementary.webp?a=1&b=1&s=612x612&w=0&k=20&c=P8YIFsPddkF4gjP0KSqL7jEfUu061heOpB0pRprrJ3g=' 
  },
  { 
    id: 6, 
    name: 'Painting', 
    description: 'Showcasing vibrant colors and culture on canvas.', 
    image: 'https://media.istockphoto.com/id/1349262136/photo/cute-little-girl-finger-painting-with-various-colors.jpg?s=612x612&w=0&k=20&c=JBjN0td9JuGchTxto4l2KAofwGmFjorVGqmrBNfptuc=' 
  },
  { 
    id: 7, 
    name: 'Photography', 
    description: 'Capturing the beauty of African landscapes and people.', 
    image: 'https://media.istockphoto.com/id/1478410315/photo/photography-digital-camera-and-happy-woman-check-photo-results-memory-picture-or-tokyo.webp?a=1&b=1&s=612x612&w=0&k=20&c=BTKKvbPwmQE8OkZ8BNwk6qOuY3rEVlXbuPDaX445T48=' 
  },
  { 
    id: 8, 
    name: 'Acting', 
    description: 'Showcasing talent in film and theater from across Africa.', 
    image: 'https://media.istockphoto.com/id/2012470289/photo/group-of-kids-performing-on-stage.webp?a=1&b=1&s=612x612&w=0&k=20&c=SCcpzUZ164jInm-Kb6qe1jwNJgLDxnyK1nliMqvB_hc=' 
  },
  { 
    id: 9, 
    name: 'Writing', 
    description: 'Empowering African writers to share their stories with the world.', 
    image: 'https://media.istockphoto.com/id/1080259016/photo/writing-in-notebook-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=4FgqLJC4joZnkH27TCXTeb3DRmtJ07e4CNalxXPrq_w=' 
  },
  { 
    id: 10, 
    name: 'Sports', 
    description: 'Celebrating athletic prowess in African sports.', 
    image: 'https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwc3BvcnRpbmd8ZW58MHx8MHx8fDA%3D' 
  },
  { 
    id: 11, 
    name: 'Comedy', 
    description: 'Bringing laughter and joy through African comedic talent.', 
    image: 'https://media.istockphoto.com/id/1316581169/photo/stage-with-microphone-and-stool-with-red-neon-lamp-with-the-word-comedy-space-for-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=cBfRqbEd_UooPVxhjTNJYFk_W6buS4X8NWQE-mAi38I=' 
  },
  { 
    id: 12, 
    name: 'Graphic Design', 
    description: 'Creating visually stunning designs inspired by African culture.', 
    image: 'https://plus.unsplash.com/premium_photo-1661284886711-4eaee4fa7771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D' 
  },
];

function FullTalents() {
    return (
        <section className="py-12 bg-gray-100" id="talent">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Discover Talents</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {talents.map(talent => (
                <div key={talent.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={talent.image} alt={talent.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{talent.name}</h3>
                    <p className="text-gray-800">{talent.description}</p>
                  </div>
                </div>
              ))}
            </div>
        
           
              <div className="flex justify-center mt-8">
                <Link
                  to='/home'
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                >
                  Back to Talent List
                </Link>
              </div>
              
            
            
          </div>
          
        </section>
      );
    }
    
export default FullTalents;
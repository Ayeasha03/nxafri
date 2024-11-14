import { useState, useEffect} from 'react'

const events = [
  {
    title: 'Talent Show 2024',
    description: 'Don\'t miss out on our biggest talent show of the year!',
    imageUrl: 'https://media.istockphoto.com/id/1667843171/photo/girl-going-back-to-her-seat-after-performance-in-a-music-contest.webp?a=1&b=1&s=612x612&w=0&k=20&c=UXOX-Xtgs8d_G1bCax4Kt-AO56-R1fstdIbeTY2hG6Y=',
    buttonText: 'Learn More',
  },
  {
    title: 'Art Exhibition',
    description: 'Explore beautiful artwork by emerging talents.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661859228809-19c901979bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwZXhoaWJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    buttonText: 'Register Now',
  },
  {
    title: 'Dance Competition',
    description: 'Showcase your dance moves and win amazing prizes.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1721755938933-3a71c7b3b728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGFuY2UlMjBjb21wZXRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    buttonText: 'Register Now',
  },
];

const moreEvents = [
    {
      title: 'Fashion Showcases',
      description: 'Highlight young fashion designers showcasing their latest collections.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1724017205255-153f1374cdd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMHNob3djYXNlJTIwZm9yJTIwYWZyaWNhbnN8ZW58MHx8MHx8fDA%3D',
      date: 'Dec 15, 2024',
    },
    {
      title: 'Art Exhibitions',
      description: 'Feature talented young artists displaying their artwork.',
      imageUrl: 'https://media.istockphoto.com/id/1227602718/photo/exhibition.webp?a=1&b=1&s=612x612&w=0&k=20&c=HYvcfCoc7Bx9pJ4wVlbMZevrvgyrO5DUDh_uUYTtlEM=',  date: 'Nov 20, 2024'
    },
    {
      title: 'Music Performances',
      description: 'Live performances by up-and-coming musicians.',
      imageUrl: 'https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwcGVyZm9ybWFuY2VzfGVufDB8fDB8fHww',  date: 'Jan 5, 2025'
    },
    {
      title: 'Dance Competitions',
      description: 'Spotlight young dancers from different African regions.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1721755770882-50322e34ec1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhbmNlJTIwY29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D',  date: 'Dec 24, 2024'
    },
    {
      title: 'Cultural Festivals',
      description: 'Traditional and modern African culture from various regions.',
      imageUrl: 'https://media.istockphoto.com/id/862305196/photo/afro-man-making-a-wish-with-the-colorful-religious-brazilian-ribbons.webp?a=1&b=1&s=612x612&w=0&k=20&c=2cGVBPI3HtnuSKNmz0b55SeetOHIVH-EOdKCyckxfZU=',  date: 'Jan 10, 2025'
    },
    {
      title: 'Theater and Drama',
      description: 'Young actors performing modern and traditional African plays.',
      imageUrl: 'https://media.istockphoto.com/id/1890144615/photo/actresses-singing-in-the-theater-stage.webp?a=1&b=1&s=612x612&w=0&k=20&c=JxiPYxcIr85OdqtyijChgNpE1Bd3QDsiJd-W0lnopt0=',  date: 'Feb 12, 2025'
    },
    {
      title: 'Tech Innovators Exhibition',
      description: 'Innovative tech projects created by young African tech enthusiasts.',
      imageUrl: 'https://media.istockphoto.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.webp?a=1&b=1&s=612x612&w=0&k=20&c=2fB4km8-W3elF6qr9pUhV8nDwARZLLiWorjnjE5oq-Y=',  date: 'March 18, 2025'
    },
    {
      title: 'Poetry Slam',
      description: 'Young poets sharing their stories through spoken word.',
      imageUrl: 'https://media.istockphoto.com/id/1198397706/photo/library-and-text-words-have-power.webp?a=1&b=1&s=612x612&w=0&k=20&c=qBlDUAgCKngBkjrZ3pXumqTqf7cAUaBsuF1OPbq6zz4=',  date: 'March 21, 2025'
    },
    {
      title: 'Cooking Competitions',
      description: 'Up-and-coming chefs preparing traditional African dishes.',
      imageUrl: 'https://media.istockphoto.com/id/1426348124/photo/chef-analyzing-food-prepared-by-students-during-cooking-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=k0hR3Sxr9KY3gpm34aJp1sORg8TUhBT8n59lwNHCDMI=',  date: 'April 5, 2025'
    },
    {
      title: 'Photography Exhibits',
      description: 'Photography contests showcasing the best African talent.',
      imageUrl: 'https://media.istockphoto.com/id/171582037/photo/empty-form-in-art-museum.webp?a=1&b=1&s=612x612&w=0&k=20&c=Juzt7pLwTfv7A7xtuGnLwlMDaWSBPs-vp44W8_uy24I=',  date: 'May 1, 2025'
    },
    {
      title: 'Film Screening',
      description: 'Young African filmmakers showing their short films and documentaries.',
      imageUrl: 'https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlsbSUyMHNjcmVlbmluZ3xlbnwwfHwwfHx8MA%3D%3D',  date: 'June 12, 2025'
    },
    {
      title: 'Talent Hunt',
      description: 'A talent show covering various forms of creative expression including music, dance, and drama.',
      imageUrl: 'https://media.istockphoto.com/id/143917890/photo/retro-game-show.webp?a=1&b=1&s=612x612&w=0&k=20&c=apYwgI0LnA6_x6-cKFkCLNqoytp34g2glvmQaVddQAo=',  date: 'July 18, 2025'
    },
    {
      title: 'Workshops and Masterclasses',
      description: 'Interactive sessions with professionals in various industries like fashion, music, and tech.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1705407454972-21336132b341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtzaG9wJTIwYW5kJTIwbWFzdGVyY2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',  date: 'Aug 24, 2025'
    },
    {
      title: 'Charity Concerts',
      description: 'Fundraising events with performances by young African musicians.',
      imageUrl: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eSUyMGNvbmNlcnRzfGVufDB8fDB8fHww',  date: 'Sept 17, 2025'
    },
  ];
  
  function Event() {
    return (
      <section className="bg-blue-100 py-12" id='event'>
        {/* Featured Event */}
        <div className="container mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img src={events[0].imageUrl} alt={events[0].title} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
              <h2 className="text-3xl font-bold text-gray-800">{events[0].title}</h2>
              <p className="mt-4 text-gray-900">{events[0].description}</p>
              <button className="mt-6 px-6 py-2 bg-red-400 text-gray-900 rounded hover:bg-red-500">{events[0].buttonText}</button>
            </div>
          </div>
        </div>
  
        {/* Alternating Event Cards */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.slice(1).map((event, index) => (
            <div key={index} className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} items-center`}>
              <div className="w-1/2">
                <img src={event.imageUrl} alt={event.title} className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="w-1/2 px-6">
                <h3 className="text-2xl font-semibold text-gray-900">{event.title}</h3>
                <p className="mt-4 text-gray-700">{event.description}</p>
                <button className="mt-4 px-4 py-2 bg-red-400 text-gray-900 rounded hover:bg-red-500">{event.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Carousel for More Events */}
        <div className="container mx-auto px-6 mt-12 ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">More Events</h3>
          <div className="flex overflow-x-auto space-x-6 overflow-y-auto h-80" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {moreEvents.map((event, index) => (
              <div key={index} className="min-w-[200px]">
                <div className="bg-gray-100 rounded-lg shadow-lg p-4 h-64">
                  <img src={event.imageUrl} alt={event.title} className="w-full h-32 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h4 className="text-lg font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-700 ">{event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Event;

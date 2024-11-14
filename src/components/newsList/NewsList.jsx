import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    // Simulate a successful subscription
    if (email) {
      setSuccessMessage('Thank you for subscribing! Check your inbox for updates.');
      setEmail(''); // Clear the input field
    }
  };

  return (
    <section className="bg-purple-100 py-10 px5">
      <div className='mx-auto text-center max-w-xl'>
      <h2 className="text-2xl font-bold mb-5 text-gray-800">Subscribe to Our Newsletter</h2>
      <p className="mb-8 text-gray-600 ">Get the latest updates on new talents, events, and exclusive offers!</p>
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-center items-center'>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-2/3  border-2 focus:outline-none focus:border-blue-500 mb-4 sm:mb-0 sm:mr-4 border-gray-300 p-2 rounded-md  md:w-1/2 "
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 h-10  rounded-md font-semibold hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
      {successMessage && (
        <div className="mt-2 text-green-600">{successMessage}</div>
      )}
      </div>
    </section>
  );
};

export default Newsletter;


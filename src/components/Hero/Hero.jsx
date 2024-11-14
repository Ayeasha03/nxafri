import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return(
<div id='hero' className="bg-cover bg-center h-screen flex flex-col p-16"  style={{ backgroundImage: "url('https://media.istockphoto.com/id/1454153088/photo/teacher-explaining-to-children-how-make-recycled-toy-robot-with-plastic-packages.jpg?s=612x612&w=0&k=20&c=IyjNRjr4I95AIZamlQTNzmtrimcU8SwJYZLHsqkvfEY=')"}}>
    <div className='absolute top-16 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white'>
        <h1 className='text-5xl font-bold mb-4'>Welcome to NextGen Africa</h1>
        <p className='text-lg mb-6'>Showcasing tomorrow's talent today!</p>
        <Link to='talent'><a href='#get-started' className='bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg'>Get Started</a></Link>
    </div>
</div>
    )
}

export default Hero;
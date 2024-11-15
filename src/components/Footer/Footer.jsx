import  { useState } from 'react';
import Logo from '/src/assets/images/next.jpg';
import PhoneIcon from '/src/assets/images/phone.png';
import EnvelopeIcon from '/src/assets/images/envelope.png';
import LocationMarkerIcon from '/src/assets/images/location.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
   
    return(
        <footer id='footer' className='bg-gray-900 text-gray-300 py-10 px-18'>
        <div className="max-w-7xl gap-8 mx-auto   grid grid-cols-1 px-6">
            <div className="flex space-x-28 sm:block ">
              <div className='w-64 pl-10'>
                <img src={Logo} alt="logo" className="h-20 w-20 rounded-full mb-3" />
                <h3 className='font-semibold text-lg'>NextGen Africa: Talent unleashed</h3>
                <p className='mt-2 text-sm'>Showcasing tomorrow's talent today</p>
                </div>
                <div className=''>
                    <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
                <ul className='space-y-2 pl-4' >
                        <li><a href="#hero" className='hover:text-underline'>Home</a></li>
                        <li><a href="#talent" className='hover:text-underline'>Talents</a></li>
                        <li><a href="#marketplace" className='hover:text-underline'>Marketplace</a></li>
                        <li><a href="#event" className='hover:text-underline'  >Event</a></li>
                        <li><a href="#footer" className='hover:text-underline'></a>Contact</li>
                    </ul>
                </div>


                <div className="ml-20">
      <h4 className="text-lg font-semibold mb-4 pl-12">Contact Us</h4>
      <p className="mb-2 flex items-center">
        <img src={PhoneIcon} className="h-5 w-5 mr-2 invert" /> +123-456-7890
      </p>
      <p className="mb-2 flex items-center">
        <img src={EnvelopeIcon}  className="h-5 w-5 mr-2 invert" /> contact@nextgenafrica.com
      </p>
      <p className="flex items-center">
        <img src={LocationMarkerIcon} className="h-5 w-5 mr-2 invert" /> 123 Talent St, Lagos, Nigeria
      </p>
    </div>



<div className="col-span-1">
      <h4 className="text-lg font-semibold mb-6 pl-12">Follow Us</h4>
      <div className="flex space-x-4">
        <a href="#" target="_blank"><FacebookIcon /></a>
                <a href="#" target="_blank"><XIcon /></a>
                <a href="#" target="_blank"><InstagramIcon /></a>
                <a href="#" target="_blank"><LinkedInIcon /></a>
                <a href="#" target="_blank"><GitHubIcon /></a>

      </div>
    </div>
  </div>
            
        </div>

        <div className='text-center mt-8 border-t border-gray-700 pt-5'>
            <p>&copy; {new Date ().getFullYear()} NextGen Africa: Talent Unleashed. All rignts reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
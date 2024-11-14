import Logo from '/src/assets/images/next.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Header({ isLoggedIn, setIsLoggedIn, wishlistCount, cartCount, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

  return (
    <header className='bg-blue-900 text-white p-2 flex justify-between items-center px-16 sticky top-0 z-50 sm:px-16'>
      <div className='flex space-x-4 items-center'>
        <img className='h-12 w-12 rounded-full sm:h-12 sm:w-12' src={Logo} alt="Logo" />
        <div className='hidden sm:block'>
          <h1 className='text-lg font-bold'>NextGen Africa: Talent Unleashed</h1>
          <p className='text-xs italic'>Showcasing tomorrow's talent today</p>
        </div>
      </div>
      <div className='block sm:hidden'>
      <MenuIcon  className='cursor-pointer' onClick={toggleMenu}/>
      </div>
      {isMenuOpen && (

      <div className='top-14 absolute left-0 x-full bg-blue-900 sm:hidden'>
        <ul className='flex space-x-6 font-medium mr-10'>
          <li><a href="#hero" className='hover:text-yellow-400'>Home</a></li>
          <li><a href="#talent" className='hover:text-yellow-400'>Talents</a></li>
          <li><a href="#marketplace" className='hover:text-yellow-400'>Marketplace</a></li>
          <li><a href="#event" className='hover:text-yellow-400'>Event</a></li>
        </ul>
      </div>
      ) }

<nav className='hidden sm:block'>
        <ul className='flex space-x-6 font-medium mr-10'>
          <li><a href="#hero" className='hover:text-yellow-400'>Home</a></li>
          <li><a href="#talent" className='hover:text-yellow-400'>Talents</a></li>
          <li><a href="#marketplace" className='hover:text-yellow-400'>Marketplace</a></li>
          <li><a href="#event" className='hover:text-yellow-400'>Event</a></li>
        </ul>
      </nav>
      <div className='flex items-center space-x-6'>
        {showSearch && (
          <input
            type="text"
            placeholder='Search'
            value={searchTerm}
            onChange={handleSearchChange}
            className='px-2 py-1 rounded bg-gray-600 text-white'
          />
        )}
        <SearchIcon className='cursor-pointer' onClick={() => setShowSearch(!showSearch)} />
        <div className="relative">
          <FavoriteIcon className='cursor-pointer' />
          {wishlistCount > 0 && (
            <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs'>
              {wishlistCount}
            </span>
          )}
        </div>
        <div className="relative">
          <ShoppingCartIcon className='cursor-pointer' />
          {cartCount > 0 && (
            <span className='absolute top-0 right-0 bg-yellow-500 text-white rounded-full px-2 py-1 text-xs'>
              {cartCount}
            </span>
          )}
        </div>
        <button
          className='bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg'
          onClick={handleLoginClick}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </header>
  );
}

export default Header;


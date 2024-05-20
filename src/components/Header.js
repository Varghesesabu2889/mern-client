import React, { useState, useEffect } from 'react';
import logo from '../Assets/logoss.png';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { useSelector, useDispatch } from 'react-redux';
import { loginRedux, logoutRedux } from '../redux/userSlice';
import { toast } from 'react-hot-toast';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      dispatch(loginRedux(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = (e) => {
    dispatch(logoutRedux());
    sessionStorage.removeItem('user'); // Remove user data from sessionStorage on logout
    toast.success('Logout Successfully', {});
    window.location.href = '/';
  };

  const cartItemNumber = useSelector((state) => state.tour.cartItem || []);

  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-5 z-50'>
      <div className='flex items-center h-full justify-between'>
        <Link to={''}>
          <div className='h-12'>
            <img src={logo} className='h-full' alt='Logo' />
          </div>
        </Link>
        <div className='flex items-center gap-5 md:gap-7 text-bold'>
          <nav className='gap-5 md:gap-7 text-bold md:text-lg hidden md:flex'>
            <Link className='text' to={''}>Home</Link>
            <Link className='text' to={'Tours'}>Tours</Link>
            <Link className='text' to={'gallery'}>Gallery</Link>
          </nav>
          <div className='text-xl relative'>
            <Link to={'trip'} className='whitespace-nowrap cursor-pointer px-2'>
              Booking Details
            </Link>
            &nbsp; &nbsp;
            <Link className='text' to={'about'}>About Us</Link>
          </div>
          <div className='text-xl' onClick={handleShowMenu}>
            <div className='text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop'>
              {userData.image ? (
                <img src={userData.image} className='h-full w-full' alt='User Profile' />
              ) : (
                <HiOutlineUserCircle className='text' />
              )}
            </div>
            {showMenu && (
              <div className='absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center'>
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link to={'addTours'} className='whitespace-nowrap cursor-pointer px-2'>
                    Add Tours
                  </Link>
                )}
                {userData.image ? (
                  <p className='cursor-pointer text-black px-2 ' onClick={handleLogout}>
                    Logout
                  </p>
                ) : (
                  <Link to={'login'} className='whitespace-nowrap cursor-pointer px-2'>
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Brand from '../assets/img/Header/Brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faCartShopping, faClose, faUser } from '@fortawesome/free-solid-svg-icons'
import { ShopContext } from '../Context/ShopContext'


const Navbar = () => {

    let [isMenu, setIsMenu] = useState(false);

    let toggleMenu = () => {
        setIsMenu(!isMenu);
    };

    // Search - Bar

    const { showSearch, setShowSearch, cartCount } = useContext(ShopContext);



    return (
        <>
            <nav className='flex justify-between items-center px-4 text-white' style={{ height: '80px', backgroundColor: '#699C47' }}>

                {/* Logo */}

                <NavLink to='/' className='w-16 cursor-pointer'>
                    <img src={Brand} alt='...' />
                </NavLink>

                {/* Navlinks */}

                <ul className='hidden md:block md:flex gap-5 text-md font-medium'>
                    <NavLink to='/' className='flex flex-col items-center gap-1'>
                        <p>Home</p>
                        <hr className='w-3/4 border-none h-[1.5px] bg-white hidden' />
                    </NavLink>
                    <NavLink to='/shop' className='flex flex-col items-center gap-1'>
                        <p>Shop</p>
                        <hr className='w-3/4 border-none h-[1.5px] bg-white hidden' />
                    </NavLink>
                    <NavLink to='/about' className='flex flex-col items-center gap-1'>
                        <p>About Us</p>
                        <hr className='w-3/4 border-none h-[1.5px] bg-white hidden' />
                    </NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                        <p>Contact Us</p>
                        <hr className='w-3/4 border-none h-[1.5px] bg-white hidden' />
                    </NavLink>
                </ul>

                {/* Login and Cart */}

                <div className='flex items-center gap-2'>
                    <Link to='/shop'>
                        <FontAwesomeIcon onClick={() => setShowSearch(!showSearch)} className='px-2 font-medium cursor-pointer' icon={faSearch} />
                    </Link>
                    <div className='group relative cursor-pointer'>
                        <Link to='/login'>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </div>

                    <Link to='/cart' className='relative'>
                        <FontAwesomeIcon className='px-2' icon={faCartShopping} />
                        <p className='absolute top-[-4px] right-[-2px] text-[10px] w-4 text-center bg-orange-400 border text-white rounded-full'>{cartCount}</p>
                    </Link>

                    {/* Menu Icon */}

                    <FontAwesomeIcon className='md:hidden' icon={isMenu ? faClose : faBars} onClick={toggleMenu} />

                </div>

                {/* Menu for Small Devices */}

                <div className={`absolute right-0 bottom-0 overflow-hidden bg-white transition-all ${isMenu ? 'w-full' : 'w-0'}`} style={{ height: 'calc(100vh - 80px)' }}>
                    <div className='flex flex-col mt-6' style={{ color: '#699C47' }}>
                        <NavLink to='/' onClick={() => setIsMenu(false)} className='font-medium py-2 pl-6 border-b' >Home</NavLink>
                        <NavLink to='/shop' onClick={() => setIsMenu(false)} className='font-medium py-2 pl-6 border-b' >Shop</NavLink>
                        <NavLink to='/about' onClick={() => setIsMenu(false)} className='font-medium py-2 pl-6 border-b' >About Us</NavLink>
                        <NavLink to='/contact' onClick={() => setIsMenu(false)} className='font-medium py-2 pl-6 border-b' >Contact Us</NavLink>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar

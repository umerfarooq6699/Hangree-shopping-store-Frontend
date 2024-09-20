import React, { useEffect, useState } from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [user, setUser] = useState(false);

    const handleUser = () => {
        setUser(!user);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (user && !e.target.closest('.user-dropdown')) {
                setUser(false);
            }
        };
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [user]);

    return (
        <>
            <div className='w-full h-[80px] flex justify-between items-center bg-[#FFFFFF] px-4 md:px-[60px]'>

                <div className='w-[170px] cursor-pointer'>
                    <img src={logo} className='w-full h-full' alt="Logo" />
                </div>

                <div className='flex'>

                    {/* User dropdown */}
                    <div onClick={handleUser} className='cursor-pointer relative user-dropdown'>
                        <div className={`w-[80px] absolute top-7 -left-7 rounded border-2 border-[#F0B059] ${user ? "block" : "hidden"} bg-white  border border-blue-500`}>
                            <Link to="/signup">
                                <div className='px-1 py-[1px] hover:bg-[#F0B059] hover:text-white'>Signup</div>
                            </Link>
                            <Link to="/signin">
                                <div className='px-1 py-[1px] hover:bg-[#F0B059] hover:text-white'>Signin</div>
                            </Link>
                            <div className='px-1 py-[1px] hover:bg-[#F0B059] hover:text-white'>Logout</div>
                        </div>
                        <i className="fa-solid fa-user text-xl"></i>
                    </div>

                    {/* Cart icon */}
                    <div className='ml-5 relative cursor-pointer'>
                        <div className='w-[23px] h-[23px] absolute -top-[12px] left-[10px] rounded-full flex justify-center items-center bg-black text-white'>0</div>
                        <i className="fa-solid fa-cart-shopping text-xl"></i>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Navbar;

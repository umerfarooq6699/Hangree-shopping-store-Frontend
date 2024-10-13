import React, { useEffect, useState } from 'react';
import logo from "../Images/Men/Logo.png";
import { Link } from 'react-router-dom';
import { HiMiniBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { barsDispatch, cartNotificationEmpty, checkoutLogin, deleteProduct, inputQuantity, quantityDecrement, quantityIncrement } from '../Slices/Cart';
import { HiOutlineXMark } from "react-icons/hi2";
import emptycart from "../Images/Men/emptycart.avif"
import { FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {
    const [user, setUser] = useState(false);
    const dispatch = useDispatch()
    const [checkCart, setcheckCart] = useState(false)
    const { cartArray, notification } = useSelector(state => state.storeCart)
    const [token, settoken] = useState()

    const handleUser = () => {
        setUser(!user);
    };

    const handleLogout = () => {
        localStorage.removeItem("Token")
        localStorage.removeItem("User")
    }

    useEffect(() => {
        if(notification && notification.message){
            toast.error(notification.message,{
                position:"top-center",
                autoClose:2000
            })
        }
    }, [notification])

    useEffect(() => {
        settoken(localStorage.getItem("Token") || "")
    }, [token, handleLogout])

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

    useEffect(() => {
        if (checkCart) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [checkCart])

    const handleBars = () => {
        dispatch(barsDispatch())
    }

    useEffect(() => {
        if (checkCart) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [])


    const handleCart = () => {
        setcheckCart(!checkCart)
    }

    const handleDecrement = (name) => {
        dispatch(quantityDecrement(name))
    }

    const handleInput = (name, e) => {
        console.log(e.target.value)
        dispatch(inputQuantity({ Name: name, Value: e.target.value }))
    }

    const handleIncrement = (name) => {
        dispatch(quantityIncrement(name))
    }

    const handleOverlay = (event) => {
        if (event.target.classList.contains("overlay")) {
            setcheckCart(false)
        }
    }

    const handleCross = () => {
        setcheckCart(false)
    }

    const handleDelete = (index) => {
        dispatch(deleteProduct(index))
    }

    const handleCheckout = () => {
        console.log("working")
        dispatch(checkoutLogin(token))
        setTimeout(() => {
            dispatch(cartNotificationEmpty())
        }, 1500);
    }

    // console.log(token, "Token checkout")
    // console.log(notification.message, "notification cart")

    return (
        <>
        <div><ToastContainer /></div>
            <div className="w-full h-[80px] flex justify-between items-center px-4 md:px-[60px]">

                <div onClick={handleBars} className='block md:hidden'>
                    <HiMiniBars3 className='text-2xl cursor-pointer' />
                </div>

                <div className='w-[120px] md:w-[170px] cursor-pointer'>
                    <img src={logo} className='w-full h-full' alt="Logo" />
                </div>

                <div className='flex'>

                    

                    <div onClick={handleUser} className='cursor-pointer relative user-dropdown'>
                        <div className={`w-[100px] absolute top-9  -left-7 rounded z-10 p-1 border-2 border-[#F0B059] ${user ? "block" : "hidden"} bg-white`}>
                            <Link to="/signup">
                                <div className='px-1 py-[1px] hover:bg-[#F0B059] hover:text-white'>Signup</div>
                            </Link>
                            <Link to="/signin">
                                <div className='px-1 py-[1px] hover:bg-[#F0B059] hover:text-white'>Signin</div>
                            </Link>
                            <div onClick={handleLogout} className='px-1 py-[1px] hover:bg-[#F0B059] hover:text-white'>Logout</div>
                        </div>
                        <i className="fa-solid fa-user text-xl"></i>
                    </div>

                    {/* Cart icon */}
                    <div onClick={handleCart} className='ml-5 relative cursor-pointer'>
                        <div className='w-[23px] h-[23px] absolute -top-[12px] left-[10px] rounded-full flex justify-center items-center bg-black text-white'>{cartArray.length}</div>
                        <i className="fa-solid fa-cart-shopping text-xl"></i>
                    </div>

                    {/* --------------------------cart sidebar----------------------------- */}
                    <div onClick={handleOverlay} className={`overlay w-full h-screen cursor-crosshair ${checkCart ? "visible" : "invisible"} bg-[rgb(0,0,0,0.6)] fixed top-0 left-0 z-10`}>
                        <div className='w-[90%] md:w-[40%] lg:w-[30%] h-screen bg-white absolute top-0 right-0 cursor-auto'>
                            <div className='flex justify-between border-b border-[rgb(190,190,190)] p-5'>
                                <h1>CART</h1>
                                <div onClick={handleCross} className='cursor-pointer font-thin text-xl'><HiOutlineXMark /></div>
                            </div>

                            <div className='h-[90vh] overflow-y-scroll'>
                                {
                                    cartArray && cartArray.length > 0 ?
                                        <>
                                            <div className='overflow-hidden'>
                                                {
                                                    cartArray.map((ele, i) => {
                                                        return (
                                                            <>
                                                                <div className=' flex p-2'>

                                                                    <div className='w-[50%] md:w-[40%] flex justify-center items-center'>
                                                                        <div className=''>
                                                                            <img src={ele.images[0]} alt="" />
                                                                        </div>
                                                                    </div>

                                                                    <div className='ml-3'>
                                                                        <h1 className='text-[rgb(130,130,130)] mt-3'>{ele.name}</h1>
                                                                        <h1 className='text-[rgb(130,130,130)]'>{ele.color}</h1>
                                                                        <h1 className='text-[rgb(255,188,94)] font-[500]'>RS.{ele.discount}.00</h1>
                                                                        <h1 className='text-[rgb(130,130,130)]'>Size: {ele.size}</h1>
                                                                        <div className='flex'>
                                                                            <div className='flex mt-2'>
                                                                                <div onClick={() => handleDecrement(ele.name)} className='w-[35px] h-[35px] border border-[rgb(190,190,190)] text-[rgb(190,190,190)] flex justify-center items-center text-xl cursor-pointer'>-</div>
                                                                                <input onChange={(e) => handleInput(ele.name, e)} value={ele.quantity} type="text" className='w-[50px] text-center border border-[rgb(190,190,190)]' />
                                                                                <div onClick={() => handleIncrement(ele.name)} className='w-[35px] h-[35px] border border-[rgb(190,190,190)] text-[rgb(190,190,190)] flex justify-center items-center text-xl cursor-pointer'>+</div>
                                                                            </div>
                                                                            <div onClick={() => handleDelete(i)} className='ml-5 mt-[15px] cursor-pointer text-[rgb(243,79,79)]'><FaTrash /></div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='px-3 sticky mt-4 bottom-0 left-0 bg-white py-3'>
                                                <div onClick={handleCheckout} className='bg-[rgb(238,160,49)] hover:bg-[rgb(248,169,58)] rounded text-white cursor-pointer py-2 flex justify-center items-center'>
                                                    Checkout
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className=' p-9'>
                                                <div className=''>
                                                    <img src={emptycart} alt="" />
                                                </div>
                                                <h1 className='text-center text-[rgb(193,169,169)]'>Your cart is empty</h1>
                                            </div>
                                        </>
                                }
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;

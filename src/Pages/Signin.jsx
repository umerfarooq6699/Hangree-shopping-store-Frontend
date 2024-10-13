import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { emptyNotification, signin } from '../Slices/UserSlice';

const Signin = () => {
    const [obj, setobj] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()
    const { client, notification } = useSelector(state => state.Ecommerce)
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate()

    const handleInput = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setTimeout(() => {
            if(notification.success){
                if(client && client.role){
                  if (client.role === "admin") {
                      navigate("/dashboard")
                  } else {
                      navigate("/")
                  }
              }  
            }
        }, 1500);
    }, [notification])

    const handleSignin = (e) => {
        e.preventDefault()
        setTimeout(() => {
            dispatch(emptyNotification())
        }, 2000);
        if (!obj.email || !obj.password) {
            toast.error("All fields are required", {
                position: "top-center",
                autoClose: 1000
            })
        } else {
            dispatch(signin(obj))
        }

    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        if (notification?.success) {
            toast.success(notification.message, {
                position: "top-center",
                autoClose: 1000
            });
            setobj({
                email: "",
                password: ""
            })
        } else if (notification?.message) {
            toast.error(notification.message, {
                position: "top-center",
                autoClose: 1500
            });
        }
    }, [notification]);

    console.log(obj)
    console.log(notification, "notification")
    console.log(client, "client")
    return (
        <>
            <div><ToastContainer /></div>
            <section class="w-full h-scrern bg-gray-50 dark:bg-gray-900">
                <div class="h-screen flex flex-col items-center justify-center px-3 md:px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleSignin} class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input onChange={handleInput} value={obj.email} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <div style={{ position: "relative", width: "100%" }}>
                                        {/* Password input with dynamic type based on visibility */}
                                        <input
                                            onChange={handleInput}
                                            value={obj.password}
                                            type={passwordVisible ? "text" : "password"}  // Toggle between "text" and "password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            
                                        />
                                        {/* Button to toggle visibility */}
                                        <button
                                            onClick={togglePasswordVisibility}
                                            type="button"
                                            style={{
                                                position: "absolute",
                                                right: "10px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                            aria-label="Toggle password visibility"
                                        >
                                            {/* Eye icon based on the passwordVisible state */}
                                            {passwordVisible ? (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-10-7-10-7a13.1 13.1 0 013.948-5.651M9.878 9.878a3 3 0 004.243 4.243M15.121 15.121A3 3 0 109.88 9.88M12.029 2.757A10.055 10.055 0 0112 5c7 0 10 7 10 7a13.1 13.1 0 01-3.948 5.651M6.21 6.21a13.066 13.066 0 00-4.82 5.272m11.368-6.194l-9.93 9.93"></path>
                                                </svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5C8.318 4.5 5.2 6.675 2.458 10.251a11.948 11.948 0 000 3.498C5.2 17.325 8.318 19.5 12 19.5c3.682 0 6.8-2.175 9.542-5.751a11.948 11.948 0 000-3.498C18.8 6.675 15.682 4.5 12 4.5z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"></path>
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>


                                <Link to="/changepassword">
                                    <div className='text-end cursor-pointer text-gray-800 mt-3'>Change Password</div>
                                </Link>

                                <button type="submit" class="w-full text-white bg-[#F0B059] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="/signup">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin
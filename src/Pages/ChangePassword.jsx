import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePassword, emptyNotification } from '../Slices/UserSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
    const [obj, setobj] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    const [token, settoken] = useState()
    const dispatch = useDispatch()
    const { notification } = useSelector(state => state.Ecommerce)
    const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleInput = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        settoken(localStorage.getItem("Token") || "")
        if (notification && notification.message) {
            if (notification.status == "success") {
                toast.success(notification.message, {
                    position: "top-center",
                    autoClose: 1500
                })
            } else {
                toast.error(notification.message, {
                    position: "top-center",
                    autoClose: 1500
                })
            }
        }
    }, [notification])

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(obj)
        if (!obj.oldPassword || !obj.newPassword || !obj.confirmPassword) {
            toast.error("All fields are required", {
                position: "top-center",
                autoClose: 1500
            })
        } else {
            if (obj.newPassword !== obj.confirmPassword) {
                toast.error("Wrong confirm password", {
                    position: "top-center",
                    autoClose: 1500
                })
            } else {
                dispatch(changePassword({ token, obj }))
                setTimeout(() => {
                    dispatch(emptyNotification())
                }, 2000);
            }
        }
    }


    const toggleOldPasswordVisibility = () => {
        setOldPasswordVisible(!oldPasswordVisible);
    };


    const toggleNewPasswordVisibility = () => {
        setNewPasswordVisible(!newPasswordVisible);
    };


    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };


    console.log(token, "token ChangePassword")
    console.log(notification, "notification,changepassword")

    return (
        <>
            <div><ToastContainer /></div>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                        <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Change Password
                        </h2>
                        <form onSubmit={handleSubmit} class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                            <div>
                                {/* Old Password Field */}
                                <div style={{ position: "relative", width: "100%" }}>
                                    <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old Password</label>
                                    <input
                                        onChange={handleInput}
                                        value={obj.oldPassword}
                                        type={oldPasswordVisible ? "text" : "password"} // Toggles visibility
                                        name="oldPassword"
                                        id="oldPassword"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                            onClick={toggleOldPasswordVisibility}
                                            type="button"
                                            style={{
                                                position: "absolute",
                                                right: "10px",
                                                top: "70%",
                                                transform: "translateY(-50%)",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                            aria-label="Toggle password visibility"
                                        >
                                            {/* Eye icon based on the passwordVisible state */}
                                            {oldPasswordVisible ? (
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

                                {/* New Password Field */}
                                <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
                                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                    <input
                                        onChange={handleInput}
                                        value={obj.newPassword}
                                        type={newPasswordVisible ? "text" : "password"} // Toggles visibility
                                        name="newPassword"
                                        id="newPassword"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                    <button
                                            onClick={toggleNewPasswordVisibility}
                                            type="button"
                                            style={{
                                                position: "absolute",
                                                right: "10px",
                                                top: "70%",
                                                transform: "translateY(-50%)",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                            aria-label="Toggle password visibility"
                                        >
                                            {/* Eye icon based on the passwordVisible state */}
                                            {newPasswordVisible ? (
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

                                {/* Confirm Password Field */}
                                <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                    <input
                                        onChange={handleInput}
                                        value={obj.confirmPassword}
                                        type={confirmPasswordVisible ? "text" : "password"} // Toggles visibility
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                    <button
                                            onClick={toggleConfirmPasswordVisibility}
                                            type="button"
                                            style={{
                                                position: "absolute",
                                                right: "10px",
                                                top: "70%",
                                                transform: "translateY(-50%)",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                            aria-label="Toggle password visibility"
                                        >
                                            {/* Eye icon based on the passwordVisible state */}
                                            {confirmPasswordVisible ? (
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

                            <button type="submit" class="w-full text-white bg-[#F0B059] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
                        </form>
                    </div>
                </div >
            </section >
        </>
    )
}

export default ChangePassword
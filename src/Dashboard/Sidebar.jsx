import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addProductPage, backtohomePage, dashboardPage, productPage, userPage } from '../Slices/DashboardSlice'

const Sidebar = () => {
    const navigate = useNavigate()
    const { index } = useSelector(state => state.Dashboard)
    const dispatch = useDispatch()
    // console.log(index)

    const handleLogout = () => {
        localStorage.removeItem("Token")
        localStorage.removeItem("User")
        navigate("/signin")
    }

    // console.log(index, "index")

    return (
        <>
            <div className='w-full h-[91.9vh] bg-[rgb(53,53,58)] p-1'>

                <Link to="/dashboard">
                <div onClick={() => dispatch(dashboardPage(0))} className={`flex ${index === 0 ? "bg-[rgb(244,176,37)]" : ""} cursor-pointer px-5 py-2 mt-2`}>
                    <div className='text-white'>
                        <i class="text-xl fa-brands fa-codepen"></i>
                    </div>
                    <h1 className='text-white ml-2'>Dashboard</h1>
                </div>
                </Link>

                <Link to='/dashboardProducts'>
                <div onClick={() => dispatch(productPage(1))} className={`flex ${index === 1 ? "bg-[rgb(244,176,37)]" : ""} cursor-pointer px-5 py-2 mt-2`}>
                    <div className='text-white'>
                        <i class="text-xl fa-brands fa-dropbox"></i>
                    </div>
                    <h1 className='text-white ml-2'>AllProducts</h1>
                </div>
                </Link>

                <Link to='/dashboardUsers'>
                <div onClick={() => dispatch(userPage(2))} className={`flex ${index === 2 ? "bg-[rgb(244,176,37)]" : ""} cursor-pointer px-5 py-2 mt-2`}>
                    <div className='text-white'>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <h1 className='text-white ml-2'>User</h1>
                </div>


                </Link>
                <Link to='/addproduct'>
                <div onClick={() => dispatch(addProductPage(3))} className={`flex ${index === 3 ? "bg-[rgb(244,176,37)]" : ""} cursor-pointer px-5 py-2 mt-2`}>
                    <div className='text-white'>
                    <i class="fa-solid fa-plus"></i>
                    </div>
                    <h1 className='text-white ml-2'>AddProduct</h1>
                </div>
                </Link>


                {/* <Link to="/dashboardOrder"> */}
                {/* <div onClick={() => dispatch(orderPage(3))} className={`flex ${index === 3 ? "bg-[rgb(244,176,37)]" : ""} cursor-pointer px-5 py-2 mt-2`}>
                    <div className='text-white'>
                        <i class="text-xl fa-brands fa-first-order"></i>
                    </div>
                    <h1 className='text-white ml-2'>Order</h1>
                </div> */}
                {/* </Link> */}

                <Link to="/">
                <div onClick={() => dispatch(backtohomePage(4))} className={`flex ${index === 4 ? "bg-[rgb(244,176,37)]" : ""} px-5 py-2 mt-2 cursor-pointer`}>
                    <div className='text-white'>
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <h1 className='text-white ml-2'>Back to Home</h1>
                </div>
                </Link>


                <div className='flex px-5 py-2 mt-2'>
                    <div className='text-white'>
                        <i class="text-xl fa-solid fa-arrow-right-from-bracket"></i>
                    </div>
                    <h1 onClick={handleLogout} className='text-white ml-2 cursor-pointer'>LogOut</h1>
                </div>


            </div>
        </>
    )
}

export default Sidebar
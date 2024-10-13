import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';

const DashboardNavbar = () => {
    const [sidebar, setsidebar] = useState(false)

    const handleSidebar = () => {
        if (!sidebar) {
            setsidebar(true)
        } else {
            setsidebar(false)
        }
    }

    const handleOverlay = (event) => {
        if (event.target.classList.contains("overlay")) {
            setsidebar(false)
        }
    }
    return (
        <>
            <div className='w-full flex justify-between items-center bg-[rgb(244,176,37)] px-3 md:px-9 py-3'>
                <div onClick={handleSidebar} className='cursor-pointer block lg:hidden'>
                    <RxHamburgerMenu className='text-white text-3xl font-700]' />
                </div>
                <h1 className='text-white text-xl hidden lg:block'>Hangree Clothing</h1>
                <h1 className='text-white text-xl'>Admin</h1>
            </div>

            <div onClick={handleOverlay} className={`w-full h-full overlay lg:hidden bg-[rgba(0,0,0,0.55)] z-20 fixed ${sidebar ? "block" : "hidden"} z-10`}>
                <div className={`w-[60%] md:w-[30%] ${sidebar ? "left-0" : "sm:-left-[60%] md:-left-[30%]"} absolute top-0`}>
                    <Sidebar />
                </div>
            </div>

        </>
    )
}

export default DashboardNavbar
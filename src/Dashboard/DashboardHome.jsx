import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Dashboard/Sidebar'
import DashboardNavbar from './DashboardNavbar'
import { PiMoneyWavyFill } from "react-icons/pi";
import { ImUsers } from "react-icons/im";
import { AiOutlineProduct } from "react-icons/ai";
import chart1 from "../Images/Men/chart1.png"
import chart2 from "../Images/Men/chart2.png"
import chart3 from "../Images/Men/chart3.png"
import { getAllUsers, getCollection } from '../Slices/DashboardSlice'



const DashboardHome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {getUsersMsg,notification}=useSelector(state=>state.Dashboard)

  useEffect(() => {
    // dispatch(getDashboardData())
    dispatch(getCollection())
    dispatch(getAllUsers())
  }, [])

  //   useEffect(() => {
  //     // dispatch(dashboardPage(0))
  //     if (User?.role) {
  //       if (User.role === "user") {
  //         navigate("/")
  //       }
  //     }
  //   }, [User])


  //   console.log(User, "dashboard user")
  console.log(notification)
  console.log(getUsersMsg)

  return (
    <>
      <div className='w-full h-[100vh]'>
        <DashboardNavbar />
        <div className='w-full h-[89.5vh] grid grid-cols-5'>

          <div className='hidden lg:block'>
            <Sidebar />
          </div>

          <div className='h-auto col-span-5 lg:col-span-4 bg-[rgb(240,242,245)] px-2 md:px-4 py-2 scroll-auto overflow-y-auto '>
            <div className='grid grid-cols-1  md:grid-cols-3 topGrid gap-5 lg:mt-[40px]'>

              <div className='bg-white mt-5 lg:mt-0 px-4 py-5 rounded-xl relative'>
                <div className='bg-[rgb(48,48,53)] p-5 rounded-xl shadow-lg absolute -top-4 left-5 text-white'>
                  <PiMoneyWavyFill className='text-3xl' />
                </div>
                <h1 className='text-[rgb(123,130,154)] text-end'>Today's Money</h1>
                <h1 className='text-[rgb(52,71,103)] text-end font-[600] text-xl'>Rs.34000</h1>
                <h1 className='mt-9'><span className='text-[rgb(82,175,80)] font-[600]'>+55%</span> <span className='text-[rgb(123,130,154)]'>than last week</span></h1>
              </div>

              <div className='bg-white mt-5 lg:mt-0 px-4 py-5 rounded-xl relative'>
                <div className='bg-[rgb(231,55,116)] p-5 rounded-xl shadow-lg absolute -top-4 left-5 text-white'>
                  <ImUsers className='text-3xl' />
                </div>
                <h1 className='text-[rgb(123,130,154)] text-end'>Total Users</h1>
                <h1 className='text-[rgb(52,71,103)] text-end font-[600] text-xl'>{getUsersMsg?.data?.array?.length}</h1>
                <h1 className='mt-9'><span className='text-[rgb(82,175,80)] font-[600]'>+3%</span> <span className='text-[rgb(123,130,154)]'>than last month</span></h1>
              </div>

              <div className='bg-white mt-5 lg:mt-0 px-4 py-5 rounded-xl relative'>
                <div className='bg-[rgb(80,170,84)] p-5 rounded-xl shadow-lg absolute -top-4 left-5 text-white'>
                  <AiOutlineProduct className='text-3xl' />
                </div>
                <h1 className='text-[rgb(123,130,154)] text-end'>Total Products</h1>
                <h1 className='text-[rgb(52,71,103)] text-end font-[600] text-xl'>{notification?.data?.array?.length}</h1>
                <h1 className='mt-9'><span className='text-[rgb(82,175,80)] font-[600]'>+13%</span> <span className='text-[rgb(123,130,154)]'>than last month</span></h1>
              </div>

              <div className='bg-white mt-5 lg:mt-0 px-4 py-5 rounded-xl relative'>
                <div className='bg-[rgb(52,141,237)] p-5 rounded-xl shadow-lg absolute -top-4 left-5 text-white'>
                  <PiMoneyWavyFill className='text-3xl' />
                </div>
                <h1 className='text-[rgb(123,130,154)] text-end'>Sales</h1>
                <h1 className='text-[rgb(52,71,103)] text-end font-[600] text-xl'>RS.115,000</h1>
                <h1 className='mt-9'><span className='text-[rgb(82,175,80)] font-[600]'>+7%</span> <span className='text-[rgb(123,130,154)]'>than last month</span></h1>
              </div>

            </div>


            {/* -------------------------------Charts--------------------------------- */}

            <div className='grid grid-cols-1 bottomGrid mt-5 lg:mt-[30px] gap-5'>

              <div className='bg-white rounded-xl px-4 py-3 mt-[30px]'>
                <div className='w-full rounded-xl -mt-9'>
                  <img className='w-full h-full rounded-xl' src={chart1} alt="" />
                </div>
                <div className='mt-5'>
                  <h1 className='text-[rgb(52,71,113)] font-[700]'>Website Views</h1>
                  <h1 className='text-[rgb(123,128,154)] font-[400]'>Last Campaign Performance</h1>
                  <h1 className='text-[rgb(123,128,154)] mt-2'>compaign sent 2 days ago</h1>
                </div>
              </div>

              <div className='bg-white rounded-xl px-4 py-3 mt-[30px]'>
                <div className='w-full rounded-xl -mt-9'>
                  <img className='w-full h-full rounded-xl' src={chart2} alt="" />
                </div>
                <div className='mt-5'>
                  <h1 className='text-[rgb(52,71,113)] font-[700]'>Daily Sales</h1>
                  <h1 className='text-[rgb(123,128,154)] font-[400]'>(15%) increase in today sales</h1>
                  <h1 className='text-[rgb(123,128,154)] mt-2'>updated 1 hour ago</h1>
                </div>
              </div>

              <div className='bg-white rounded-xl px-4 py-3 mt-[30px]'>
                <div className='w-full rounded-xl -mt-9'>
                  <img className='w-full h-full rounded-xl' src={chart3} alt="" />
                </div>
                <div className='mt-5'>
                  <h1 className='text-[rgb(52,71,113)] font-[700]'>Completed Tasks</h1>
                  <h1 className='text-[rgb(123,128,154)] font-[400]'>Last Campaign Performance</h1>
                  <h1 className='text-[rgb(123,128,154)] mt-2'>just updated</h1>
                </div>
              </div>

            </div>

            {/* <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-9'>

              <div className='w-full'>
                <Donut/>
              </div>

              <div className='w-full'>
                <Bar/>
              </div>

            </div> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHome
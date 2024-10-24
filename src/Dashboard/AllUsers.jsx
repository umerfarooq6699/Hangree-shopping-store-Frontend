import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDashboardUser, emptyDashboardNotification, getAllUsers, userPage } from '../Slices/DashboardSlice'
import Sidebar from './Sidebar'
import { toast, ToastContainer } from 'react-toastify'
import DashboardNavbar from './DashboardNavbar'

const AllUsers = () => {
    const [array, setarray] = useState([])
    const { notification,getUsersMsg,deleteUserMsg } = useSelector(state => state.Dashboard)
    const [User,setUser]=useState(JSON.parse(localStorage.getItem("user")) || "")
    const dispatch = useDispatch()
    const [startIndex, setstartIndex] = useState(0)
    const [perPage, setperPage] = useState(5)
    const [pageNumber, setpageNumber] = useState(1)
    const [user,setuser]=useState({})
    const [increment,setincrement]=useState(1)
    const navigate=useNavigate()


    useEffect(() => {
        dispatch(userPage(2))
        dispatch(getAllUsers())
        setuser(JSON.parse(localStorage.getItem("User")) || {})
        // setTimeout(() => {
        //     dispatch(emptyDashboardNotification())
        // }, 1500);
    }, [deleteUserMsg])

    useEffect(()=>{
      if(user.role === "user"){
        navigate("/")
      }
    },[user])

    useEffect(()=>{
        if(deleteUserMsg && deleteUserMsg.message){
            toast.success(deleteUserMsg.message,{
                position:"top-center",
                autoClose:1000
            })
        }
    },[deleteUserMsg])


    useEffect(() => {
        if(getUsersMsg?.data?.array){
            setarray(getUsersMsg.data.array.slice(startIndex, startIndex + 5))
        }
    }, [getUsersMsg, startIndex])


    const searchUser=(e)=>{
        setarray(getUsersMsg?.data?.array.filter((ele,i)=>{
            return ele.email.includes(e.target.value)
        }))
    }

    const handleUser=(id)=>{
        console.log(id,"ppppppppppp")
        dispatch(deleteDashboardUser(id))
        // toast.success(deleteUserMsg.message,{
        //     position:"top-center",
        //     autoClose:1000
        // })
        // setTimeout(() => {
        //     dispatch(emptyDashboardNotification())
        // }, 1500);
    }

    const previous = () => {
        if (startIndex === 0) {
            setstartIndex(0)
        } else {
            setstartIndex(startIndex - 5)
            setpageNumber(pageNumber - 1)
        }
    }

    const next = () => {
        const maxPage = Math.ceil(getUsersMsg?.data?.array.length / perPage)
        console.log(maxPage, "number")
        if (pageNumber < maxPage) {
            setstartIndex(startIndex + 5)
            setpageNumber(pageNumber + 1)
        }
    }

    const first = () => {
        setstartIndex(0)
        setpageNumber(1)
    }

    const last = () => {
        const maxPage = Math.ceil(getUsersMsg?.data?.array.length / perPage)
        setpageNumber(maxPage)
        setstartIndex(maxPage * 5 - 5)
    }

    console.log(getUsersMsg,"getUsersMsg users")
    console.log(deleteUserMsg,"deleteUserMsg users")
    // console.log(increment)

    

    return (
        <>
        <div><ToastContainer/></div>
            <div className='w-full h-screen'>
                <DashboardNavbar/>
                <div className='w-full h-[89.5vh] grid grid-cols-5'>

                    <div className='hidden lg:block'>
                        <Sidebar />
                    </div>

                    <div className='col-span-5 lg:col-span-4 bg-gray-200 p-3 overflow-y-scroll'>

                        <div className='w-full md:flex justify-between'>
                            <h1 className='font-[600] text-xl'>Users</h1>

                            <div className='flex relative mt-2 md:mt-0'>
                                <div className='absolute top-1 left-3'>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className='w-full'>
                                    <input onChange={searchUser} type="text" placeholder='Search by email' className='w-full lg:w-[400px] px-9 py-1 text-gray-500 rounded-full' />
                                </div>
                            </div>
                        </div>



                        {
                            array && array.length > 0 ?

                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">

                                    <div className='overflow-x-auto'>
                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">


                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        Email
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Password
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Role
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>


                                            <tbody>

                                                {

                                                    array.map((e, i) => {
                                                        return (
                                                            <>
                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">

                                                                    <td class="px-6 py-4">
                                                                        {e.email}
                                                                    </td>
                                                                    <td class="px-6 py-4">
                                                                        ${e.password}
                                                                    </td>
                                                                    <td class="px-6 py-4">
                                                                        {e.role}
                                                                    </td>
                                                                    <td class="px-6 py-4">
                                                                        {/* <i onClick={() => setuserPopup(e)} class="cursor-pointer text-green-500 fa-solid fa-eye"></i> */}
                                                                        <i onClick={() => handleUser(e._id)} class="cursor-pointer text-red-500 ml-3 fa-solid fa-trash"></i>
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })

                                                }


                                            </tbody>
                                        </table>
                                    </div>

                                    <div className='flex justify-end mt-5 mb-5'>
                                        <div className='flex items-center mr-3'>
                                            <button onClick={first} className='bg-[rgb(252,185,53)] text-white px-2 py-1 rounded'>First</button>
                                            <i onClick={previous} class="fa-solid fa-chevron-left cursor-pointer ml-3"></i>
                                            <p className='ml-2'>{pageNumber}</p>
                                            <i onClick={next} class="fa-solid fa-chevron-right ml-3 cursor-pointer"></i>
                                            <button onClick={last} className='bg-[rgb(252,185,53)] text-white px-2 py-1 ml-3 rounded'>Last</button>
                                        </div>
                                    </div>

                                </div>

                                :
                                <>
                                    <div className='p-5 text-2xl font-[500]'>User not found</div>
                                </>
                        }




                    </div>


                </div>


                {/* {popupObject && <AdminPopup popupObject={popupObject} setpopupObject={setpopupObject} />} */}

            </div>
        </>
    )
}

export default AllUsers
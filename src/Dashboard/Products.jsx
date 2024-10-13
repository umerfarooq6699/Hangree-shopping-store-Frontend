import React, { useEffect, useState } from 'react'
import Sidebar from "./Sidebar"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { dashboardDeleteProduct, dashboardNotificationEmpty, dashboardPage, getProducts } from '../../Slices/adminSlice'
import { dashboardDeleteProduct, dashboardPage, emptyDashboardNotification } from '../Slices/DashboardSlice'
import { getCollection } from '../Slices/DashboardSlice'
import { toast, ToastContainer } from 'react-toastify'
import ProductPopup from './ProductPopup'
import DashboardNavbar from './DashboardNavbar'

const Products = () => {
  const [array, setarray] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [quickView, setQuickView] = useState("")
  const { notification} = useSelector(state => state.Dashboard)
  const [User, setUser] = useState(JSON.parse(localStorage.getItem("user")) || "")
  const dispatch = useDispatch()
  const [startIndex, setstartIndex] = useState(0)
  const [perPage, setperPage] = useState(5)
  const [pageNumber, setpageNumber] = useState(1)
  const navigate = useNavigate()
  const [increment,setincrement]=useState(0)


  useEffect(() => {
    dispatch(dashboardPage(1))
    dispatch(getCollection())
    // if(User){
    //     if(User.role === "user"){
    //         navigate("/")
    //     }
    // }
  }, [increment])

  // useEffect(()=>{
  //   setarray(notification?.data?.array)
  // },[notification])
  


  useEffect(() => {
    console.log(notification?.data?.array, "chunk")
    if (notification?.data?.array) {
      setTimeout(() => {
        setarray(notification?.data?.array.slice(startIndex, startIndex + 5))
      }, 1000);
    }
  }, [notification, startIndex])

  const search = (e) => {
    setarray(notification?.data?.array.filter((ele, i) => {
      return ele.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        ele.color.toLowerCase().includes(e.target.value.toLowerCase())
    }))
  }


  const handleDelete = (obj) => {
    console.log(obj)
      dispatch(dashboardDeleteProduct(obj))
      dispatch(emptyDashboardNotification())
      toast.success(notification.message,{
        position:"top-center",
        autoClose:1500
      })
      setincrement(increment+1)
  }

  const handleView = (obj) => {
      setQuickView(obj)
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
    const maxPage = Math.ceil(notification?.data?.array.length / perPage)
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
    const maxPage = Math.ceil(notification?.data?.array.length / perPage)
    setpageNumber(maxPage)
    setstartIndex(maxPage * 5 - 5)
  }

  console.log(notification, 'deleted notification')
  // console.log(delProductMsg, 'deleted delProductMsg')
  console.log(quickView,"quickView")

  return (
    <>
    <div><ToastContainer/></div>
      <div className='w-full h-screen'>
        <DashboardNavbar/>
        <div className='w-full h-[89.5vh] grid grid-cols-5'>

          <div className='hidden lg:block'>
            <Sidebar />
          </div>

          <div className='col-span-5 lg:col-span-4  bg-gray-200 overflow-y-scroll px-3'>

            <div className='w-full md:flex justify-between items-center mt-3 pb-3 sticky top-3 z-10 bg-[rgb(229,231,235)]'>
              <h1 className='font-[600] text-xl'>Products</h1>

              <div className='flex relative mt-2 lg:mt-0'>
                <div className='absolute top-[6px] left-3'>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className='w-full'>
                  <input onChange={search} type="text" placeholder='Search by name and color' className='w-full md:w-[400px] lg:w-[500px] px-9 py-[6px] text-gray-500 rounded-full' />
                </div>
              </div>

              {/* <Link to="/productsForm">
                <button className='px-2 py-1 mt-3 lg:mt-0 text-white rounded cursor-pointer bg-[rgb(252,185,53)]'>Add Products</button>
              </Link> */}
            </div>



            {
              array && array.length > 0 ?

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 pb-5">
                  <div className='overflow-auto'>
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">


                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Image
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Color
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Price
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Category
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Actions
                          </th>
                        </tr>
                      </thead>


                      <tbody>

                        {

                         array && array.length >0 && array.map((e, i) => {
                            return (
                              <>
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                  <td className='px-3 py-1'>
                                    <div className='w-[60px] h-[60px] rounded-full'>
                                      <img src={e?.images?.[0]} className='w-full h-full rounded-full' alt="" />
                                    </div>
                                  </td>
                                  <td class="px-6 py-4 text-nowrap">
                                    {e.name}
                                  </td>
                                  <td class="px-6 py-4 text-nowrap">
                                    {e.color}
                                  </td>
                                  <td class="px-6 py-4">
                                    RS.{e.discount}
                                  </td>
                                  <td class="px-6 py-4 text-nowrap">
                                    {e.category}
                                  </td>
                                  <td class="px-6 py-4 flex mt-3">
                                    <i onClick={() => handleView(e)} class="cursor-pointer text-green-500 fa-solid fa-eye"></i>
                                    <i onClick={() => handleDelete(e)} class="cursor-pointer text-red-500 ml-3 fa-solid fa-trash"></i>
                                    <Link to={`/updateProduct/${e._id}`}>
                                      <i class="cursor-pointer text-blue-600 ml-3 fa-solid fa-pen"></i>
                                    </Link>
                                  </td>
                                </tr>
                              </>
                            )
                          })

                        }


                      </tbody>
                    </table>
                  </div>

                  <div className='w-full flex justify-end mt-5'>
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
                  <div className='p-5 text-2xl font-[500]'>Product not found</div>
                </>
            }




          </div>


        </div>

        {quickView && <ProductPopup quickView={quickView} setQuickView={setQuickView} />}

      </div>
    </>
  )
}

export default Products
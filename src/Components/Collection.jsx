import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCollection } from '../Slices/DashboardSlice'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FaThLarge } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { sidebarCategoryFalse } from '../Slices/Cart';
import QuickView from './QuickView';
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

const Collection = () => {
    const [categoryArray, setcategoryArray] = useState(["ALL", "NEW ARRIVALS", "MEN", "WOMEN", "KIDS"])
    const [selectedCategory, setselectedCategory] = useState("ALL")
    const dispatch = useDispatch()
    const { notification, loading } = useSelector(state => state.Dashboard)
    const { client } = useSelector(state => state.Ecommerce)
    const { sidebarCategory } = useSelector(state => state.storeCart)
    const [array, setarray] = useState([])
    const [sortArray, setsortArray] = useState(["Sales", "Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to high", "Price, high to low", "Date, old to new", "Date,new to old"])
    const [checkSort, setcheckSort] = useState(false)
    const [viewColumn, setviewColumn] = useState(
        {
            sm: 1,
            md: 3,
            lg: 4
        }
    )
    const [sortColor, setsortColor] = useState("Sales")
    const [viewObject, setviewObject] = useState()
    const [fakeLoading, setfakeLoadnig] = useState(false)
    const [scroll,setscroll]=useState(false)


    const handleCategory = (e) => {
        console.log(e)
        setselectedCategory(e)
        dispatch(sidebarCategoryFalse())
        setfakeLoadnig(true)
        setTimeout(() => {
            setfakeLoadnig(false)
        }, 1000);
        if (e === "ALL") {
            setTimeout(() => {
                setarray(notification?.data?.array)
            }, 400);
        } else {
            if (e === "NEW ARRIVALS") {
                setarray(notification?.data?.array.filter((e, i) => {
                    return e.date >= "2024-05-15T00:00:00.000+00:00"
                }))
            }
            else {
                setTimeout(() => {
                    setarray(notification.data.array.filter((ele, i) => ele.category === e))
                }, 400);
            }
        }
    }

    useEffect(() => {
        dispatch(getCollection())
    }, [])

    useEffect(() => {
        setarray(notification?.data?.array)
    }, [notification])

    const handleSort = () => {
        setcheckSort(!checkSort)
    }

    const handleSorting = (value) => {
        let sortedArray = [...notification.data.array];
        setsortColor(value)
        setcheckSort(false)
        setfakeLoadnig(true)
        setTimeout(() => {
            setfakeLoadnig(false)
        }, 1000);

        if (value === "Alphabetically, A-Z") {
            sortedArray.sort((a, b) => a.name.localeCompare(b.name))
        } else if (value === "Sales") {
            sortedArray = [...array]
        }
        else if (value === "Alphabetically, Z-A") {
            sortedArray.sort((a, b) => b.name.localeCompare(a.name))
        } else if (value === "Price, low to high") {
            sortedArray.sort((a, b) => a.discount - b.discount)
        } else if (value === "Price, high to low") {
            sortedArray.sort((a, b) => b.discount - a.discount)
        } else if (value === "Date, old to new") {
            sortedArray.sort((a, b) => new Date(a.date) - new Date(b.date))
        }
        else if (value === "Date, new to old") {
            sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date))
        }

        setarray(sortedArray);
    };

    const handleOverlay = (event) => {
        if (event.target.classList.contains("overlay")) {
            setcheckSort(false)
        }
    }

    const overlayCategory = (event) => {
        if (event.target.classList.contains("overlay1")) {
            dispatch(sidebarCategoryFalse())
        }
    }

    const handleCategoryCross = () => {
        dispatch(sidebarCategoryFalse())
    }

    const handleView = (e) => {
        setviewObject(e)
    }
    // console.log(viewObject, "viewObject")

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (checkSort && !e.target.closest(".sort-dropdown")) {
                setcheckSort(false);
            }
        };

        // Add click event listener on window
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [checkSort]);


    const handleScroll = () => {
        console.log("working")
        setscroll(!scroll)
    }

    useEffect(() => {
        if (scroll) {
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, [scroll]);



    // console.log(selectedCategory)
    // console.log(notification?.data?.array, "notification")
    // console.log(array, "map array")
    // console.log(viewColumn, "column")
    // console.log(loading, "Loading")
    // console.log(sidebarCategory)
    console.log(client, "collection cleint")
    console.log(scroll)
    return (
        <>
            <div className=''>

                {/* --------------------------Category--------------------------- */}

                <div className='h-[50px] hidden md:flex justify-center items-center sticky top-[70px] bg-white z-10 left-0 md:mt-5'>
                    {
                        categoryArray.map((e, i) => {
                            return (
                                <>
                                    <div onClick={() => handleCategory(e)} className={`px-3 py-1 shadow rounded-full ml-3 ${selectedCategory === e ? "bg-[#EEA031] text-white" : ""} hover:bg-[#EEA031] hover:text-white cursor-pointer`}>{e}</div>
                                </>
                            )
                        })
                    }
                </div>

                {/* --------------------------Sort------------------------------ */}

                <div className='w-full h-[50px] md:h-[70px] sticky top-[60px] md:top-[120px] z-10 bg-white border border-[rgb(197,188,188)] flex justify-between mt-5'>

                    <div className='w-auto flex items-center border-r-2 border-[rgb(196,192,192)] px-3 md:px-9'>

                        <div onClick={() => setviewColumn((prev) => ({ ...prev, md: 3, lg: 3 }))} className=' cursor-pointer hidden md:block'>
                            <BsFillGrid3X3GapFill className={`text-3xl ${viewColumn === 3 ? "text-[rgb(100,97,97)]" : ""} text-[rgb(104,103,103)]`} />
                        </div>

                        <div onClick={() => setviewColumn((prev) => ({ ...prev, md: 4, lg: 4 }))} className=' cursor-pointer ml-2 hidden md:block'>
                            <TfiLayoutGrid4Alt className={`text-3xl ${viewColumn === 4 ? "text-[rgb(102,100,100)]" : ""} text-[rgb(102,99,99)] `} />
                        </div>


                        <div onClick={() => setviewColumn((prev) => ({ ...prev, lg: 6 }))} className='ml-3 cursor-pointer hidden lg:block'>
                            <div className={`w-[28px] h-[3px] ${viewColumn === 6 ? "bg-[rgb(100,100,100)]" : ""} mt-[3px] bg-[rgb(100,100,100)]`}></div>
                            <div className={`w-[28px] h-[3px] ${viewColumn === 6 ? "bg-[rgb(100,100,100)]" : ""} mt-[3px] bg-[rgb(100,100,100)]`}></div>
                            <div className={`w-[28px] h-[3px] ${viewColumn === 6 ? "bg-[rgb(100,100,100)]" : ""} mt-[3px] bg-[rgb(100,100,100)]`}></div>
                            <div className={`w-[28px] h-[3px] ${viewColumn === 6 ? "bg-[rgb(100,100,100)]" : ""} mt-[3px] bg-[rgb(100,100,100)]`}></div>
                            <div className={`w-[28px] h-[3px] ${viewColumn === 6 ? "bg-[rgb(100,100,100)]" : ""} mt-[3px] bg-[rgb(100,100,100)]`}></div>
                        </div>

                        <div onClick={() => setviewColumn((prev) => ({ ...prev, sm: 1 }))} className={`cursor-pointer md:hidden w-[27px] h-[27px] bg-[rgb(173,173,173)]`}></div>

                        <div onClick={() => setviewColumn((prev) => ({ ...prev, sm: 2 }))} className='gridIcon cursor-pointer hidden ml-2 md:hidden'>
                            <FaThLarge className={`text-3xl ${viewColumn === 2 ? "text-[rgb(100,98,98)]" : ""} text-[rgb(100,97,97)] `} />
                        </div>
                    </div>

                    <div onClick={handleSort} className='border-l border-[rgb(190,190,190)] flex items-center  px-3 md:px-9  cursor-pointer relative sort-dropdown'>
                        <h1 className='text-[rgb(104,100,100)]'>SORT BY</h1>
                        <div className='ml-2 mt-[2px] text-[rgb(102,99,99)]'>
                            {
                                checkSort ? <MdOutlineKeyboardArrowUp className='text-xl' /> : <MdOutlineKeyboardArrowDown className='text-xl' />

                            }

                        </div>
                        <div className={`max-w-max bg-white hidden md:block px-1 duration-200 pb-2 z-10 ${checkSort ? "visible" : "invisible"} border border-[rgb(231,231,231)] absolute top-[68px] right-0`}>
                            {
                                sortArray.map((e, i) => {
                                    return (
                                        <>
                                            <div onClick={() => handleSorting(e)} className={`mt-1 ${sortColor === e ? "bg-[rgb(238,160,49)] text-white" : ""} pr-5 pl-2 py-1 rounded hover:bg-[rgb(238,160,49)] hover:text-white text-nowrap cursor-pointer`}>{e}</div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>




                {/* ------------------------Products------------------------ */}

                <div onClick={handleScroll} className='w-[40px] h-[40px] flex justify-center items-center text-xl bg-black text-white cursor-pointer fixed bottom-[60px] z-20 right-5 rounded-full'>
                    {
                        scroll ? <><FaArrowUpLong /></>: <><FaArrowDownLong /></>
                    }
                    
                </div>

                <div className={`grid productsGrid gap-4 grid-cols-${viewColumn.sm} md:grid-cols-${viewColumn.md} lg:grid-cols-${viewColumn.lg} mt-9 px-2 md:px-9`}>
                    {loading || fakeLoading ? (
                        Array.from({ length: 12 }).map((_, index) => (
                            <div key={index} className='cursor-pointer'>
                                <div className='w-full relative group'>
                                    <Skeleton height={200} className='w-full' />
                                </div>
                                <div>
                                    <Skeleton height={20} className='mt-2' />
                                    <Skeleton height={20} className='mt-2' />
                                    <div className='flex justify-center'>
                                        <Skeleton height={20} width={80} className='mt-2' />
                                        <Skeleton height={20} width={80} className='mt-2 ml-5' />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (

                        array && array.length > 0 && array.map((e, i) => {
                            return (
                                <div onClick={() => handleView(e)} key={i} className='cursor-pointer'>
                                    <div className='w-full relative group'>
                                        <img className='w-full' src={e?.images?.[0]} alt="" />
                                        <img className='w-full absolute top-0 left-0 invisible transition-all duration-200 group-hover:visible' src={e?.images?.[1]} alt="" />
                                        <div className='w-[70px] py-1 flex justify-center items-center rounded absolute top-1 lg:top-3  left-1 lg:left-3 bg-[rgb(238,160,50)] text-[12px]'>SAVE 30 %</div>
                                    </div>
                                    <div>
                                        <h1 className='text-center text-[rgb(148,148,153)] mt-3'>{e.name}</h1>
                                        <h1 className='text-center text-[rgb(148,148,150)]'>{e.color}</h1>
                                        <div className='flex justify-center'>
                                            <h1 className='text-[#EDA036]'>RS.{e.discount}.00</h1>
                                            <h1 className='text-gray-500 line-through ml-5'>RS.{e.price}.00</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>


                {/* ---------------------Sort Sidebar-------------------- */}
                <div onClick={handleOverlay} className={`overlay w-full h-screen bg-[rgb(0,0,0,0.6)] transition-all duration-200 cursor-crosshair ${checkSort ? "visible" : "invisible"} fixed top-0 left-0 block md:hidden`}>
                    <div className={`w-full bg-white absolute bottom-0 left-0 ${checkSort ? "bottom-0" : "-bottom-[100%]"} duration-300`}>
                        <div className='h-[50px] flex justify-between items-center px-5 border-b border-[rgb(220,220,220)]'>
                            <h1 className='text-black'>SORT BY</h1>
                            <div onClick={() => setcheckSort(!checkSort)}><HiMiniXMark className='text-2xl cursor-pointer' /></div>
                        </div>
                        <div className={`w-full bg-white pl-4 pr-[50px] duration-200 pb-2 z-10 flex justify-center items-center flex-col`}>
                            {
                                sortArray.map((e, i) => {
                                    return (
                                        <>
                                            <div onClick={() => handleSorting(e)} className={`mt-3 ${sortColor === e ? "text-[rgb(238,160,50)] font-bold text-xl" : "text-black"}`}>{e}</div>
                                        </>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>


                {/* ------------------------category sidebar--------------------------- */}
                <div onClick={overlayCategory} className={`overlay1 z-20 duration-200 w-full h-screen ${sidebarCategory ? "visible" : "invisible"} bg-[rgb(0,0,0,0.6)] fixed top-0 left-0 cursor-crosshair`}>
                    <div className='bg-white w-[250px] cursor-auto h-full px-1 py-5'>
                        <div onClick={handleCategoryCross}><HiMiniXMark className='text-2xl cursor-pointer mb-4' /></div>
                        <div>
                            {
                                categoryArray.map((e, i) => {
                                    return (
                                        <>
                                            <h1 onClick={() => handleCategory(e)} className={`mt-2 cursor-pointer px-2 py-2 ${selectedCategory === e ? "bg-[rgb(238,160,50)] text-white" : ""} text-[rgb(160,160,160)] hover:bg-[rgb(238,160,50)] hover:text-white`}>{e}</h1>
                                            <div className='w-full h-[1px] bg-[rgb(210,210,210)]'></div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>



                {viewObject && <QuickView viewObject={viewObject} setviewObject={setviewObject} />}

            </div>
        </>
    )
}

export default Collection
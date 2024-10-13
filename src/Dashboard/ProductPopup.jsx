import React, { useEffect, useState } from 'react'
import { FaXmark } from "react-icons/fa6";
// import { useDispatch, useSelector } from 'react-redux';
// import { addtocart } from '../Slices/Cart';
// import { toast, ToastContainer } from 'react-toastify';

const ProductPopup = ({ quickView, setQuickView }) => {
    //   const sizeArray = ["S", "M", "L", "XL"]
    //   const [selectedSize, setselectedSize] = useState("M")
    //   const [qnty, setqnty] = useState(1)

    const handleSize = (e) => {
        // setselectedSize(e)
        // setviewObject({...viewObject,size:e})
    }

    //   const decrement = () => {
    //     if (qnty == 1) {
    //       setqnty(1)
    //     } else {
    //       setqnty(qnty - 1)
    //     }
    //   }

    //   const increment = () => {
    //     setqnty(qnty + 1)
    //   }

    //   useEffect(()=>{
    //     setviewObject({...viewObject,quantity:qnty})
    //   },[qnty])

    //   const handleInput = (e) => {
    //     setquantity(e.target.value)
    //   }

    const handleCross = () => {
        setQuickView(false)
    }

    const handleOverlay = (event) => {
        if (event.target.classList.contains("overlay")) {
            setQuickView(false)
        }
    }

    //   const handleAddToCart=()=>{
    //     // toast.success("Item added to cart",{
    //     //   position:"bottom-center",
    //     //   autoClose:700
    //     // })
    //     dispatch(addtocart({...viewObject,size:selectedSize}))
    //     setviewObject()
    //   }

    // useEffect(()=>{
    //   if(viewObject){
    //     document.body.style.overflow="hidden"
    //   }else{
    //     document.body.style.overflow="auto"
    //   }
    // },[])

    console.log(quickView, "PopupObject")
    // console.log(selectedSize)
    // console.log(cartArray,"cartArray")
    return (
        <>
            {/* <div><ToastContainer/></div> */}
            <div onClick={handleOverlay} className='overlay cursor-crosshair w-full h-screen overlay flex justify-center items-center bg-[rgb(0,0,0,0.6)] z-10 fixed top-0'>
                <div className=' w-[80%] h-[86vh] relative md:h-auto lg:h-auto overflow-y-scroll lg:overflow-auto bg-white cursor-auto'>
                    <div onClick={handleCross} className='w-[30px] h-[30px] bg-black hover:bg-gray-600 text-white absolute top-2 right-2 flex justify-center items-center cursor-pointer rounded-full'><FaXmark />
                    </div>
                    <div className=' grid grid-cols-1 md:grid-cols-2 '>
                        <div className='md:flex justify-center items-center'>
                            <div className='w-full lg:w-[80%]'>
                                <img className='w-full h-full' src={quickView.images[0]} alt="" />
                            </div>
                        </div>

                        <div className='w-full items-center p-3 lg:px-9'>
                            <div className='w-full'>
                                <h1 className='lg:text-xl text-[rgb(92,92,92)] mt-9'>{quickView.name}</h1>
                                <h1 className='lg:text-xl mt-2 text-[rgb(92,92,92)]'>{quickView.color}</h1>
                                <h1 className='lg:text-xl mt-2 text-[rgb(92,92,92)]'>Category : {quickView.category}</h1>
                                <h1 className='lg:text-xl mt-2 text-[rgb(92,92,92)]'>Date : {new Date(quickView.date).toLocaleDateString('en-GB')}</h1>
                                <h1 className='lg:text-xl mt-2 text-[rgb(238,166,66)]'>Discount Price : RS . {quickView.discount}.00</h1>
                                <h1 className='lg:text-xl mt-2 line-through text-[rgb(146,146,146)]'>Price : RS . {quickView.price}.00</h1>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPopup
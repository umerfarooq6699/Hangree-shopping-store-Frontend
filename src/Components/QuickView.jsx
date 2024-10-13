import React, { useEffect, useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../Slices/Cart';
import { toast, ToastContainer } from 'react-toastify';

const QuickView = ({ viewObject, setviewObject }) => {
  const sizeArray = ["S", "M", "L", "XL"]
  const [selectedSize, setselectedSize] = useState("M")
  const [qnty, setqnty] = useState(1)
  const dispatch=useDispatch()
  const {cartArray}=useSelector(state=>state.storeCart)

  const handleSize = (e) => {
    setselectedSize(e)
    setviewObject({...viewObject,size:e})
  }

  const decrement = () => {
    if (qnty == 1) {
      setqnty(1)
    } else {
      setqnty(qnty - 1)
    }
  }

  const increment = () => {
    setqnty(qnty + 1)
  }

  useEffect(()=>{
    setviewObject({...viewObject,quantity:qnty})
  },[qnty])

  const handleInput = (e) => {
    setquantity(e.target.value)
  }

  const handleCross=()=>{
    setviewObject(false)
  }

  const handleOverlay=(event)=>{
    if(event.target.classList.contains("overlay")){
      setviewObject(false)
    }
  }

  const handleAddToCart=()=>{
    // toast.success("Item added to cart",{
    //   position:"bottom-center",
    //   autoClose:700
    // })
    dispatch(addtocart({...viewObject,size:selectedSize}))
    setviewObject()
  }

  // useEffect(()=>{
  //   if(viewObject){
  //     document.body.style.overflow="hidden"
  //   }else{
  //     document.body.style.overflow="auto"
  //   }
  // },[])

  // console.log(viewObject)
  // console.log(selectedSize)
  // console.log(cartArray,"cartArray")
  return (
    <>
    <div><ToastContainer/></div>
      <div onClick={handleOverlay} className='overlay cursor-crosshair w-full h-screen overlay flex justify-center items-center bg-[rgb(0,0,0,0.6)] z-10 fixed top-0'>
        <div className=' w-[80%] h-[86vh] relative md:h-auto lg:h-auto overflow-y-scroll lg:overflow-auto bg-white cursor-auto'>
        <div onClick={handleCross} className='w-[30px] h-[30px] bg-black hover:bg-gray-600 text-white absolute top-2 right-2 flex justify-center items-center cursor-pointer rounded-full'><FaXmark />
        </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 '>

            <div className='md:flex justify-center items-center md:px-3 lg:px-0 lg:py-3'>
              <div className='w-full lg:w-[80%]'>
                <img className='w-full h-full' src={viewObject.images[0]} alt="" />
              </div>
            </div>

            <div className='w-full lg:flex items-center p-3 lg:px-9'>
              <div className='w-full'>
                <h1 className='text-[rgb(92,92,92)]'>{viewObject.name}</h1>
                <h1 className='text-[rgb(92,92,92)]'>{viewObject.color}</h1>
                <div className='flex mt-5'>
                  <h1 className='text-[rgb(238,166,66)]'>RS . {viewObject.discount}.00</h1>
                  <h1 className='line-through ml-5 text-[rgb(146,146,146)]'>RS . {viewObject.price}.00</h1>
                </div>
                <h1 className='text-[rgb(92,92,92)] mt-5'>Size: {selectedSize}</h1>
                <div className='flex mt-1'>
                  {
                    sizeArray.map((e, i) => {
                      return (
                        <>
                          <div onClick={() => handleSize(e)} className={`w-9 h-9 flex justify-center ${selectedSize === e ? "border-[rgb(100,100,100)]" : ""} text-[rgb(100,100,100)] items-center cursor-pointer ${i != 0 ? "ml-2" : "ml-0"} border border-[rgb(231,231,231)]`}>{e}</div>
                        </>
                      )
                    })
                  }
                </div>
                <h1 className='mt-5 text-[rgb(92,92,92)]'>Quantity:</h1>
                <div className='flex mt-2'>
                  <div onClick={decrement} className='w-[35px] h-[35px] border border-[rgb(190,190,190)] text-[rgb(190,190,190)] flex justify-center items-center text-xl cursor-pointer'>-</div>
                  <input onChange={handleInput} type="text" className='w-[50px] text-center border border-[rgb(190,190,190)]' value={qnty} />
                  <div onClick={increment} className='w-[35px] h-[35px] border border-[rgb(190,190,190)] text-[rgb(190,190,190)] flex justify-center items-center text-xl cursor-pointer'>+</div>
                </div>
                <div onClick={handleAddToCart} className='bg-[rgb(237,158,50)] text-white rounded py-2 cursor-pointer flex justify-center items-start mt-5 hover:bg-[rgb(243,178,87)]'>ADD TO CART</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default QuickView
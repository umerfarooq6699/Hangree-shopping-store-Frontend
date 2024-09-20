import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../Slices/UserSlice'

const Counter = () => {
    const dispatch=useDispatch()
    const {count}=useSelector(state=>state.Ecommerce)
    const increment=()=>{
        dispatch(inc())
    }
    const decrement=()=>{
        dispatch(dec())
    }
  return (
    <>
        <button onClick={increment}>Increment</button>
            <p>{count}</p>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter
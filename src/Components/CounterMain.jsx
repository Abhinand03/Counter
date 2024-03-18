import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrse, increase, reset } from '../redux/slice'


function CounterMain() {
  const count =useSelector((state)=>state.counter.value)
  const dispacth=useDispatch()
  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div className='w-50 border border-light p-5'>
            <h1 className='text-white text-center'>Counter</h1>
            <h2 className='text-warning text-center'>{count}</h2>
            <div className='mt-3 d-flex justify-content-between'>
              <button className='btn btn-danger ' onClick={()=>{dispacth(decrse())}}>Decrese</button>
              <button className='btn btn-info ' onClick={()=>{dispacth(reset())}}>Reset</button>
              <button className='btn btn-success ' onClick={()=>{dispacth(increase())}}> Increse</button>
            </div>
        </div>
        

    </div>
  )
}

export default CounterMain
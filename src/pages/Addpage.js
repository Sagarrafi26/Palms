import React from 'react'
import Constants from '../constants/Constants'
import Header from '../Components/Header'

import { Link } from 'react-router-dom'

export const Addpage = () => {
  return (
    <div>
        <Header pageTitle={Constants.ADD_PAGE}/>
        <div className='flex py-5'>
        <div className=' flex  '>
          <p className='w-[100%]'> {Constants.COMPANY_NAME} </p> 
          
         
            <label>
            <input type="text"  className='mx-6  border-2 rounded-md px-5 py-0 flex' />
            </label>
         
        </div>
            
        <div className=' flex  '>
          <p className='w-[100%]'> {Constants.COMPANY_CODE} </p> 
          <label>
            <input type="text"  className='mx-6  border-2 rounded-md px-5 py-0 flex' />
            </label>
        </div>
                 
        <div className=' flex '>
          <p className='mx-8'> {Constants.ACTIVE_STATUS} </p>
          <label>
            <input type="text"  className='mx-6  border-2 rounded-md px-5 py-0 flex' />
            </label>
        </div>
        </div>

        <div>
            <hr></hr>
        </div>

        <div className='flex  justify-between  py-3'>
        <div className='flex  w-1/6  justify-center  cursor-pointer main-w-[200%] relative  py-3   rounded-md bg-gray-400 '>
          <Link to="/">
            <button>{Constants.BACK}</button>
            </Link>
        </div>
       
        <div className='flex  w-1/6  justify-center   cursor-pointer main-w-[200%] relative  py-3   rounded-md bg-gray-400 '>
          <Link to="/">
            <button>{Constants.SAVE}</button>
            </Link>
        </div>
       

        </div>
    </div>
  )
}

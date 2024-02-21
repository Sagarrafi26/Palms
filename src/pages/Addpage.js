import React from 'react'
import Constants from '../constants/Constants'
import Header from '../components/Header'

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
      <div className='flex justify-center mb-5 mx-5'>
        <button
          className='flex justify-center w-full sm:w-60 font-medium rounded-lg text-sm px-5 py-2 text-center border border-2 text-white bg-gradient-to-t from-gray-500 to-gray-600 hover:bg-gradient-to-b'>
            {Constants.BACK}
        </button>
      </div>
      
      <div className='flex justify-center mb-5 mx-5'>
          <button
            className='flex justify-center w-full sm:w-60 font-medium rounded-lg text-sm px-5 py-2 text-center border border-2 text-white bg-gradient-to-t from-gray-500 to-gray-600 hover:bg-gradient-to-b'>
              {Constants.SAVE}
          </button>
      </div>
      

      </div>
    </div>
  )
}

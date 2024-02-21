import React, { useState } from 'react'
import Constants from '../constants/Constants'
import Header from '../Components/Header'

import { Link } from 'react-router-dom'
import  classNames  from 'classnames'


export const EditPage = () => {
    const [isToggled, setIsToggled] = useState(false);

  
    
  return (
    <div>
        <Header pageTitle={Constants.EDIT_PAGE}/>
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
        <div 
          onClick={()=>setIsToggled(!isToggled)}
        className={classNames('flex  w-20 h-10 bg-gray-600 m-0 my-0 rounded-full',{
            'bg-green-500':isToggled,
        })}>
         <span className={classNames('h-10 w-10 bg-white rounded-full',{
            "ml-10":isToggled,
         })}/>
         

        </div>
        <div>
            DEACTIVE
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

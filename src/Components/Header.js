
import Settings from '@mui/icons-material/Settings'
import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Dropdown2 from './Dropdown2'
export const Header = () => {

  // const [isOpen, setIsOpen] =useState(false);   
  // const toggleDropdown= () => {    
  // setIsOpen(!isOpen); 
  //   };

  return (
    <div>
      <div className='flex  bg-zinc-400 justify-between '>
        <div className='text-red-500 mt-7 font-bold text-[30px]'>VDEM</div>
        <div className='flex mt-1 font-bold cursor-pointer justify-center items-center  ' >
          Company Masters
          <img width='20' src="https://cdn-icons-png.flaticon.com/128/2609/2609201.png" alt="" />

        </div>
        <div className='flex mt-1 font-bold  cursor-pointer justify-center items-center  ' >Vehicle Masters  <img width='20' src="https://cdn-icons-png.flaticon.com/128/2609/2609201.png" alt="" />
        </div>
        <div className='flex mt-1 font-bold cursor-pointer justify-center items-center   ' >Inspection Masters  <img width='20' src="https://cdn-icons-png.flaticon.com/128/2609/2609201.png" alt="" />
        </div>
        <div className='flex mt-1 font-bold cursor-pointer justify-center items-center   ' >Type Masters  <img width='20' src="https://cdn-icons-png.flaticon.com/128/2609/2609201.png" alt="" />
        </div>
        <div className='flex mt-1 font-bold cursor-pointer justify-center items-center  ' >Reports  <img width='20' src="https://cdn-icons-png.flaticon.com/128/2609/2609201.png" alt="" />
        </div>
        <div className='m-[26px] flex items-center  border-[1px]  border-black rounded  px-4 font-bold '>Transaction</div>
        <div className='m-[26px] flex items-center  border-[1px]  border-black rounded  px-4 font-bold'>RealTime</div>
        <div className='text-inherit mt-10 ' ><Settings /></div>
        <img className=" flex h-24 bg-zinc-400 	" src="https://1000logos.net/wp-content/uploads/2018/02/Toyota-Logo-1989.png" alt="" />
      </div>
      <div className='text-[30px] text-start'>
        <p>Company Master </p>
        <hr></hr>
      </div>
      <div className='flex   w-[100%]'>
        <div className=' flex  '>
        <p className='w-[100%]'> Company Name</p> 

          <div className='mx-6 rounded-1-md px-5 py-0 flex' >
            <Dropdown />
          </div>
        
          </div>

        <div className=' flex '>
          <p className='mx-10'>Active Status</p>
          <div className='  w-[100%] rounded-1-md px-5 py-0 flex' >
           <Dropdown2/>
          </div>
        </div>
        

       <div className='flex  w-1/6  justify-center  cursor-pointer main-w-[200%] relative mx-20  rounded-md bg-gray-700 '>
        <button>
             Search
         </button>
        </div>


        <div className='flex w-1/6  justify-center  cursor-pointer main-w-[200%] relative  rounded-md bg-gray-700 '>
          <button>
            Clear
            </button>
        </div>
      </div>
      <div>
        <hr></hr>
      </div>

      <div className='flex text-end justify-end  py-3'>
       
        <div className='flex  w-1/6  justify-center  cursor-pointer main-w-[200%] relative mx-20 py-3 me-10  rounded-md bg-gray-700 '>
        <button >
             ADD
         </button>
        </div>
        <div className='flex w-1/6  justify-center  cursor-pointer main-w-[200%] relative ms-2  rounded-md bg-gray-700 '>
          <button>
            EDIT
            </button>
        </div> 

      </div>


    </div>
  )
}


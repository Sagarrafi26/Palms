import Header from '../Components/Header';
import Table from '../Components/Table';
import Dropdown from '../Components/Dropdown'
import Dropdown2 from '../Components/Dropdown2'
import Constants from '../constants/Constants';
import { Link } from 'react-router-dom';

function Home () {

  const data = [
    { id: 1, companyName: 'Company A', companyCode: 'A001', active: true },
    { id: 2, companyName: 'Company B', companyCode: 'B002', active: false },
    { id: 3, companyName: 'Company C', companyCode: 'C003', active: true },
  ];

  return (
    <div className="Home">
      <Header pageTitle={Constants.COMPANY_MASTER}/>

      <div className='flex w-[100%] py-2'>
        <div className=' flex justify-center '>
          <p className='w-[100%] py-2'> {Constants.COMPANY_NAME} </p> 

          <div className=' mx-6 rounded-1-md px-5 py-0 flex me-7 ' >
            <Dropdown />
          </div>
        </div>

        <div className=' flex '>
          <p className='w-[100%] py-2'> {Constants.ACTIVE_STATUS} </p>
          <div className='  w-[100%] rounded-1-md px-5 py-0  justify-end' >
            <Dropdown2/>
          </div>
        </div>
          

        <div className='flex  w-[220px]  justify-center  cursor-pointer  mx-20 py-3  rounded-md bg-gray-400 '>
          <button>
            {Constants.SEARCH} 
          </button>
        </div>


        <div className='flex w-[220px]  justify-center  cursor-pointer    rounded-md bg-gray-400 '>
          <button>
            {Constants.CLEAR} 
          </button>
        </div>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className='flex text-end justify-end  py-3'>
        <div className='flex  w-[220px]  justify-center  cursor-pointer  mx-20 py-3   rounded-md bg-gray-400 '>
          <Link to='/company/add'>
            <button>{Constants.ADD}</button>
            </Link>
         
        </div>
        <div className='flex w-[220px]  justify-center   cursor-pointer   mx-[2px] py-2  rounded-md bg-gray-400 '>
          <Link to="/company/edit">
          <button>
            {Constants.EDIT}
          </button>
          </Link>
        </div> 
      </div>

      <div className="container mx-auto pt-8">
        <Table data={data} />
      </div>
    </div>
  );
};

export default Home;
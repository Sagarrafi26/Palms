import Header from '../components/Header';
import Table from '../components/Table';
import Dropdown from '../components/Dropdown'
import Dropdown2 from '../components/Dropdown2'
import Constants from '../constants/Constants';

function Home () {

  const data = [
    { id: 1, companyName: 'Company A', companyCode: 'A001', active: true },
    { id: 2, companyName: 'Company B', companyCode: 'B002', active: false },
    { id: 3, companyName: 'Company C', companyCode: 'C003', active: true },
  ];

  return (
    <div className="Home">
      <Header pageTitle={Constants.COMPANY_MASTER}/>

      <div className='flex w-[100%]'>
        <div className=' flex  '>
          <p className='w-[100%]'> {Constants.COMPANY_NAME} </p> 

          <div className='mx-6 rounded-1-md px-5 py-0 flex' >
            <Dropdown />
          </div>
        </div>

        <div className=' flex '>
          <p className='mx-10'> {Constants.ACTIVE_STATUS} </p>
          <div className='  w-[100%] rounded-1-md px-5 py-0 flex' >
            <Dropdown2/>
          </div>
        </div>
          

        <div className='flex  w-1/6  justify-center  cursor-pointer main-w-[200%] relative mx-20  rounded-md bg-gray-700 '>
          <button>
            {Constants.SEARCH} 
          </button>
        </div>


        <div className='flex w-1/6  justify-center  cursor-pointer main-w-[200%] relative  rounded-md bg-gray-700 '>
          <button>
            {Constants.CLEAR} 
          </button>
        </div>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className='flex text-end justify-end  py-3'>
        <div className='flex  w-1/6  justify-center  cursor-pointer main-w-[200%] relative mx-20 py-3 me-10  rounded-md bg-gray-700 '>
          <button >
            {Constants.ADD}
          </button>
        </div>
        <div className='flex w-1/6  justify-center  cursor-pointer main-w-[200%] relative ms-2  rounded-md bg-gray-700 '>
          <button>
            {Constants.EDIT}
          </button>
        </div> 
      </div>

      <div className="container mx-auto pt-8">
        <Table data={data} />
      </div>
    </div>
  );
};

export default Home;
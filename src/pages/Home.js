import Header from '../components/Header';
import Table from '../components/Table';
import Dropdown from '../components/Dropdown'
import Dropdown2 from '../components/Dropdown2'
import Constants from '../constants/Constants';
import { useNavigate } from 'react-router-dom';

function Home () {

  const navigate = useNavigate();

  const data = [
    { id: 1, companyName: 'Company A', companyCode: 'A001', active: true },
    { id: 2, companyName: 'Company B', companyCode: 'B002', active: false },
    { id: 3, companyName: 'Company C', companyCode: 'C003', active: true },
  ];

  const handleAddBtn = () => {
    navigate("/company/add");
  };

  const handleEditBtn = () => {
    navigate("/company/edit");
  };

  return (
    <div>
      <Header pageTitle={Constants.COMPANY_MASTER}/>

      <div className='flex justify-center py-2'>
        <div className=' flex mx-5'>
          <p className='w-[100%]'> {Constants.COMPANY_NAME} </p> 
          <div className='ml-2 rounded-1-md flex' >
            <Dropdown />
          </div>
        </div>

        <div className=' flex mx-5'>
          <p className='w-[100%]'> {Constants.ACTIVE_STATUS} </p>
          <div className='ml-2 rounded-1-md flex' >
            <Dropdown2/>
          </div>
        </div>
          

        <div className='flex justify-center mb-5 mx-5 '>
          <button
            className='flex justify-center w-full sm:w-60 font-medium rounded-lg text-sm px-5 py-2 text-center border border-2 text-white bg-gradient-to-t from-gray-500 to-gray-600 hover:bg-gradient-to-b'>
            {Constants.SEARCH} 
          </button>
        </div>


        <div className='flex justify-center mb-5 mx-5'>
          <button
            className='flex justify-center w-full sm:w-60 font-medium rounded-lg text-sm px-5 py-2 text-center border border-2 text-white bg-gradient-to-t from-gray-500 to-gray-600 hover:bg-gradient-to-b'>
            {Constants.CLEAR} 
          </button>
        </div>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className='flex text-end justify-end px-5 py-3'>

        <div className='flex justify-center mb-5 mx-2'>
            <button 
              className='flex justify-center w-full sm:w-40 font-medium rounded-lg text-sm px-5 py-2 text-center border border-2 text-white bg-gradient-to-t from-gray-500 to-gray-600 hover:bg-gradient-to-b'
              onClick={handleAddBtn}>
              {Constants.ADD}
            </button>
        
        </div>
        
        <div className='flex justify-center mb-5 mx-2'>
          <button 
            className='flex justify-center w-full sm:w-40 font-medium rounded-lg text-sm px-5 py-2 text-center border border-2 text-white bg-gradient-to-t from-gray-500 to-gray-600 hover:bg-gradient-to-b' 
            onClick={handleEditBtn}>
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
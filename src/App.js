
import './App.css';

import { Header } from './Components/Header';
import Table from './Components/Table';

function App() {
  
  const data = [
    { id: 1, companyName: 'Company A', companyCode: 'A001', active: true },
    { id: 2, companyName: 'Company B', companyCode: 'B002', active: false },
    { id: 3, companyName: 'Company C', companyCode: 'C003', active: true },
  ];
  return (
    <div className="App">
      <Header/>
      <div className="container mx-auto pt-8">
    
      <Table data={data} />
    </div>
     
    </div>
  );
}

export default App;

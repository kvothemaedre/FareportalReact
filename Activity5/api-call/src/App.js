import './App.css';
import Nlc from './components/Nlc';
import Sbi from './components/Sbi';

function App() {
  return (
    <div className='container-md '>
      <h5 className='m-5 mb-0'>API call [GET request]: </h5>
      <hr/>
      <div className='d-flex justify-content-center mt-5'>
        <div className='me-5'>
          <Nlc />
        </div>
        <div>
          <Sbi />
        </div> 
      </div>
    </div>
    
  );
}

export default App;

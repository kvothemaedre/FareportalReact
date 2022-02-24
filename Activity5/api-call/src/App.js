import './App.css';
import Stock from './components/Stock';

function App() {
  const apiUrl = [
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC",
    "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI"
  ]
  return (
    <div className='container-md '>
      <h5 className='m-5 mb-0'>API call [GET request]: </h5>
      <hr/>
      <div className='d-flex justify-content-center mt-5'>
        {
          apiUrl.map((item,index) => 
            <div className='me-5' key={index}>
              <Stock apiUrl = {item}/>
            </div> 
          )
        }
      </div>
    </div>
    
  );
}

export default App;

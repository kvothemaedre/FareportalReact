import  { useEffect, useState } from 'react'
import CauseCard from './CauseCard';
import axios from 'axios';
function GridDisplay() {
    
  const [fundraisers, setFundraisers] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:5001/api/Cause").then(res => {
             setFundraisers(res.data);
        })
    },[])

    // const handleClick = (event) => { 
    //     event.preventDefault();
    //     axios.delete(`https://localhost:5001/api/Cause/${event.target.id}`)
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
    // }

    // const getData = () => {
    //     axios.get("https://localhost:5001/api/Cause").then(res => {
    //          setFundraisers(res.data);
    //     })
    // }
    
  
    return (
        <>      
            <div className="container">
              <div>
                  {fundraisers.map((item) => {
                      return (
                        <CauseCard item = {item} key={item.cid}/>
                     )                    
                  }) }
              </div>              
            </div>
        </>   
    )
  
}

export default GridDisplay
import axios from 'axios';
import { useEffect, useState } from 'react'
const ListAll = (props) => {
    
    const [fundraisers, setFundraisers] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:5001/api/Cause").then(res => {
             setFundraisers(res.data);
        })
    })

    const handleClick = (event) => { 
        event.preventDefault();
        axios.delete(`https://localhost:5001/api/Cause/${event.target.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            getData();
        })
    }

    const getData = () => {
        axios.get("https://localhost:5001/api/Cause").then(res => {
             setFundraisers(res.data);
        })
    }
    
    const handleModify = (event) => {
        event.preventDefault();
        props.setItemID(event.target.id);
        props.setModify(true);
    }
  return (
    <div>
          <table className="table">
            <thead>
                <tr>
                <th scope="col">Userid</th>
                <th scope="col">Cause</th>
                <th scope="col">Target</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                fundraisers.map((item) => {
                    return (
                        <tr key={item.cid}>
                            <td>{item.frid.trimEnd()}</td>
                            <td>{item.reason}</td>
                            <td>{item.money}</td>
                            <td><button className='btn btn-danger' id = {item.cid}  onClick={handleClick}>Delete</button>
                            | <button className='btn btn-warning' id = {item.cid} onClick={handleModify}>Modify</button>
                            </td>
                        </tr>
                    )
                })
            }      
            </tbody>
            </table>
      </div>
  )
}



export default ListAll
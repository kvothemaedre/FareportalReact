import axios from 'axios'
import React, { Component } from 'react'

export class Display extends Component {
    state = {
        cause : []
    }

    componentDidMount() {
        axios.get("https://localhost:5001/api/Cause").then(res => {
            const cause = res.data;
            this.setState({ cause });
        })
    }
    
    componentDidUpdate() {
        axios.get("https://localhost:5001/api/Cause").then(res => {
            const cause = res.data;
            this.setState({ cause });
        })
    }
    
    handleClick = (event) => { 
        event.preventDefault();
        axios.delete(`https://localhost:5001/api/Cause/${event.target.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.getData();
        })
    }

    getData = () => {
        axios.get("https://localhost:5001/api/Cause").then(res => {
            const cause = res.data;
            this.setState({cause});
        })
    }
  render() {
    return (
      <div>
          <table className="table">
            <thead>
                <tr>
                <th scope="col">Userid</th>
                <th scope="col">Cause</th>
                <th scope="col">Target</th>
                <th>#</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.cause.map((item) => {
                    return (
                        <tr key={item.cid}>
                            <td>{item.frid.trimEnd()}</td>
                            <td>{item.reason}</td>
                            <td>{item.money}</td>
                            <td><button className='btn btn-danger' id = {item.cid} onClick = {this.handleClick}>Delete</button></td>
                        </tr>
                    )
                })
            }      
            </tbody>
            </table>
      </div>
      
    )
  }
}

export default Display
import React, { Component } from 'react';
import GridDisplay from './GridDisplay';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  value:''
                 };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return (
      <div className="container m-5 p-3 bg-light">
        <div className='container'>
        <span>Data generated from : </span> 
        <a href='https://mockaroo.com/' target="_blank">mockaroo.com</a>
        </div>
       
        <div className="d-flex justify-content-center m-3">
          <input type="text" className='form-control' 
                              value={this.state.value} onChange={this.handleChange} 
                              placeholder="Search by name or id"/>
        </div>
        <GridDisplay query = {this.state.value.toLowerCase()}/>
      </div> 
    );
  }
}

export default Search;
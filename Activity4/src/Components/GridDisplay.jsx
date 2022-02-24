import React, { Component } from 'react'
import Card from './Card'
import items from '../Data/list'

class GridDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    list: items
                 };
  }

 
  render() {
    return (
        <>      
            <div className="container">
              <div>
                  {this.state.list.map((item) => {
                      const tempString = item.firstName.toLowerCase() + " " + item.lastName.toLowerCase();
                      if (tempString.includes(this.props.query))
                      return (
                          <Card item = {item} key={item.id} />
                      )
                      if (item.id ===  parseInt(this.props.query))
                      return (
                           <Card item = {item} key={item.id} />
                      )
                      return (
                           <Card item = {item} key={item.id} />
                     )                    
                  }) }
              </div>              
            </div>
        </>   
    )
  }
}

export default GridDisplay
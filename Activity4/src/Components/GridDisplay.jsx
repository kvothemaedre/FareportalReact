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
              <div className="row">
                  {this.state.list.map((item) => {
                      const tempString = item.firstName.toLowerCase() + " " + item.lastName.toLowerCase();
                      if (tempString.includes(this.props.query))
                      return (<div className="col" key={item.id}>
                          <Card item = {item} />
                      </div>)
                      if (item.id ==  parseInt(this.props.query))
                      return (<div className="col" key={item.id}>
                          <Card item = {item} />
                      </div>)
                      if (this.props.query === '') 
                        return (<div className="col" key={item.id}>
                          <Card item = {item} />
                      </div>)
                      
                  }) }
              </div>              
            </div>
        </>   
    )
  }
}

export default GridDisplay
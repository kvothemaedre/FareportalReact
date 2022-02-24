import axios from 'axios';
import React, { Component } from 'react'
import {Card, Accordion, ListGroup} from 'react-bootstrap';

const styleObject =  {
    containerStyle: {
        width: "18rem", 
        margin: "20px", 
        display: "inline-block"
    }
};

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        stock:{}
                     };
    }

    componentDidMount(){
        axios.get(this.props.apiUrl)
            .then(res => {
                this.setState({ stock : res.data.data});
                console.log(res.data.data);
            })
    }
  render() {
    return (
        <Card  border="warning" style={styleObject.containerStyle}>
            <Card.Body>
                <Card.Title style={{color : "#fd7e14"}}>Stock :  </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.state.stock.HN}</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item>Sector : {this.state.stock.SC_SUBSEC}</ListGroup.Item>
                    <ListGroup.Item>Current Price : {this.state.stock.pricecurrent}</ListGroup.Item>
                    <ListGroup.Item>Group : {this.state.stock.Group}</ListGroup.Item>
                    <ListGroup.Item>Total Sell Quantity : {this.state.stock.tot_sell_qty}</ListGroup.Item>
                </ListGroup>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Click for more info!</Accordion.Header>
                        <Accordion.Body>
                        {
                            <>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Market Cap : {this.state.stock.MKTCAP}</ListGroup.Item>
                                    <ListGroup.Item>200 Day Average : {this.state.stock['200DayAvg']}</ListGroup.Item>
                                </ListGroup>
                            </>
                        }
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
        
    )
  }
}

export default Stock
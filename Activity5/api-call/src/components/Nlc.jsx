import axios from 'axios';
import React, { Component } from 'react'
import {Card, Accordion, ListGroup} from 'react-bootstrap';


class Nlc extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        nlc:{}
                     };
    }

    componentDidMount(){
        axios.get(`https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC`)
            .then(res => {
                this.setState({ nlc : res.data.data});
            })
    }
  render() {
    return (
        <Card  border="warning" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title style={{color : "#fd7e14"}}>NLC :  </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.state.nlc.HN}</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item>Sector : {this.state.nlc.SC_SUBSEC}</ListGroup.Item>
                    <ListGroup.Item>Group : {this.state.nlc.Group}</ListGroup.Item>
                </ListGroup>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Click for more info!</Accordion.Header>
                        <Accordion.Body>
                        {
                            <>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Market Cap : {this.state.nlc.MKTCAP}</ListGroup.Item>
                                    <ListGroup.Item>200 Day Average : {this.state.nlc['200DayAvg']}</ListGroup.Item>
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

export default Nlc
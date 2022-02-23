import axios from 'axios';
import React, { Component } from 'react'
import {Card, Accordion, ListGroup} from 'react-bootstrap';

 class Sbi extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        sbi:{}
                     };
    }

    componentDidMount(){
        axios.get(`https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI`)
            .then(res => {
                this.setState({ sbi : res.data.data});
            })
    }
  render() {
    return (
        <Card border="warning" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title style={{color : "#fd7e14"}}>SBI :  </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.state.sbi.HN}</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item>Sector : {this.state.sbi.SC_SUBSEC}</ListGroup.Item>
                    <ListGroup.Item>Group : {this.state.sbi.Group}</ListGroup.Item>
                </ListGroup>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Click for more info!</Accordion.Header>
                        <Accordion.Body>
                        {
                            <>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Market Cap : {this.state.sbi.MKTCAP}</ListGroup.Item>
                                    <ListGroup.Item>200 Day Average : {this.state.sbi['200DayAvg']}</ListGroup.Item>
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

export default Sbi
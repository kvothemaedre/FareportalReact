import axios from 'axios'
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
export class FormCause extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            reason : '',
            money : 0,
        }
    }
    
    handleChange = (event) => {
        if (event.target.name === 'username') {
            this.setState({
                username: event.target.value
            });
        } else if (event.target.name === 'reason') {
            this.setState({
                reason: event.target.value
            });
        } else if (event.target.name === 'money') {
            this.setState({
                money: event.target.value
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let causeid = Date.now().toString().substring(12);

        const payload = {
            cid: parseInt(causeid),
            frid: this.state.username,
            reason: this.state.reason,
            money: parseInt(this.state.money)
        }
        this.setState({
            username:'',
            reason:'',
            money:0
        })
        console.log(payload)
        axios.post(`https://localhost:5001/api/Cause`,  payload ).then(res => {
            console.log(res);
            console.log(res.data);
        })
        
    }
  render() {
    return (
        <div className='w-50 '>
            <Form onSubmit={this.handleSubmit} >
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name = "username" value={this.state.username} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Reason for the fundraiser</Form.Label>
                <Form.Control type="text" value={this.state.reason} name = "reason" onChange={this.handleChange} />
            </Form.Group>         
            <Form.Group className="mb-3">
                <Form.Label>Target</Form.Label>
                <Form.Control type="number"  name="money"  value={this.state.money} onChange={this.handleChange} placeholder="Target" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        
    )
  }
}

export default FormCause
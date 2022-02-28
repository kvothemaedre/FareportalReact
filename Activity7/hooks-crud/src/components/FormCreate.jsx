import axios from 'axios'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const FormCreate  = (props) => {

    const [field, setField] = useState({
        username: '',
        reason: '',
        money: 0
    });

    const handleChange = (event) => {
        setField({
            ...field,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let causeid = Date.now().toString().substring(12);

        let payload = JSON.stringify({
            cid: parseInt(causeid),
            frid: field.username,
            reason: field.reason,
            money: parseInt(field.money)
        })
        
        
        axios.post(`https://localhost:5001/api/Cause`,  payload, {headers:{"Content-Type" : "application/json"}} ).then(res => {
            console.log(res);
            console.log(res.data);

        })
        console.log(payload);
        setField({
            username:'',
            reason:'',
            money: 0
        })
        window.location = '/all';

    }

    return (
        <div className='w-50 '>
            <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name = "username" value={field.username} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Reason for the fundraiser</Form.Label>
                <Form.Control type="text" value={field.reason} name = "reason" onChange={handleChange} />
            </Form.Group>         
            <Form.Group className="mb-3">
                <Form.Label>Target</Form.Label>
                <Form.Control type="number"  name="money"  value={field.money} onChange={handleChange} placeholder="Target" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        
    )
  
}

export default FormCreate
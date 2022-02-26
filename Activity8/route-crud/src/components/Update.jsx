import  { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
const Update = (props) => {
    let id = 0;

    const [username, setUsername] = useState('');
    const [reason, setReason] = useState('');
    const [money, setMoney] = useState(0);
    const [cid, setCid] = useState(0);

    const handleChange = (event) => {
        if (event.target.name === 'username') {
            setUsername(
                event.target.value
            );
        } else if (event.target.name === 'reason') {
            setReason(
                event.target.value
            );
        } else if (event.target.name === 'money') {
            setMoney(
                event.target.value
            )
        } else if (event.target.name === 'cid') {
            setCid (
                event.target.value
            )
        }
    }

    useEffect(() => {
            axios.get(`https://localhost:5001/api/Cause/${props.match.params.id}`).then(res => {
            setUsername(res.data.frid);
            setCid(id);
            setReason(res.data.reason);
            setMoney(res.data.money);
        })
        },[id])
    

    const handleSubmit = (event) => {
        event.preventDefault();

        let payload = JSON.stringify({
            cid: props.match.params.userId,
            frid: username,
            reason: reason,
            money: parseInt(money)
        })
        
        
        axios.put(`https://localhost:5001/api/Cause/${props.match.params.userId}`,  payload, {headers:{"Content-Type" : "application/json"}} ).then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log(payload);
        setMoney(0);
        setReason('');
        setUsername('');
        window.location="/"
    } 

  return (
    <div className='w-50 '>
      <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name = "username" value={username} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Reason for the fundraiser</Form.Label>
                <Form.Control type="text" value={reason} name = "reason" onChange={handleChange} />
            </Form.Group>         
            <Form.Group className="mb-3">
                <Form.Label>Target</Form.Label>
                <Form.Control type="number"  name="money"  value={money} onChange={handleChange} placeholder="Target" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update
            </Button>
            </Form>
        
    </div>
  )
}

export default Update;
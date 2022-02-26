import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

const CauseCard = (props) => {
  const {item} = props;
  const stringURL = "/update/" + item.cid;
  const styleObject =  {
      containerStyle: {
          width: "18rem", 
          margin: "20px", 
          minHeight:"15vh",
          display: "inline-block"
      }
  };
  const handleClick = (event) => { 
    event.preventDefault();
    axios.delete(`https://localhost:5001/api/Cause/${event.target.id}`)
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
    window.location="/"
}
  return (
      <Card style={styleObject.containerStyle} className="h-100">
        <Card.Body>
          <Card.Title>Fundraiser by </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{item.frid.trimEnd()}</Card.Subtitle>
          <Card.Text>
            Reason : {item.reason}
          </Card.Text>
          <Card.Text>
            Target : {item.money}
          </Card.Text>
          <Link to = {stringURL} className="btn btn-warning">Modify</Link>{' '}
          <Button variant="danger" onClick = {handleClick} id = {item.cid}>Delete</Button>
        </Card.Body>
      </Card>   
  )
}


export default CauseCard
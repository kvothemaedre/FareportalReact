import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
const CardHome = ({func, body, url}) => {
  return (
    <Card className="mb-4">
    <Card.Header>{func}</Card.Header>
    <Card.Body>    
        <Link to= {url}>
          <Card.Text>
              {body}
          </Card.Text>
        </Link>
    </Card.Body>
    </Card>
  )
}

export default CardHome;
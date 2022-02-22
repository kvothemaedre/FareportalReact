import React, { Component } from 'react'

const Card = (props) => {
  const {item} = props;
  const name = props.name;

  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={item.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Name : {`${item.firstName} ${item.lastName}` }</h5>
          <p className="card-title">ID : {item.id}</p>
          <p className='card-subtitle  mb-2 text-muted'>{item.email}</p>
          <p className='card-subtitle mb-2 text-muted'>gender : {item.gender}</p>
        </div>
      </div>
  )
}


export default Card
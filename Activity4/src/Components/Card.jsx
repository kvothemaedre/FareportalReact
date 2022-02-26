import React from 'react'

const Card = (props) => {
  const {item} = props;
  const styleObject =  {
      containerStyle: {
          width: "18rem", 
          margin: "20px", 
          display: "inline-block"
      }
  };

  return (
    <div className="card" style={styleObject.containerStyle}>
        <div className="card-body">
          <h5 className="card-title">Name : {`${item.firstName} ${item.lastName}` }</h5>
          <p className="card-title">ID : {item.id}</p>
          <p className='card-subtitle  mb-2 text-muted'>{item.reason}</p>
          <p className='card-subtitle mb-2 text-muted'> {item.money}</p>
        </div>
      </div>
  )
}


export default Card
import React from 'react';
import { Card } from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.product)
    const {courses,free,img,history}= props.product
    return (
        <div className="row ">
           <div className="col-md-6 cart">
           <>
  <Card className="cart"  border="primary" style={{ width: '48rem' }}>
  <Card.Title  style={{ color:'blueviolet' }}>{courses}</Card.Title>
    <Card.Body>
    <Card.Header  style={{ color:'gray' }}>Education Now:${free}</Card.Header>
      
      <Card.Text>
        {history}
      </Card.Text>
      <button className="btn">Start now</button>
    </Card.Body>
  </Card>
 
</>
           </div>
           <div className="col-md-6 imgss">
                <img src={img} alt="" />
                 <br />
                <button className="Btn">Details</button>
           </div>
        </div>
    );
};

export default Cart;
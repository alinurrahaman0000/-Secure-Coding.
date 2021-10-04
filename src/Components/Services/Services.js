import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Services.css'

const Services = () => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <h1 className="title">Welcome to the programming course !!!</h1> 
             {
              product.map(product =><Cart
              key={product.key}
                product ={product}
              ></Cart>
             
              )
          }
            
         
        </div>
        
    );
};

export default Services;
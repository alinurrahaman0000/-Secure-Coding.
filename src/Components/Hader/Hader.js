import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Courses from '../Courses/Courses';
import './Hader.css'
const Hader = () => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('./hade.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div>
              
           
        <h2 className="title">Top 4 programming languages</h2>
          {
              product.map(product => <Courses
              key={product.key}
              product ={product}
              ></Courses>)
          }

        </div>
    );
};

export default Hader;
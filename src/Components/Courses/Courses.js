import React from 'react';
import '../Courses/Courses.css'
const Courses = (props) => {
    // console.log(props.product)
    const {courses,img,history}= props.product
    return (
      
       <div>
         
           <div className="row">
             <div className="col-md-6 imgs">
                    <img src={img} alt="" />
             </div>
             <div className="col-md-6 history">
                    <h2>{courses}</h2>
                    <p>{history} <br />
                    <button className ="btn">Details</button>
                    </p>
                    
             </div>
         </div>
       </div>
       
    );
};

export default Courses;
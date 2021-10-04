import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'
import  '../About/contact/aaa.jpg'


const Contact = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                
               <h1>Our Location</h1>
               <p>Collin Street West, Victor 8007,Australia</p>
            </div>
            <div className="col-md-4">
              
                    <h1>Our Number</h1>
                    <p>Mobile: (+099) 468 235</p>

            </div>
            <div className="col-md-4">
                <h1>Our Email</h1>
                <p>info@edumy.com</p>
            </div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <>
  <Form.Label>Range</Form.Label>
  <Form.Range />
  
</>
  <Button className="btn"  type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Contact;
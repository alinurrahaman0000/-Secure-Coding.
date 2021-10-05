import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div className="about">
<h1>The Story of Secure Coding</h1>
          <p>CodersTrust was founded in 2014 by global business leader Mr. Aziz Ahmad, a proud Bangladeshi-American technologist and visionary, along with co-founder Danish Military Captain Ferdinand Kearwolf with a dream to bring applied education to the mass population at an affordable cost. By empowering individuals with the skills to break the traditional career challenges, making the local workforce meet the requirements of global skill demand, and helping them earn their living by learning modern digital skills.

Headquartered in Copenhagen, Denmark, CodersTrust operated in 11 countries in various projects with Danida, UNDP, World Bank, World Food Programme, The Rockefeller Foundation, Save the Children, and Dutch Foundation. Our work received support from the Danish International Development Agency, the United Nations Development Program, and a handful of venture capital funds from around the world.

In 2015 we started our operation in Bangladesh, with one campus in Dhaka and only one lab. One with residential facilities, we have five modern campuses in Dhaka, 11 fully equipped labs, and nearly 150 team members. Soon we are expanding our operation outside of Dhaka, starting with Chattogram and Khulna, with dreams of reaching the remote parts of the country.

Since the activation, CodersTrust Bangladesh has made over 25,000+ people self-employed by contributing to international online IT jobs and has achieved the reputation as one of the most trusted skill development institutes in Bangladesh.</p>
<h1>Our Mission</h1>
<p>The mission of CodersTrust is to connect underprivileged, disadvantaged, and marginalized groups of people – especially youth and women – to education and online labor markets thus, significantly increasing quality income-earning opportunities and economic independence. Combining education and job creation forges is a unique ecosystem. Here people are connected globally with a purpose and mutual benefit.

“Learn a Skill; the World is Yours”

CodersTrust Bangladesh believes that investing in the education of youths is something from which everyone will get benefited. The local and freelance market will have more qualified workers; our students will become financially independent equipped with modern skills, and nations like Bangladesh can earn a sizeable amount of foreign currency through online labor markets. Having that in mind, we aim to train 200,000 people in Bangladesh by 2022.</p>

           <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button className="btn" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default About;
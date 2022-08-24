import React, {useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './ContactUs.css'



const ContainerNew = styled(Container)`
width:60%;
height:100%;
background-color:white;
padding:50px 20px 50px 20px;
border-radius:8px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const ContactUs = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log('hit');
  
      emailjs.sendForm('service_557ygme', 'template_y50gsku', form.current, 'AaRJt3whIiVsJYt2x')
        .then((result) => {
            console.log(result.text);
            alert('Email send');
        }, (error) => {
            console.log(error.text);
            alert('Email not send please try in a few seconds');

        });
    };
   

  return (
    <div className="bodyOfContact">
        <ContainerNew>
    <Form ref = {form} onSubmit={sendEmail}>
    <Form.Group className='mb-3' style={{display:'grid'}}>
    <Form.Label style={{fontWeight:'bolder'}}><b><i>Want Connection?</i></b></Form.Label>
    <Form.Label><b><i>Submit Form</i></b></Form.Label>

    <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" name="name"/>
      </Form.Group>


    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"/>
        <Form.Text className="text-muted" >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter number" name="phone_Number"/>
        <Form.Text className="text-muted">
          We'll never share your number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" name="address"/>
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label>Select Package Name</Form.Label>
          <Form.Select aria-label="Default select example" name="package">
            <option>Packages</option>
            <option value="10">10 mb</option>
            <option value="20">20 mb</option>
            <option value="30">30 mb</option>
            <option value="40">35 mb</option>
            <option value="50">40 mb</option>
            <option value="60">50 mb</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Date</Form.Label>
        <Form.Control value={date} name="date" readOnly='true'/>
      </Form.Group>


      <Button variant="primary" type="submit" style={{marginTop:'40px'}}>
        Submit
      </Button>
    </Form>
    </ContainerNew>
    </div>
  )
}

export default ContactUs

import React, { useState } from "react";
import "../styles/booking-form.css";
import { Form, FormGroup } from "react-bootstrap";
import { Container, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import carData from "../assets/carData.js";
import Submit from "../components/Submit.js";
import { useParams } from "react-router-dom";
const BookingForm = () => {
  const { productId } = useParams();
  let car = carData[productId-1];
  const [modalShow, setModalShow] = React.useState(false);
  const { id, carName, isAvailable } = car;
  let [idate, setIdate] = useState();
  let [rdate, setRdate] = useState();
  const submitHandler = (event) => {
    
    car.isAvailable = false;
    console.log(car);
    event.preventDefault();
  };

  const CommonSection = ({ title }) => {
    return (
      <section className="common__section mb-5">
        <Container className="text-center">
          <h1 className="text-light">{title}</h1>
        </Container>
      </section>
    );
  };

  return (

    <section>
      <CommonSection title="Car Listing" />
      <Container>
        <Col lg="7" className="mt-5">
          <div className="booking-info mt-5">
            <h5 className="mb-4 fw-bold ">Booking Information</h5>
            <Form onSubmit={submitHandler}>
              <FormGroup required className="booking__form d-inline-block me-4 mb-4">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="john"

                />
              </FormGroup>
              <FormGroup required className="booking__form d-inline-block ms-1 mb-4">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Doe"

                />
              </FormGroup>

              <FormGroup required className="booking__form d-inline-block me-4 mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"

                />
              </FormGroup>
              <FormGroup required className="booking__form d-inline-block ms-1 mb-4">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  required
                  type="Number"
                  placeholder="+91"

                />
              </FormGroup>


              <FormGroup required className="booking__form d-inline-block me-4 mb-4">
                <Form.Label>Issue Date</Form.Label>
                <Form.Control
                  onChange={(e)=>{setIdate(e.target.value); console.log(idate)} }
                  required
                  type="date"
                  placeholder="Issue Date"

                />
              </FormGroup>
              <FormGroup required className="booking__form d-inline-block me-4 mb-4">
                <Form.Label>Return Date</Form.Label>
                <Form.Control
                  onChange={(e)=>{setRdate(e.target.value)}}
                  required
                  type="date"
                  placeholder="Return Date"

                />
              </FormGroup>


              <FormGroup required>
                <Form.Label>Extra Details</Form.Label>
                <textarea
                  rows={5}
                  type="textarea"
                  className="textarea"
                  placeholder="Write"
                ></textarea>
              </FormGroup>
              <FormGroup required className="booking__form d-inline-block me-4 mb-4">
              <Button type="submit" variant="primary" onClick={() => setModalShow(true)}>Book Car</Button>
              <Submit
                show={modalShow}
                onHide={() => setModalShow(false)}
                issuedate = {idate}
                returndate = {rdate}
                name = {carName}
              />
              </FormGroup>
              
            </Form>
          </div>
        </Col>
      </Container>
    </section>

  );
};

export default BookingForm;
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

function Submit(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Booking Confirmed !
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
            <h4>You have booked :  </h4>
              {props.name}
              </div>
               <div>
            <h4>Duration of Booking :  </h4>
              {props.issuedate}  to  {props.returndate}
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={props.onHide}><Link to={`/`}>Close</Link></Button>
          </Modal.Footer>
        </Modal>
      );
  }


export default Submit;
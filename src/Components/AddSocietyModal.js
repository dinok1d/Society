import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import societyStore from "../Stores/societyStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// Add a form for the user to create their own jam3ya. Once created, the jam3ya should appear in the homepage.

// backend route to create a jam3ya:
// https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya
// type: post
// data required: (USER SHOULD BE SIGNED IN)
// - title : string, the title of the jam3ya
// - image : string, an image URL
// - amount : int, the amount the user should pay monthly
// - limit : int, the limit of people that can join the jam3ya
// - startDate : Date, the date that the jam3ya starts in
// - endDate : Date, the date that the jam3ya ends at

export default function AddCourseModal(props) {
  const [society, setSociety] = useState({
    title: "",
    image: "",
    amount:"",
    limit:"",
    startDate:"",
    endDate:"",
    
  });
  const handleChange = (event) => {
    setSociety({ ...society, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    societyStore.createCourse(society);
    props.closeModal();
  };
  return (
    <Modal
      show={props.isOpen}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Course title</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="title"
              placeholder="Enter course title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image url</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="image"
              placeholder="Enter image url"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              name="amount"
              placeholder="Enter the amount"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>limit of people who can join</Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              name="limit"
              placeholder="Enter amount of people who can join"
            />
          </Form.Group>
        
          <Form.Group className="mb-3">
            <Form.Label>start Date</Form.Label>
            <DatePicker
              selected={society.startDate}
              onChange={(date) => setSociety({ ...society, startDate: date })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <DatePicker
              selected={society.endDate}
              onChange={(date) => setSociety({ ...society, endDate: date })}
            />
          </Form.Group>
          
         
          

          
        </Form>
        <p>only registered users can create courses</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleSubmit}>
          Add a Society
        </Button>
        <Button variant="warning" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

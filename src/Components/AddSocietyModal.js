import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import societyStore from "../Stores/societyStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddCourseModal(props) {
  const [society, setSociety] = useState({
    title: "",
    image: "",
    amount: "",
    limit: "",
    startDate: "",
    endDate: "",
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
        <Modal.Title id="contained-modal-title-vcenter">Add Jam3ya</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Jam3ya title</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="title"
              placeholder="Enter Jam3ya title"
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
        <p>only registered users can create Jam3ya</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          class="btn btn-secondary"
          variant="warning"
          onClick={handleSubmit}
        >
          Add a Jam3ya
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          variant="warning"
          onClick={props.closeModal}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import societyStore from "../Stores/societyStore";

export default function UpdateSocietyModal(props) {
  const [society, setSociety] = useState({
    title: props.society.title,
    image: props.society.image,
    amount: props.society.amount,
    limit: props.society.limit,
  });
  const handleChange = (event) => {
    setSociety({ ...society, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    societyStore.updateSociety(props.society._id, society);
    props.closeModal();
  };
  const handleDelete = () => {
    societyStore.deleteSociety(props.society._id);
    props.closeModal();
  };

  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update Jam3ya</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Jam3ya Title:</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              value={society.title}
              name="title"
              placeholder="Enter Jam3ya title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image (url):</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              value={society.image}
              name="image"
              placeholder="Enter image url:"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount:</Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              value={society.amount}
              name="amount"
              placeholder="Enter the amount"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Limit of people who can join:</Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              value={society.limit}
              name="limit"
              placeholder="Enter amount of people who can join"
            />
          </Form.Group>{" "}
          <button
            ClassName="btn btn-secondary"
            variant="primary"
            onClick={handleSubmit}
          >
            Update Jam3ya
          </button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="delete btn btn-secondary" onClick={handleDelete}>
          Delete Society
        </button>
      </Modal.Footer>
    </Modal>
  );
}

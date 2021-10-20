import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import authStore from "../Stores/authStore";

export default function SigninModal(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.signIn
      ? authStore.logging(user, "signIn")
      : authStore.logging(user, "signUp");
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
        <Modal.Title id="contained-modal-title-vcenter">
          SignUp/SignIn
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="Enter your username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Enter your password"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          class="btn btn-secondary"
          variant="warning"
          onClick={handleSubmit}
        >
          {props.signIn ? "Sign in" : "Sign up"}
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

import React from "react";
import { Modal } from "react-bootstrap";
function DetailedSociety({ society, detail, closedetail }) {
  return (
    <Modal
      show={detail}
      onHide={closedetail}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <img src={society.image} />
        <p>{society.title}</p>
        <p>{society.startDate}</p>
        <p>{society.endDate}</p>
        <p>{society.amount}</p>
        <p>{society.author}</p>
      </div>
    </Modal>
  );
}

export default DetailedSociety;

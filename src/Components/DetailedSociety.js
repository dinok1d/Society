import React from "react";
import { Modal } from "react-bootstrap";
function DetailedSociety({ item, isOpen, closeModal }) {
  return (
    <Modal
      show={isOpen}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <img src={item.image} />
        <p>{item.title}</p>
        <p>{item.startDate}</p>
        <p>{item.endDate}</p>
        <p>{item.amount}</p>
        <p>{item.author.username}</p>
      </div>
    </Modal>
  );
}

export default DetailedSociety;

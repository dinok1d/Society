import React from "react";
import { Modal } from "react-bootstrap";
function DetailedSociety({ society, opendetail, closeDetail }) {
  return (
    <Modal
      show={opendetail}
      onHide={closeDetail}
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
        <p>{society.author.username}</p>
      </div>
      <button className=" btn btn-secondary" onClick={closeDetail}>
        close
      </button>
    </Modal>
  );
}

export default DetailedSociety;

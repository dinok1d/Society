import React from "react";
import Moment from "react-moment";
import { Card } from "react-bootstrap";
import { useState } from "react";
import societyStore from "../Stores/societyStore";
import UpdateSocietyModal from "./UpdateSociety";

function EachSociety({ society, SetItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div
      className="item col m-4 heartbeat "
      onClick={() => {
        SetItem(society);
      }}
    >
      <Card style={{ width: "18rem", borderRadius: "10px" }}>
        <Card.Img
          variant="top"
          src={society.image}
          style={{ height: "18rem" }}
        />
        <Card.Body style={{ height: "18rem" }}>
          <Card.Title className="font">
            <h4>{society.title}</h4>
          </Card.Title>
          <Card.Text>
            <div>
              <strong>Amount:</strong> {society.amount}
            </div>
            <div>
              <strong>Start Date: </strong>
              <Moment format="DD/MM/YYYY">{society.startDate}</Moment>
            </div>
            <div>
              <strong>End Date: </strong>
              <Moment format="DD/MM/YYYY">{society.endDate}</Moment>
            </div>
            <div>
              <strong>Author:</strong> {society.author.username}
            </div>
            <div>
              <strong>Joined Users:</strong>
            </div>
          </Card.Text>
        </Card.Body>
        //{" "}
        <button className=" btn btn-secondary" onClick={openModal}>
          // Update //{" "}
        </button>
        <UpdateSocietyModal
          isOpen={isOpen}
          closeModal={closeModal}
          society={society}
        ></UpdateSocietyModal>
      </Card>
    </div>
  );
}

export default EachSociety;

import React, { useState } from "react";
import societyStore from "../Stores/societyStore";
import EachSociety from "./EachSociety";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";
import { Button } from "react-bootstrap";
import AddCourseModal from "./AddCourseModal";
import Searchbar from "./Searchbar";
import Moment from "react-moment";
import "moment-timezone";

function SocietyList() {
  const [course, setCourse] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // if (authStore.user) {
  //   societyStore.fetchsociety();
  // }
  // const today = Date.now();
  // Moment().format("MMMM Do YYYY, h:mm:ss a");
  // // console.log(today);

  const societies = societyStore.societies
    .filter((society) =>
      society.title.toLowerCase().includes(course.toLowerCase())
    )
    // .filter((society) => society.startDate > society.date)

    // .filter((society) => society.amount > Number(course))

    .map((society) => {
      return <EachSociety society={society} />;
    });

  return (
    <section id="courses" class="course-area pt-140 pb-170 hero-area bg_cover">
      <Searchbar setCourse={setCourse} />
      <div class="container">
        <Button variant="warning" onClick={openModal}>
          Add a Society
        </Button>
        <AddCourseModal isOpen={isOpen} closeModal={closeModal} />
        <div class="row mb-30 mt-30">{societies}</div>
      </div>
    </section>
  );
}

export default observer(SocietyList);

import React, { useState } from "react";
import societyStore from "../Stores/societyStore";
import EachSociety from "./EachSociety";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";
import { Button } from 'react-bootstrap';
import AddCourseModal from "./AddCourseModal";


function SocietyList() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // if (authStore.user) {
  //   societyStore.fetchsociety();
  // }

  const societies = societyStore.societies.map((society) => {
    return  <EachSociety society={society} />
  });
  

  return(
    <section id="courses" class="course-area pt-140 pb-170 hero-area bg_cover">
    <div class="container">
      <Button variant="warning" onClick={openModal}>
        Add a Society
      </Button>
      <AddCourseModal isOpen={isOpen} closeModal={closeModal} />
      <div class="row mb-30 mt-30">{societies}</div>
    </div>
  </section>
  )
}

export default observer(SocietyList);

import React, { useState } from "react";
import societyStore from "../Stores/societyStore";
import EachSociety from "./EachSociety";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";
import { Button } from "react-bootstrap";
import AddSocietyModal from "./AddSocietyModal";
import Searchbar from "./Searchbar";
import DetailedSociety from "./DetailedSociety";

function SocietyList() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [item, SetItem] = useState("");
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
      society.title.toLowerCase().includes(query.toLowerCase())
    )
    // .filter((society) => society.startDate > society.date)

    // .filter((society) => society.amount > Number(course))

    .map((society) => {
      return <EachSociety society={society} SetItem={SetItem} />;
    });

  return (
    <section id="courses" class="course-area pt-140 pb-170 hero-area bg_cover">
      <Searchbar setQuery={setQuery} />
      <div class="container">
        <button
          variant="warning"
          type="button"
          class="btn btn-secondary position-relative m-2 w-25 form-control "
          onClick={openModal}
        >
          Add a Jam3ya
        </button>
        <AddSocietyModal isOpen={isOpen} closeModal={closeModal} />
        {/* <DetailedSociety item={item} isOpen={isOpen} closeModal={closeModal} /> */}
        <div class="row mb-30 mt-30">{societies}</div>
      </div>
    </section>
  );
}
// i need add a pop up for the detailled components
export default observer(SocietyList);
// i need to make a variable to that will pick a date using datepicker, and then replace it in line 27

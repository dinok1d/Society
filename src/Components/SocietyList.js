import React, { useState } from "react";
import societyStore from "../Stores/societyStore";
import EachSociety from "./EachSociety";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";

import AddSocietyModal from "./AddSocietyModal";
import Searchbar from "./Searchbar";

function SocietyList() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [item, SetItem] = useState("");
  const [start, setStart] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  console.log(item);
  const today = new Date();

  const societies = societyStore.societies
    .filter((society) =>
      society.title.toLowerCase().includes(query.toLowerCase())
    )
    .filter((society) => {
      if (start) {
        if (new Date(society.startDate) > today) {
          return society;
        }
      } else {
        return society;
      }
    })

    .map((society) => {
      return <EachSociety society={society} SetItem={SetItem} />;
    });

  return (
    <section id="courses" class="course-area pt-140 pb-170 hero-area bg_cover">
      <Searchbar setQuery={setQuery} setStart={setStart} start={start} />
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

        <div class="row mb-30 mt-30">{societies}</div>
      </div>
    </section>
  );
}

export default observer(SocietyList);

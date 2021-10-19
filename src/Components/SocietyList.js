import React from "react";
import societyStore from "../Stores/societyStore";
import EachSociety from "./EachSociety";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";

function SocietyList() {
  // if (authStore.user) {
  //   societyStore.fetchsociety();
  // }

  const societies = societyStore.societies.map((society) => {
    return  <EachSociety society={society} />
  });

  return(
   <div>{societies}</div>
  )
}

export default observer(SocietyList);

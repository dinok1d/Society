import React from "react";
import societyStore from "../Stores/societyStore";
import EachSociety from "./EachSociety";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";
function SocietyList() {
  if (authStore.user) {
    societyStore.fetchsociety();
  }

  const societies = societyStore.societies.map((society) => (
    <EachSociety society={society} />
  ));

  console.log(societyStore);
  // const cookieList = cookiesData.map(cookie => (
  //     <CookieItem cookie={cookie} />// we need to pass each info in the array as an element

  return;
}

export default observer(SocietyList);

import { makeAutoObservable } from "mobx";
import api from "./api";
class SocietySTore {
  societies = [];

  constructor() {
    makeAutoObservable(this, {});
  }
  fetchsociety = async () => {
    try {
      const response = await api.get("/jam3ya");
      console.log(response.data);

      this.societies = response.data;
    } catch (error) {
      console.error("societyStore -> fetchsociety -> error", error);
    }
  };
}

const societyStore = new SocietySTore();
societyStore.fetchsociety();
export default societyStore;

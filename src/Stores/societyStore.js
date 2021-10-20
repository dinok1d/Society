import { makeAutoObservable } from "mobx";
import api from "./api";
class SocietySTore {
  societies = [];

  constructor() {
    makeAutoObservable(this, {});
  }

  createSociety = async (society) => {
    try {
      const res = await api.post("/jam3ya", society);
      this.societies.push(res.data);
    } catch (error) {
      console.log("createSociety -> createSociety -> error", error);
    }
  };

  fetchsociety = async () => {
    try {
      const response = await api.get("/jam3ya");
      // console.log(response.data);

      this.societies = response.data;
    } catch (error) {
      console.error("societyStore -> fetchsociety -> error", error);
    }
  };

  deleteSociety = async (jam3yaId) => {
    try {
      await api.delete(
        `/jam3ya/${jam3yaId}`
      );
      this.societies = this.societies.filter((society) => society._id !== jam3yaId);
    } catch (error) {
      console.log(error);
    }
  };
}

const societyStore = new SocietySTore();
societyStore.fetchsociety();
export default societyStore;

import { makeAutoObservable } from "mobx";
import api from "./api";
class SocietySTore {
  societies = [];

  constructor() {
    makeAutoObservable(this, {});
  }

  createCourse = async (society) => {
    try {
      const res = await api.post("/jam3ya", society);
      this.societies.push(res.data);
    } catch (error) {
      console.log("CoursesStore -> createCourse -> error", error);
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
}

const societyStore = new SocietySTore();
societyStore.fetchsociety();
export default societyStore;

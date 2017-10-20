import axios from "axios";

const dishes = axios.create({
  baseURL: "http://localhost:3000/api"
});

const api = {
  getDishes: () => {
    return dishes.get("/dishes").then(response => {
      return response.data;
    });
  }
};

export default api;

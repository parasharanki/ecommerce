import axios from "axios";

const instance = axios.create({
  // baseURL:import.meta.env.VITE_API_URL,
  // baseURL:"http://localhost:4000/api/product",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
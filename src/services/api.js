import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotesapi-kpff.onrender.com",
});
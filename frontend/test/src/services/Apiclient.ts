import axios from "axios";

export const axiosInstance = axios.create({
  url: "http://localhost/lab1/backend/routes",
});


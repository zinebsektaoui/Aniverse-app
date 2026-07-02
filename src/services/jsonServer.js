import axios from "axios";

const jsonServer = axios.create({
  baseURL: import.meta.env.VITE_JSON_SERVER,
});

export default jsonServer;
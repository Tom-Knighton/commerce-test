"server only";
import axios from "axios";

const client = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    env: process.env.NODE_ENV,
  },
});

export { client };

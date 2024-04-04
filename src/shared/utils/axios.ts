import axios from "axios";

const BASE_URL = process.env.API_URL || "";

const axiosSetup = axios.create({
  baseURL: BASE_URL,
});

export default axiosSetup;

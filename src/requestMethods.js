import axios from "axios";

const Base_URL = "https://ec-server-alpha.herokuapp.com/api";

export const publicRequest = axios.create({
  baseURL: Base_URL,
});

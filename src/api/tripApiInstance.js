import axios from "axios";

const tripApiInstance = axios.create({
  baseURL: "http://api.opentripmap.com/0.1/ru"
});

export default tripApiInstance;
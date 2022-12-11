import axios from "axios";

export const getSampleProducts = (url) => {
  return axios.get(url);
};

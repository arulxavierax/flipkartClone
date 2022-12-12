import axios from "axios";

export const getSampleProducts = (endpoint) => {
  return axios.get(
    `https://flipkartbackend-production.up.railway.app/products/category?filter=${endpoint}`
  );
};

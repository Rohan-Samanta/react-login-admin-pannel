import axios from "axios";

const BASE_URL = "https://630369f20de3cd918b34e39e.mockapi.io";

export const statsData = async () => {
  return await axios.get(`${BASE_URL}/transactionstats`);
};

export const userData = async () => {
  return await axios.get(`${BASE_URL}/users`);
};

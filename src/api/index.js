import { apiUrl } from "../constants";
import axios from "axios";

export async function getCards(page = 1, query = "") {
  return await axios
    .get(`${apiUrl}card/?page=${page}${query}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("err: ", err));
}

export async function getCard(id) {
  return await axios
    .get(`${apiUrl}card/${id}/`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("err: ", err));
}

export async function getTransactions(page = 1, query = "") {
  return await axios
    .get(`${apiUrl}transaction/?page=${page}${query}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("err: ", err));
}

export async function getTransaction(id) {
  return await axios
    .get(`${apiUrl}transaction/${id}/`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("err: ", err));
}

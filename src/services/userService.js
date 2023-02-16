import axios from "axios";
import { BASE_URL } from "../constants/constants";


export const loginUser = async (body) => {
    let result;
    const url = `${BASE_URL}/api/admin/login`;

    await axios
      .post(url, body)
      .then((response) => {
        result = response.data;
      })
      .catch((err) => {
        result = {
          status: "desconnected",
          message: "No internet connection",
        };
      });

    return result;
}


export const getUserData = async () => {
  let result;
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('userId');
  const url = `${BASE_URL}/api/admin/${id}`;

  await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      result = response.data;
    })
    .catch((err) => {
      result = {
        status: "desconnected",
        message: "No internet connection",
      };
    });

  return result;
}




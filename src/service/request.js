import axios from "axios";

const request = axios.create({
  baseURL: "https://mmo-games.p.rapidapi.com",
});

export const requestGet = (url, params) => {
  return request.request(url, {
    method: "GET",
    params,
    headers: {
      "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      "x-rapidapi-key": "5e2a986dbdmshea717264be9bb13p1d003ejsn623411f0c65a",
    },
  });
};

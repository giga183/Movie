import axios from "axios";

const privateAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
});

export { privateAxios };

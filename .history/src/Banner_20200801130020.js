import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./Requests";
import requests from "./Requests";
const [movie, setMovie] = useState([]);

useEffect(() => {
  async function fetchBanner() {
    const result = axios.get(requests.fetchTrending);
    setMovie(result.data.results);
  }
  fetchBanner();
}, []);
const Banner = () => {
  return <div></div>;
};

export default Banner;

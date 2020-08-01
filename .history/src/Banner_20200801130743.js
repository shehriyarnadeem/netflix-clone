import React, { useState, useEffect } from "react";
import axios from "./axios";

import requests from "./Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchBanner() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(request.data.results[0]);
      return request;
    }
    fetchBanner();
  }, []);

  return (
    <>
      <div className="banner__contents"></div>
      <header>sdsd</header>
    </>
  );
};

export default Banner;

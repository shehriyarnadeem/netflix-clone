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

  console.log(movie);
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        </div>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Play</button>
        </div>
      </header>
    </>
  );
};

export default Banner;

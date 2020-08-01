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
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundSize: "cover",

          height: 200,
        }}
      >
        <div className="banner__contents">
          <h2>{movie?.name || movie?.title || movie?.original_name}</h2>
        </div>
      </header>
    </>
  );
};

export default Banner;

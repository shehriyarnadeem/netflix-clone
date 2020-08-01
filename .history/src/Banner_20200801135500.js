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
      <header
        className="banner"
        style={{
          bacgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?movie.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
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

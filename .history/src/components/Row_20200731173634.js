import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../Requests";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(requests.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title} </h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return <img src="" alt="" />;
        })}
      </div>
    </div>
  );
};

export default Row;

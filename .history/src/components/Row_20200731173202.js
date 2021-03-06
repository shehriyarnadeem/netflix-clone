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
  }, [fetchUrl]);
  return (
    <div>
      <h2>{title} </h2>
      {/* container->posters */}
    </div>
  );
};

export default Row;

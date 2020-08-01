import React, { useState, useEffect } from "react";
import axios from "../axios";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get(fetchUrl);
    }
  }, []);
  return (
    <div>
      <h2>{title} </h2>
      {/* container->posters */}
    </div>
  );
};

export default Row;

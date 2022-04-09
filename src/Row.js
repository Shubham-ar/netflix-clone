import React, { useState, useEffect } from "react";
import axios from "./axios";

import "./Row.css";
// the import is default so we can use any name instead of the 'instance' we exported in axios.
const base_url = "https://image.tmdb.org/t/p/original/";
// for the images, can be found in the tmdb documentation

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // we need a snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // async function fetchData() {
    // } arrow functions are cool.
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container -> posters */}
        <div className="row__posters">
          {movies.map((movie) => (
            <img
              // key is unique to the react, key means that if anything changes in the row, then react does not
              //   renders the entire row, it just renders what needs to be rendered
              // this is an optimization step
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
  );
};

export default Row;

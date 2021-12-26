import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

export const fetchApi = () => {
  const [isLoaded, setLoaded] = useState(false);

  const fetchMovies = () => {
    try {
      const response = fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=b8c69e73ca2b06d4109ce06d6df842ad&page=1`
      );
      if (!response.ok) {
        setLoaded(false);
        throw new Error(response.status);
      } else {
        return response.json();
      }
    } catch (err) {
      setLoaded(false);
      return console.log(err);
    }
  };
};
export default fetchApi;

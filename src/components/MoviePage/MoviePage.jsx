import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  async function fetchApi(id) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b8c69e73ca2b06d4109ce06d6df842ad`
      );
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    } catch (err) {
      return console.log(err);
    }
  }
  function renderMovie() {
    fetchApi()
      .then((response) => {
        setMovie(response);
        // console.log(response);
        console.log(movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //   useEffect(() => {

  // })
  return (
    <>
      <NavBar />
    </>
  );
};

export default MoviePage;

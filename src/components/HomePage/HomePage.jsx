import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import MovieItems from "../MovieItems/MovieItems";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  async function fetchApi() {
    try {
      const response = await fetch(
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
  }
  function renderMovies() {
    fetchApi()
      .then((response) => {
        setMovies(response);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (!isLoaded) {
      renderMovies();
    }
  });
  return (
    <>
      <section>
        <h2 className={s.header}>Top Trending Movies</h2>
        <ul className={s.HomePageList}>
          <>
            {isLoaded === false ? (
              <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
            ) : (
              movies.results.map(({ id, original_title }) => (
                <MovieItems key={id} id={id} title={original_title} />
              ))
            )}
          </>
        </ul>
      </section>
    </>
  );
};

export default HomePage;

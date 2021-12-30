import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get("query");

  const fetchSearchMovies = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b8c69e73ca2b06d4109ce06d6df842ad&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formQuery = form.elements.query.value;
    setSearchQuery({ query: formQuery });
    if (formQuery === "") {
      return;
    }
    fetchSearchMovies(query);
    form.reset();
  };

  useEffect(() => {
    if (query === null || query === "") {
      setMovies([]);
      return;
    }
    fetchSearchMovies(query);
  }, [query]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

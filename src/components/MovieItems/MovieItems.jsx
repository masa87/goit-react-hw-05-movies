import React from "react";
import { Link } from "react-router-dom";

const MovieItems = ({ id, title }) => {
  return (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

export default MovieItems;

import React from "react";

const MovieItems = ({ id, title }) => {
  return (
    <li>
      <a href={id}>{title}</a>
    </li>
  );
};

export default MovieItems;

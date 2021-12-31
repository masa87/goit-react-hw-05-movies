import React from "react";

const CastItem = ({ id, name, profile_path, character }) => {
  const BASE_URL = "http://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w200";
  const poster = `${BASE_URL}${POSTER_SIZE}${profile_path}`;

  return (
    <li key={id}>
      {profile_path !== null ? <img src={poster} alt="poster" /> : `no image`}
      <p>Name: {name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;

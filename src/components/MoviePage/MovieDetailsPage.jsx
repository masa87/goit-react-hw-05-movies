import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { Link } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [posterP, setPoster] = useState("");

  const BASE_URL = "http://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w500";

  const fetchApi = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b8c69e73ca2b06d4109ce06d6df842ad`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setPoster(data.poster_path);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchApi(id);
  }, [id]);

  const { original_title, poster_path, vote_average, overview, genres } = movie;
  const poster = `${BASE_URL}${POSTER_SIZE}${posterP}`;
  const userScore = vote_average * 10;

  return (
    <>
      <div className={s.MovieInfo}>
        {poster_path !== null ? (
          <img className={s.MovieInfoImg} src={poster} alt="video poster" />
        ) : (
          `no poster image`
        )}
        <div className={s.MovieInfoWrapper}>
          <h3 className={s.MovieInfoHeader}>{original_title}</h3>
          <p className={s.MovieInfoDescription}>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetailsPage;
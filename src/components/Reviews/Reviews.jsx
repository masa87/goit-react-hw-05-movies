import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReviewsItem from "../ReviewsItem/ReviewsItem";

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  const fetchReviews = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b8c69e73ca2b06d4109ce06d6df842ad`
    )
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchReviews(id);
  }, [id, setReviews]);

  return (
    <>
      <ul>
        {reviews !== null
          ? reviews.map(({ id, author, content }) => (
              <ReviewsItem key={id} id={id} author={author} content={content} />
            ))
          : `Sorry, no review yet`}
      </ul>
    </>
  );
};

export default Reviews;

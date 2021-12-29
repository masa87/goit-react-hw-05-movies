import React from "react";

const ReviewsItem = ({ id, author, content }) => {
  return (
    <li id={id}>
      <h3>Author: {author}</h3>
      <p>`{content}`</p>
    </li>
  );
};

export default ReviewsItem;

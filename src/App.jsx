import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MoviePage from "./components/MoviePage/MoviePage";

const App = () => {
  // const [count, setCount] = useState(0);
  return (
    // <>
    //   <HomePage />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies/id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

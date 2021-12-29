import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import MovieDetailsPage from "./components/MoviePage/MovieDetailsPage";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HomePage />
            </>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <>
              <NavBar />
              <MovieDetailsPage />
            </>
          }
        />
        <Route
          path="/movies/:id/cast"
          element={
            <>
              <NavBar />
              <MovieDetailsPage />
              <Cast />
            </>
          }
        />
        <Route
          path="/movies/:id/reviews"
          element={
            <>
              <NavBar />
              <MovieDetailsPage />
              <Reviews />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

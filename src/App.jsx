import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";
import Movies from "./components/Movies/Movies";
import Loader from "react-loader-spinner";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense
        fallback={
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        }>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path="/movies/:id"
            element={
              <>
                <MovieDetailsPage />
              </>
            }
          />
          <Route
            path="/movies/:id/cast"
            element={
              <>
                <MovieDetailsPage />
                <Cast />
              </>
            }
          />
          <Route
            path="/movies/:id/reviews"
            element={
              <>
                <MovieDetailsPage />
                <Reviews />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Movies />
              </>
            }
          />
          <Route
            path="/movies?query=:query"
            element={
              <>
                <Movies />
              </>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

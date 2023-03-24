import React, { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import MovieCard from "../MovieCard/MovieCard";
import SearchPanel from "../SearchPanel/SearchPanel"
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/movie")
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.homeContainer}>
        <div className={styles.banner}>
          <Banner />
        </div>
        <SearchPanel />
        <div className="row">
          {movies.map((movie) => (
            <div key={movie._id} className="col-lg-3 col-md-6 movieGrid">
              <Link to={`movie/${movie._id}`}>
                <MovieCard key={movie._id} movie={movie} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

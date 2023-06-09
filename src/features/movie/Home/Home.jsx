import React, { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import MovieCard from "../MovieCard/MovieCard";
import SearchPanel from "../SearchPanel/SearchPanel"
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movie, timing } from "../../../store/reducer/BookingReducer";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch()
  

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies);
        console.log(movies)
        dispatch(movie(movies))
      });
    fetch("time.json")
      .then((res) => res.json())
      .then((time) => {
        // setMovies(movies);
        console.log(time)
        dispatch(timing(time))
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

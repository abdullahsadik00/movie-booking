import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { movieSelector, sel, selectMovie } from "../../../store/reducer/BookingReducer";
import Navbar from "../../shared/Navbar/Navbar";
import MovieHeader from "../MovieHeader/MovieHeader";
import styles from "./MovieDetail.module.css";
const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  async function callApi() {
    const response = await fetch("http://localhost:4000/api/movie/" + id);
    const parsedResponce = await response.json();
    setMovie(parsedResponce);
  }
  const dispatch = useDispatch()
  dispatch(selectMovie(movie.name))
  useEffect(() => {
    console.log(movie.name)
    callApi();
  }, []);
  const sect = useSelector(sel);
console.log(sect)
  return (
    <div>
      <Navbar />
      <div className={styles.detail}>
        <section className={styles.header} >
          <img className={styles.headerImage} src={movie.posterUrl} alt="" />
        </section>
        <section className={styles.movieHeader}>
          <MovieHeader movie={movie} />
        </section>
        <section className={styles.banner}>
          <div style={{ display: "flex", color: "white" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://pixner.net/boleto/demo/assets/images/movie/tomato2.png"
                  alt=""
                />
                <span
                  style={{
                    fontWeight: 700,
                    marginLeft: "10px",
                    fontWeight: 300,
                  }}
                >
                  0%
                </span>
              </div>
              Tomatometer
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://pixner.net/boleto/demo/assets/images/movie/cake2.png"
                  alt=""
                />
                <span
                  style={{
                    fontWeight: 700,
                    marginLeft: "10px",
                    fontWeight: 300,
                  }}
                >
                  0%
                </span>
              </div>
              Tomatometer
            </div>
          </div>
          <Link to={"ticketPlan"} className={styles.btnBookTickets}>Book Tickets</Link>
        </section>
      </div>
    </div>
  );
};

export default MovieDetail;

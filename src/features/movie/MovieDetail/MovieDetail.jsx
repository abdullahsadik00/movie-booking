import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  detail,
  movieDetailSelector,
  movieSelector,
  priceSelector,
  sel,
  selectMovie,
  singleMovieSelector,
} from "../../../store/reducer/BookingReducer";
import Navbar from "../../shared/Navbar/Navbar";
import MovieHeader from "../MovieHeader/MovieHeader";
import styles from "./MovieDetail.module.css";
const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const dispatch = useDispatch();
    const movies = useSelector(singleMovieSelector);
  async function dataa(){
    try{
      let res =await movies.filter((el)=>el._id == id)
setMovie(res)

  }catch(err){
  }
 }
 useEffect(()=>{
  dataa()
},[])  


  return (
    <div>
      <Navbar />
      {
        movie != undefined?<div className={styles.detail}>
        <section className={styles.header}>
          {movie.posterUrl != undefined ? (
            <img className={styles.headerImage} src={movie[0].posterUrl} alt="" />
          ) : (
            ""
          )}
        </section>
        <section className={styles.movieHeader}>
          <MovieHeader movie={movie[0]} />
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
          <Link to={"ticketPlan"} className={styles.btnBookTickets}>
            Book Tickets
          </Link>
        </section>
      </div>:""
      }
    </div>
  );
};

export default MovieDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import MovieHeader from "../MovieHeader/MovieHeader";
import styles from "./MovieDetail.module.css";
const MovieDetail = () => {
  const {id} = useParams();
  console.log(id)
  const [movie,setMovie] = useState([])
  async function callApi(){
    const response = await fetch("http://localhost:4000/api/movie/"+id);
    const parsedResponce = await response.json();
    setMovie(parsedResponce)
  }
  console.log("before fetch")
  console.log(movie)
  useEffect(()=>{

    callApi();
  },[])
  console.log("after fetch")
  console.log(movie)

  return (
    <div>
      <Navbar />
      <div className={styles.detail}>
        <section className={styles.header}>
          <img
            className={styles.headerImage}
            src={movie.posterUrl}
            alt=""
          />
        </section>
        <section className={styles.movieHeader}>
          <MovieHeader movie={movie}/>
        </section>
        <section className={styles.banner}>
          <a href={`${id}/ticketPlan`} className={styles.btnBookTickets}>
            Book Tickets
          </a>
        </section>
      </div>
    </div>
  );
};

export default MovieDetail;

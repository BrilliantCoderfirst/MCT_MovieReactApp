import React, { useState, useEffect } from "react";
import Star from "../assest/img/star.png";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();

  const [oneMovieDet, setOneMovieDet] = useState([]);

  function fun() {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOneMovieDet(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fun();
  }, []);

  return (
    <>
      <div className="movieDetailsContainer">
        <div className="left_detailsPart">
          <img
            src={`https://image.tmdb.org/t/p/w500/${oneMovieDet.poster_path}`}
            alt=""
          />
          <div className="shadow"></div>
        </div>

        <div className="right_detailsPart">
          <div className="heading">
            <div className="left_heading">
              <h1>{oneMovieDet.original_title}</h1>
              <p>
                {oneMovieDet.release_date} <span></span> 1h 28min <span></span>{" "}
                16+
              </p>
            </div>
            <div className="right_heading">
              <p>{oneMovieDet.vote_average}</p>
              <img src={Star} alt="" />
            </div>
          </div>

          <div className="overView_option">
            <p>OverView</p>
          </div>

          <div className="content">
            <div className="paragraph">
              <p>{oneMovieDet.overview}</p>
            </div>
            <div className="information">
              <div className="one_info">
                <p>Popularity</p>
                <p>Release date</p>
                <p>Vote count</p>
              </div>
              <div className="two_info">
                <p>{oneMovieDet.popularity}</p>
                <p>{oneMovieDet.release_date}</p>
                <p>{Math.trunc(oneMovieDet.popularity)}</p>
              </div>
            </div>
          </div>

          <div className="all_images">
            <img
              src={`https://image.tmdb.org/t/p/w500/${oneMovieDet.poster_path}`}
              alt=""
            />
            <img
              src={`https://image.tmdb.org/t/p/w500/${oneMovieDet.poster_path}`}
              alt=""
            />
            <img
              src={`https://image.tmdb.org/t/p/w500/${oneMovieDet.poster_path}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

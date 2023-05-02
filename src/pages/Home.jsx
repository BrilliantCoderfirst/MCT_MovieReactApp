import React, { useEffect, useState } from "react";
import Star from "../assest/img/star.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [data, setData] = useState([]);
  const [defaultOne, setDefaultOne] = useState([]);
  const [tabs, setTabs] = useState("Movies & Series");

  function fun() {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=3fd2be6f0c70a2a598f084ddfb75487c`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setDefaultOne(data.results);
      })
      .catch((err) => console.log(err));
  }

  const searchDataFun = (e) => {
    setData([]);
    console.log(e.target.value);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${e.target.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fun();
  }, []);

  const allMoviesFun = () => {
    setTabs("All Movies");
    setData([]);
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=3fd2be6f0c70a2a598f084ddfb75487c`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let arr = [];
        data.results
          .filter((items) => items.media_type === "movie")
          .map((items) => arr.push(items));
        setData(arr);
      })
      .catch((err) => console.log(err));
  };

  const actionFun = () => {
    setTabs("Action");
    setData([]);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&query=action&page=1&include_adult=false`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  };

  const comedyFun = () => {
    setTabs("Comedy");
    setData([]);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&query=comedy&page=1&include_adult=false`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  };

  const dramaFun = () => {
    setTabs("Drama");
    setData([]);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&query=drama&page=1&include_adult=false`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  };

  let newArr = [...defaultOne];
  newArr.sort((a, b) => b.popularity - a.popularity);

  return (
    <>
      <Navbar onKeyUp={searchDataFun} />
      <div className="homeContainer">
        <div className="content">
          <div className="left_content">
            <div className="tags">
              <ul>
                <li onClick={() => allMoviesFun()}>All Movies</li>
                <li onClick={() => actionFun()}>Action</li>
                <li onClick={() => comedyFun()}>Comedy</li>
                <li onClick={() => dramaFun()}>Drama</li>
              </ul>
            </div>
          </div>

          <div className="center_content">
            <div className="home_firstPara">
              <p className="firstTabs">{tabs}</p>
            </div>
            <h1>Top Rated</h1>
            <div className="movies">
              {data.length !== 0
                ? data.map((items, index) => (
                    <div className="movie" key={index}>
                      <Link to={`/movieDetails/${items.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w154/${items.poster_path}`}
                          alt=""
                        />
                      </Link>
                      <p>
                        <Link to={`/movieDetails/${items.id}`}>
                          {items.title}{" "}
                        </Link>
                      </p>
                      <div className="rating">
                        <img src={Star} alt="" />
                        <p>rating {items.vote_average.toFixed(1)}</p>
                      </div>
                    </div>
                  ))
                : defaultOne.map((items, index) => (
                    <div className="movie" key={index}>
                      <Link to={`/movieDetails/${items.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w154/${items.poster_path}`}
                          alt=""
                        />
                      </Link>
                      <p>
                        <Link to={`/movieDetails/${items.id}`}>
                          {items.title}{" "}
                        </Link>
                      </p>
                      <div className="rating">
                        <img src={Star} alt="" />
                        <p>rating {items.vote_average.toFixed(1)}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          <div className="right_content">
            <h1>Most Recent</h1>
            <div className="movies">
              {newArr.map((items, index) => (
                <div className="movie" key={index}>
                  <Link to={`/movieDetails/${items.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w154/${items.poster_path}`}
                      alt=""
                    />
                  </Link>
                  <p>
                    <Link to={`/movieDetails/${items.id}`}>{items.title} </Link>
                  </p>
                  <div className="rating">
                    <img src={Star} alt="" />
                    <p>Popularity {Math.trunc(items.popularity)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

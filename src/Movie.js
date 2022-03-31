import { Counter } from "./Counter";
import { useState } from "react";

export function Movie({ movie }) {

  const [show,setShow] = useState(true);

  const paraStyle ={
    display: show ? "block" : "none",
  }
  const styless = {
    color: movie.rating > 7.9 ? "green" : "red",
  };

  return (
    <div className="movie_container">
      <img className="movie_poster" src={movie.poster}></img>
      <div className="movie_specs">
        <h2   className="movie_name">{movie.name}</h2>
        <p style = {styless} className="movie_rating">⭐ {movie.rating}</p>
      </div>
      <button onClick={() => setShow(!show)} >Toggle</button>
      <p  style={paraStyle} className="movie_summary">{movie.summary}</p>
      <Counter />
    </div>
  );
}   

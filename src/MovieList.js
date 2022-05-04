import { Movie } from "./Movie";
import { useState, useEffect } from "react";

export function MovieList() {

  // {movielist, setMovieList}
  
  const [movielist, setMovieList] = useState([]);

 useEffect(() =>{
  fetch("https://61d17cd5da87830017e5926e.mockapi.io/movies")
  .then((res) => res.json())
  .then((data) => setMovieList(data));
 } , [])

  return (
    <div className="App">

      <div className="movie_list">
        {movielist.map((mv, index) => (<Movie key={index} movie={mv} id={index} movielist={movielist} setMovieList={setMovieList} />))}
      </div>

    </div>
  );
}

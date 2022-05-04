import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import { API } from "./global"

export function MovieList() {

  // {movielist, setMovieList}

  const [movielist, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`${API}/movies`)
      .then((res) => res.json())
      .then((mv) => setMovieList(mv));
  }, [])

  return (
    <div className="App">

      <div className="movie_list">
        {movielist.map((mv, index) => (<Movie key={index} movie={mv} id={mv.id} movielist={movielist} setMovieList={setMovieList} />))}
      </div>

    </div>
  );
}

import { Movie } from "./Movie";

export function MovieList({ movielist, setMovieList }) {

  return (
    <div className="App">

      <div className="movie_list">
        {movielist.map((mv, index) => (<Movie key={index} movie={mv} id={index} movielist={movielist} setMovieList={setMovieList} />))}
      </div>

    </div>
  );
}

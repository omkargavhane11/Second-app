import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Edit_Movie({ movielist, setMovieList }) {

  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movielist[id];

  // console.log(movie);

  const [Name, setName] = useState(movie.name);
  const [Poster, setPoster] = useState(movie.poster);
  const [Rating, setRating] = useState(movie.rating);
  const [Summary, setSummary] = useState(movie.summary);
  const [Trailer, setTrailer] = useState(movie.trailer);

  return (
    <div className="edit_movie_form">

      <TextField id="standard-basic" label="Name" variant="standard" onChange={(e) => setName(e.target.value)}
        value={Name} />
      <TextField id="standard-basic" label="Poster" variant="standard" onChange={(e) => setPoster(e.target.value)}
        value={Poster} />
      <TextField id="standard-basic" label="Rating" variant="standard" onChange={(e) => setRating(e.target.value)}
        value={Rating} />
      <TextField id="standard
      -basic" label="Summary" variant="standard" onChange={(e) => setSummary(e.target.value)}
        value={Summary} />
      <TextField id="standard-basic" label="Trailer" variant="standard" onChange={(e) => setTrailer(e.target.value)}
        value={Trailer} />

      <Button variant="contained"
        onClick={() => {
          const newMovie = {
            name: Name,
            poster: Poster,
            rating: Rating,
            summary: Summary,
            trailer: Trailer,
          };
          let temp_movielist = movielist;
          temp_movielist[id] = newMovie;
          setMovieList(temp_movielist);
          navigate(`/movies`);
        }}
      >SAVE</Button>

    </div>
  );
}

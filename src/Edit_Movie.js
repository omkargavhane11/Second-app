import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from "./global"





export function Edit_Movie() {

  const { id } = useParams();
  // const movie = movielist[id];
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movies/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((dat) => setMovie(dat));
  }, [])


  return (

    movie ? <Edit_movie_form movie={movie} setMovie={setMovie}/> : "Loading..."
  );
}



function Edit_movie_form({movie,setMovie}) {

  
  const navigate = useNavigate();
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

      <Button variant="contained" color="success"
        onClick={() => {
          const newMovie = {
            name: Name,
            poster: Poster,
            rating: Rating,
            summary: Summary,
            trailer: Trailer,
          };
          fetch(`${API}/movies/${movie.id}`, 
          { 
            method: "PUT",
            body:JSON.stringify(newMovie),
            headers:{
              "Content-Type": "application/json"
            },
          })
          .then((res) => res.json())
          .then(() => navigate(`/movies`));
          // let temp_movielist = movie;
          // temp_movielist = newMovie
          // navigate(`/movies`);
        }}
      >SAVE</Button>

    </div>
  )
}
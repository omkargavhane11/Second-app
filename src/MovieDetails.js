import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState,useEffect } from "react";
import {API} from "./global"

export function MovieDetails() {

  const [movie, setMovie] = useState({});

  useEffect(() =>{
   fetch(`${API}/movies/${id}`,{method:"GET"})
   .then((res) => res.json())
   .then((dat) => setMovie(dat));
  } , [])

  const { id } = useParams();
 

  // console.log(movie);
  const navigate = useNavigate();

  return (
    <div className="movie_trailer">
      <div className="movie_detail">
        <iframe width="100%" height="470" src={movie.trailer}></iframe>
        <div className="movie_detail_spec">
          <h3>{movie.name}</h3>
          <p>⭐{movie.rating}</p>
        </div>
        <p>{movie.summary}</p>
      </div>
      <Button onClick={() => navigate(`/movies`)} className="mui_back_button" variant="contained" startIcon={<ArrowBackIosNewIcon />}>
        Back
      </Button>
    </div>
  );
}

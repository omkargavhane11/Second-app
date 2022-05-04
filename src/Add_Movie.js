import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from "./global"



export function Add_Movie() {

  const [Name, setName] = useState("");
  const [Poster, setPoster] = useState("");
  const [Rating, setRating] = useState("");
  const [Summary, setSummary] = useState("");
  const [Trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  return (
    <div className="add_movie_form">

      <TextField id="standard-basic" label="Name" variant="standard" onChange={(e) => setName(e.target.value)}
        placeholder="Enter a Name" />
      <TextField id="standard-basic" label="Poster" variant="standard" onChange={(e) => setPoster(e.target.value)}
        placeholder="Enter a Poster" />
      <TextField id="standard-basic" label="Rating" variant="standard" onChange={(e) => setRating(e.target.value)}
        placeholder="Enter a Rating" />
      <TextField id="standard-basic" label="Summary" variant="standard" onChange={(e) => setSummary(e.target.value)}
        placeholder="Enter a Summary" />
      <TextField id="standard-basic" label="Trailer" variant="standard" onChange={(e) => setTrailer(e.target.value)}
        placeholder="Enter a Trailer" />


      <Button variant="contained"
        onClick={() => {
          const newMovie = {
            name: Name,
            poster: Poster,
            rating: Rating,
            summary: Summary,
            trailer: Trailer,
          };
          // setMovieList([...movielist, newMovie]);
          fetch(`${API}/movies`, {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((data) => data.json())
            .then(() => {navigate("/movies")});
        }}>Add movie</Button>

    </div>
  );
}

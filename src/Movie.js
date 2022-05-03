import { Counter } from "./Counter";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function Movie({ movie, id, setMovieList, movielist, key }) {

  const [show, setShow] = useState(true);

  const paraStyle = {
    display: show ? "block" : "none",
    padding: "4px"
  }
  const styless = {
    color: movie.rating > 7.9 ? "green" : "red",
  };

  const navigate = useNavigate();

  function res(array, num) {
    let indd = num;
    var news = [];
    for (let i = 0; i < array.length; i++) {
      if (i !== indd) {
        news.push(array[i]);
      }
      // return new_arr;
    }
    return news;
  }

  return (
    <div>
      <Card sx={{ maxWidth: 280 }}>
        <div className="movie_container">
          <img className="movie_poster" src={movie.poster} alt={movie.name}></img>
          <div className="movie_specs">
            <div className="movie_name_icon">
              <h2 className="movie_name">{movie.name}</h2>
              <IconButton onClick={() => setShow(!show)} aria-label="delete" variant="standard" color="primary">
                {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
              <IconButton onClick={() => navigate(`/movies/${id}`)} aria-label="delete" variant="standard" color="primary">
                <InfoIcon />
              </IconButton>
            </div>
            <div className="rating_container">
              <p style={styless} className="movie_rating">⭐ {movie.rating}</p>
            </div>
          </div>
          <p style={paraStyle} className="movie_summary">{movie.summary}</p>
          <div className="bottom_icon_container">
            <div className="counter_container">
              <Counter />
            </div>

            <div classNAme="icon_container">
              <IconButton
                onClick={() => {
                  let after_delete = res(movielist, id);
                  setMovieList(after_delete);
                }}
                aria-label="delete" variant="standard" color="error">
                <DeleteIcon />
              </IconButton>

              <IconButton onClick={() => navigate(`/movies/edit/${id}`)} aria-label="delete" variant="standard" color="secondary">
                <EditIcon />
              </IconButton>
            </div>
          </div>

        </div >
      </Card>

    </div>
  );
}   

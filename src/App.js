import "./index.css";
import "./App.css";
import "./Welcome.css";
import "./Movie.css";
import { Welcome } from "./Welcome";
import { Addcolor } from "./Colorbox";
import { Movie } from "./Movie";
import { NavLink, Routes, Route, useParams, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const INITIAL_MOVIE_LIST = [

  {
    "name": "RRR",
    "poster":
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {

    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {

    "name": "No Country for Old Men",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {

    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {

    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {

    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {

    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {

    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
  }
];


export default function App() {

  const [movielist, setMovieList] = useState(INITIAL_MOVIE_LIST);

  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/movies/add">Add Movie</NavLink>
        </li>
        <li>
          <NavLink to="/colorbox">Color Box</NavLink>
        </li>

      </ul >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movielist={movielist} setMovieList={setMovieList} />} />
        <Route path="/movies/:id" element={<MovieDetails movielist={movielist} />} />
        <Route path="/movies/add" element={<Add_Movie movielist={movielist} setMovieList={setMovieList} />} />
        <Route path="/colorbox" element={<Addcolor />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<Notfoundpage />} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
      </Routes>
    </div>
  );

}

function Home() {
  return (
    <div>
      <h1> Welcome to the Movie app</h1 >
    </div>
  );
}

function MovieList({ movielist, setMovieList }) {

  return (
    <div className="App">

      <div className="movie_list">
        {movielist.map((mv, index) => (<Movie key={index} movie={mv} id={index} />))}
      </div>

    </div>
  );
}


function MovieDetails({ movielist }) {


  const { id } = useParams();
  const movie = movielist[id];

  console.log(movie);
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
  )
}

function Notfoundpage() {
  return (
    <div>
      <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"></img>
    </div>

  );
}

function Add_Movie({ movielist, setMovieList }) {

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
          setMovieList([...movielist, newMovie]);
          navigate("/movies");
        }} >Add movie</Button>

    </div>
  )
}
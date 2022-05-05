import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from "./global"

import { useFormik } from 'formik';
import * as yup from "yup";




export function Add_Movie() {

  const formValidationSchema = yup.object({
    name: yup.string().required("Name required").min(2),
    poster: yup.string().required("Poster required").min(4, "Need proper poster address"),
    rating: yup.number().required("Rating required").min(0, "Must be 0 or more than 0").max(10, "Cannot be more than 10"),
    summary: yup.string().required("Summary required").min(20, "More summary needed"),
    trailer: yup.string().required("Trailer required").min(8, "Need proper movie trailer address"),
  })

  const formik = useFormik({
    initialValues: { name: "", poster: "", rating: "", summary: "", trailer: "" },
    validationSchema: formValidationSchema,
    onSubmit: (newMovie) => {
      createMovie(newMovie)
    }
  });

  const navigate = useNavigate();

  const createMovie = (newMovie) => {

    console.log("createMovie", newMovie)
    // setMovieList([...movielist, newMovie]);

    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json())
      .then(() => { navigate("/movies") });
  }

  return (
    <form onSubmit={formik.handleSubmit} className="add_movie_form">
      <TextField
        error={formik.touched.name && formik.errors.name}
        helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ""}
        id="name" name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        label="Name" variant="standard" />
      <TextField
        error={formik.touched.poster && formik.errors.poster}
        helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}
        id="poster" name="poster"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.poster}
        label="poster" variant="standard" />
      <TextField
        error={formik.touched.rating && formik.errors.rating}
        helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
        id="rating" name="rating"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rating}
        label="rating" variant="standard" />
      <TextField
        error={formik.touched.summary && formik.errors.summary}
        helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}
        id="summary" name="summary"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.summary}
        label="summary" variant="standard" />
      <TextField
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}
        id="trailer" name="trailer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.trailer}
        label="trailer" variant="standard" />
      <Button type="submit" variant="contained"
      >Add movie</Button>

    </form>
  );
}

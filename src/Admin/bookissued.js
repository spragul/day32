import * as yup from 'yup'
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import { useHistory, useParams } from 'react-router-dom';
import { AppState } from '../Book/provider';

const userSchemaValidation = yup.object({
  id: yup.string().required("please specify your ID"),
  parsonName: yup.string().required("Please fill in your parsonName ..."),
  personEmail: yup.string().email().required("please write proper mail"),
  name: yup.string().required("Please fill in your Book Name"),
  image: yup.string().required("please write proper image sorce"),
  Author: yup.string().required("Please fill Author?"),
  description: yup.string().required("Please fill  description..")

})
const data = [];
export function BookIssued() {
  const { book, issuedbook, setIssuedbook } = AppState();
  const { id } = useParams();
  const history = useHistory();
  const selectedBook = book.find((bk) => bk.id === id);

  const Addissuesdbook = async ({ addbook }) => {
    try {
      const response = await fetch("https://642c3e4b208dfe25472bac85.mockapi.io/library/issuedbook", {
        method: "POST",
        body: JSON.stringify(addbook),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json();
      console.log(data);
      setIssuedbook([...issuedbook, data])
      console.log(issuedbook);
      history.push("/admin")

    } catch (error) {
      console.log(error)
    }

  }

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      id: selectedBook.id,
      name: selectedBook.name,
      image: selectedBook.image,
      Author: selectedBook.Author,
      description: selectedBook.description,
      parsonName: "",
      personEmail: ""
    },
    validationSchema: userSchemaValidation,
    onSubmit: (addbook) => {
      console.log("on submit called :", addbook);
      data.push(addbook)
      Addissuesdbook({ addbook })

    }

  })
  return (
    <Sidebar>
      <div className='issued-container'>

        <form onSubmit={handleSubmit} className="text-areas">
          <TextField
            fullWidth
            id="fullWidth"
            parsonName="id"
            onBlur={handleBlur}
            label="ID"
            variant="outlined"
            value={values.id}
            onChange={handleChange}
          />
          {touched.id && errors.id ? <p style={{ color: "crimson" }}>{errors.id}</p> : ""}

          <TextField
            fullWidth
            id="fullWidth"
            label="name"
            variant="outlined"
            onBlur={handleBlur}
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {touched.name && errors.name ? <p style={{ color: "crimson" }}>{errors.name}</p> : ""}
          <TextField
            fullWidth
            id="fullWidth"
            label="image Sorce"
            variant="outlined"
            onBlur={handleBlur}
            name="image"
            value={values.image}
            onChange={handleChange}
          />
          {touched.image && errors.image ? <p style={{ color: "crimson" }}>{errors.image}</p> : ""}

          <TextField
            fullWidth
            id="fullWidth"
            label="Author"
            variant="outlined"
            onBlur={handleBlur}
            name="Author"
            value={values.Author}
            onChange={handleChange}
          />
          {touched.Author && errors.Author ? <p style={{ color: "crimson" }}>{errors.Author}</p> : ""}
          <TextField
            fullWidth
            id="fullWidth"
            label="description"
            variant="outlined"
            onBlur={handleBlur}
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          {touched.description && errors.description ? <p style={{ color: "crimson" }}>{errors.description}</p> : ""}

          <TextField
            fullWidth
            id="fullWidth"
            label="parsonName"
            variant="outlined"
            onBlur={handleBlur}
            value={values.parsonName}
            name="parsonName"
            onChange={handleChange}
          />
          {touched.parsonName && errors.parsonName ? <p style={{ color: "crimson" }}>{errors.parsonName}</p> : ""}

          <TextField
            fullWidth
            id="fullWidth"
            label="personEmail"
            variant="outlined"
            onBlur={handleBlur}
            name="personEmail"
            value={values.personEmail}
            onChange={handleChange}
          />
          {touched.personEmail && errors.personEmail ? <p style={{ color: "crimson" }}>{errors.personEmail}</p> : ""}

          <Button

            variant="contained"
            type="submit"
            color="success"
          >
            Add Issued List
          </Button>
        </form>
      </div>
    </Sidebar>
  )

}



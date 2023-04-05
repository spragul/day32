import * as yup from 'yup'
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { AppState } from "../Book/provider"
import Sidebar from "../sidebar/sidebar";

const userSchemaValidation = yup.object({
  id: yup.string().required("please specify Book ID"),
  name: yup.string().required("Please fill in your Book Name"),
  image: yup.string().required("please write proper image sorce"),
  Author: yup.string().required("Please fill Author?"),
  description: yup.string().required("Please fill description..")

})

export function AddBook() {
  const history = useHistory();
  const { book, setBook } = AppState();
  const addNewBook = async ({ newBook }) => {
    try {
      const response = await fetch("https://642c3e4b208dfe25472bac85.mockapi.io/library/libraryapp", {
        method: "POST",
        body: JSON.stringify(newBook),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json();
      console.log(data);
      setBook([...book, data])
      history.push("/admin")

    } catch (error) {
      console.log(error)
    }


  }


  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      id: "",
      name: "",
      image: "",
      Author: "",
      description: "",
    },
    validationSchema: userSchemaValidation,
    onSubmit: (newBook) => {
      console.log("on submit called :", newBook)
      addNewBook({ newBook });

    }

  })

  return (
    <Sidebar>
      <div className='issued-container'>

        <form onSubmit={handleSubmit} className="text-areas">
          <TextField
            fullWidth
            id="fullWidth"
            name="id"
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
            label="Book name"
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
          <Button
            variant="contained"
            type="submit"
            color="success"
          >
            Add Book
          </Button>
        </form>
      </div>
    </Sidebar>


  )
}
import * as yup from 'yup'
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../Book/provider";
import Sidebar from "../sidebar/sidebar";

const userSchemaValidation = yup.object({
    id: yup.string().required("please specify Book ID"),
    name: yup.string().required("Please fill in your Book Name"),
    image: yup.string().required("please write proper image sorce"),
    Author: yup.string().required("Please fill Author?"),
    description: yup.string().required("Please fill description..")

})


export function EditBook() {
    const { book, setBook } = AppState();
    const history = useHistory();
    const { id } = useParams();
    const selectedBook = book.find((bk) => bk.id === id);
    const Editedlibrarybook = async ({ editBook }) => {

        try {
            const response = await fetch(`https://642c3e4b208dfe25472bac85.mockapi.io/library/libraryapp/${id}`, {
                method: "PUT",
                body: JSON.stringify(editBook),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await response.json();
            console.log(data);
            setBook([...book])
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
        },
        validationSchema: userSchemaValidation,
        onSubmit: (editBook) => {
            console.log("on submit called :", editBook)
            const editindex = book.findIndex(bk => bk.id === id);
            book[editindex] = editBook;
            Editedlibrarybook({ editBook })


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
                        Edit Book
                    </Button>
                </form>
            </div>
        </Sidebar>

    )
}
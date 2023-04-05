import { useFormik } from "formik";
import { Button, TextField } from '@mui/material';
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import React from "react";


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required")
});

export function Login() {
  const history = useHistory();
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: basicSchema,
    onSubmit: (newUser) => {
      console.log("on submit called :", newUser)
      history.push("/")
    }

  })

  return (
    <div style={{ background: "blue", textAlign: "center", display: "flex", justifyContent: "center", height: "100vh" }}>
      <div style={{ width: "50%", height: "50%", margin: "10%", backgroundColor: "greenyellow" }}>
        <form onSubmit={handleSubmit} className="text-areas">
          <TextField
            id="fullWidth"
            style={{ backgroundColor: "blueviolet" }}
            label="Email"
            variant="outlined"
            onBlur={handleBlur}
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {touched.email && errors.email ? <p style={{ color: "crimson" }}>{errors.email}</p> : ""}

          <TextField
            id="fullWidth"
            style={{ backgroundColor: "blueviolet" }}
            label="password"
            variant="outlined"
            onBlur={handleBlur}
            name="password"
            value={values.password}
            onChange={handleChange}

          />
          {touched.password && errors.password ? <p style={{ color: "crimson" }}>{errors.password}</p> : ""}

          <Button
            variant="contained"
            type="submit"
            color="success"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}



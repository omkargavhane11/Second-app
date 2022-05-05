// import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";


const formValidationSchema = yup.object({
    password: yup.string().min(8, "Longer password needed").max(12, "keep pass max 12 characters").required(),
    email: yup.string().min(8, "Longer email needed").required()
})

export function BasicForm() {
    const formik = useFormik({
        initialValues: { email: "cool", password: "nothing" },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log("onSubmit", values)
        }
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>Basic Form</h1>
            <br />
            <input id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" placeholder="email" />
            <br />
            {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
            <br />
            <input id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" placeholder="password" />
            <br />
            {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

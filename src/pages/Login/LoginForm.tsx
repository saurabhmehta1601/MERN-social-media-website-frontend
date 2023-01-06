import { Box, Button, Checkbox, FormControlLabel, Stack, TextField } from '@mui/material'
import React from 'react'
import * as yup from "yup"
import { Formik, FormikProps } from 'formik'

interface IFormValues {
    email: String,
    password: String
}

const loginInitialValues: IFormValues = {
    email: "",
    password: ""
}
const loginValidationSchema = yup.object({
    email: yup.string().email("Invalid email address").required('required'),
    password: yup.string().required('required').min(6, "Password must be at least 6 characters long").max(20, "Password must be at most 20 characters long")
})

const LoginForm = () => {
    return (<Box mt={2} component="form">
        <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={(values, actions) => {
                console.log("values are", values)
                console.log("actions are", actions)
            }}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }: FormikProps<IFormValues>) => (
                <>
                    <Stack spacing={3}>
                        <TextField label="Email Address"
                            fullWidth id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete='email'
                            error={Boolean(touched.email) && Boolean(errors.email)}
                            helperText={<>{(Boolean(touched.email) && Boolean(errors.email)) ? errors.password : ""}</>}
                            required={true}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleBlur}
                            value={values.password}
                            onChange={handleChange}
                            error={Boolean(touched.password) && Boolean(errors.password)}
                            helperText={<>{(Boolean(touched.password) && Boolean(errors.password)) ? errors.password : ""}</>}
                            fullWidth
                            required={true} />
                    </Stack>
                    <FormControlLabel label="Remember me"
                        control={<Checkbox value="remember" />}
                        sx={{ mt: 3 }}
                    />
                    <Button variant="contained" fullWidth sx={{ mt: 1 }} type="submit" disabled={isSubmitting}> Sign In</Button>
                </>)
            }
        </Formik>
    </Box>)
}

export default LoginForm
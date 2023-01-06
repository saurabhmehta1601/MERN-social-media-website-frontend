import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, Stack, TextField } from '@mui/material'
import * as yup from "yup"
import { Formik, FormikProps } from 'formik'
import axios from 'axios'
import { useAppDispatch } from '../../hooks/redux'
import { login } from '../../state/features/authSlice'
import { useNavigate } from 'react-router-dom'

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
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLoginFormSubmit = async (values: IFormValues) => {
        try {
            console.log("Form is submitted")
            const res = await axios.post("http://localhost:8000/auth/login", values, {
                headers: {
                    'Content-type': "application/json"
                }
            })

            if (res.status === 200) {
                const { token, user } = res.data
                dispatch(login({ token, user }))
                navigate("/")
            }

        } catch (error) {
            console.log("error is", error)
        }

    }
    return (
        <Box mt={2} >
            <Formik
                initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={handleLoginFormSubmit}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }: FormikProps<IFormValues>) => (
                    <Box component="form" onSubmit={handleSubmit}>
                        <Stack spacing={3} >
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
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ mt: 1 }}
                            type="submit"
                            disabled={isSubmitting}> Sign In
                        </Button>
                    </Box>)
                }
            </Formik>
        </Box>)
}

export default LoginForm
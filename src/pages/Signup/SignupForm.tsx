import React from 'react'
import { Stack, Grid, TextField, Button, Box, Typography, Paper } from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import * as yup from "yup"
import { Formik, FormikProps } from 'formik'
import Dropzone from 'react-dropzone'
import { grey } from '@mui/material/colors';

interface ISignupFormValues {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    location: String,
    occupation: String,
    picture: File | null
}

const signupValidationSchema = yup.object().shape({
    firstName: yup.string().required('required').min(3, "First name must be at least 3 characters long").max(20, "First name must be at most 20 characters long"),

    lastName: yup.string().required('required').min(3, "Last name must be at least 3 characters long").max(20, "Last name must be at most 20 characters long"),

    email: yup.string().required('required').email("Invalid email address"),

    password: yup.string().required('required').min(6, "Password must be at least 6 characters long").max(20, "Password must be at most 20 characters long"),

    location: yup.string().required('required').min(3, "Location must be at least 3 characters long").max(20, "Location must be at most 20 characters long"),

    occupation: yup.string().required('required').min(3, "Occupation must be at least 3 characters long").max(20, "Occupation must be at most 20 characters long"),

    picture: yup.mixed().required('required')

})

const initialSignupValues: ISignupFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
    occupation: '',
    picture: null
}

const SignupForm = () => {
    const handleSignupFormSubmit = async (
        values: ISignupFormValues,
        onSubmitProps: any
    ) => {

    }
    return (<Formik
        onSubmit={handleSignupFormSubmit}
        initialValues={initialSignupValues}
        validationSchema={signupValidationSchema}
    >
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
        }: FormikProps<ISignupFormValues>) => (
            <Stack component="form" sx={{ mt: 4 }} spacing={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="first name"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                            helperText={<>
                                {
                                    (Boolean(touched.firstName) && Boolean(errors.firstName)) ?
                                        errors.firstName : ""
                                }
                            </>}
                            required={true}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            label="last name"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                            helperText={<>
                                {
                                    (Boolean(touched.lastName) && Boolean(errors.lastName)) ?
                                        errors.lastName : ""
                                }
                            </>}
                            required={true}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <TextField
                    label="email address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={<>
                        {
                            (Boolean(touched.email) && Boolean(errors.email)) ?
                                errors.email : ""
                        }
                    </>}
                    required={true}
                    fullWidth
                />
                <TextField
                    label="new password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.password) && Boolean(errors.password)}
                    helperText={<>
                        {
                            (Boolean(touched.password) && Boolean(errors.password)) ?
                                errors.password : ""
                        }
                    </>}
                    required={true}
                    fullWidth
                />
                <TextField
                    label="location"
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.location) && Boolean(errors.location)}
                    helperText={<>
                        {
                            (Boolean(touched.location) && Boolean(errors.location)) ?
                                errors.location : ""
                        }
                    </>}
                    required={true}
                    fullWidth
                />
                <TextField
                    label="occupation"
                    name="occupation"
                    value={values.occupation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                    helperText={<>
                        {
                            (Boolean(touched.occupation) && Boolean(errors.occupation)) ?
                                errors.occupation : ""
                        }
                    </>}
                    required={true}
                    fullWidth
                />

                <Dropzone
                    accept={{
                        'image/*': ['.jpeg', '.jpg', '.png', '.webp']
                    }}
                    multiple={false}
                    onDrop={(acceptedFiles) => {
                        setFieldValue("picture", acceptedFiles[0])
                    }}>
                    {({ getRootProps, getInputProps }) => (
                        <Paper elevation={3}>
                            <Box {...getRootProps()}
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                                p={1} >
                                <input {...getInputProps()} name="picture" />

                                {values.picture ?
                                    <>
                                        <Stack direction="row" justifyContent="center" p={2} >
                                            <img
                                                width="128px"
                                                height="128px"
                                                src={URL.createObjectURL(values.picture)}
                                                alt={values.picture.name}
                                            />
                                        </Stack>

                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography variant="body1" color="textSecondary" px={1} >
                                                {values.picture.name}
                                            </Typography>
                                            <EditOutlinedIcon />
                                        </Stack>
                                    </>
                                    :
                                    <>
                                        <Stack direction="row" justifyContent="center" p={2}>
                                            <AddPhotoAlternateIcon sx={{ fontSize: '4rem' }} htmlColor={grey[600]} />
                                        </Stack>
                                        <Typography variant='body1' color="textSecondary" textAlign="center">
                                            Upload a profile picture
                                        </Typography>
                                    </>
                                }
                            </Box>
                        </Paper>
                    )}
                </Dropzone>
                <Button variant="contained" fullWidth > Sign Up</Button>
            </Stack>
        )
        }
    </Formik >)
}

export default SignupForm
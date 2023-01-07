import React from 'react'
import { Stack, Grid, TextField, Button, Box, Typography, Paper } from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import * as yup from "yup"
import { Formik, FormikHelpers, FormikProps } from 'formik'
import Dropzone from 'react-dropzone'
import { grey } from '@mui/material/colors';
import axios from "axios"
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';

interface ICreatePostFormValues {
    title: string,
    description: string,
    postImage: File | null,
}

const signupValidationSchema = yup.object().shape({
    title: yup.string().required('required').min(3, "Title must be at least 3 characters long").max(30, "Title must be at most 30 characters long"),

    description: yup.string().required('required').min(6, "Description must be at least 6 characters long").max(100, "Description must be at most 100 characters long"),

    location: yup.string().required('required').min(3, "Location must be at least 3 characters long").max(20, "Location must be at most 20 characters long"),

    occupation: yup.string().required('required').min(3, "Occupation must be at least 3 characters long").max(20, "Occupation must be at most 20 characters long"),

    profilePicture: yup.mixed().required('required')

})

const initialSignupValues: ICreatePostFormValues = {
    title: '',
    description: '',
    postImage: null
}

const createPostForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { user } = useAppSelector(state => state.auth)

    const handleSignupFormSubmit = async (
        values: ICreatePostFormValues,
        onSubmitProps: FormikHelpers<ICreatePostFormValues>
    ) => {
        try {
            const formData = new FormData()

            formData.append("title", values.title)
            formData.append("description", values.description)
            if (values.postImage)
                formData.append("postImage", values.postImage)
            if (user) {
                formData.append("authorId", user.id)
                formData.append("authorName", user.firstName + " " + user.lastName)
                formData.append("authorProfilePicture", user.profilePicture)
            }
            const createPostResponse = await axios.post("http://localhost:8000/posts/create", formData, {
                headers: {
                    'Content-type': "multipart/form-data"
                }
            })
            if (createPostResponse.status === 201) {
                navigate("/")
            }

        } catch (error) {

        }

    }
    return (
        <Formik
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
                isSubmitting,
                handleSubmit
            }: FormikProps<ICreatePostFormValues>) => (
                <Stack component="form" sx={{ mt: 4 }} spacing={2} onSubmit={handleSubmit} encType="multipart/form-data">
                    <TextField
                        label="Title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.title) && Boolean(errors.title)}
                        helperText={<>
                            {
                                (Boolean(touched.title) && Boolean(errors.title)) ?
                                    errors.title : ""
                            }
                        </>}
                        required={true}
                        fullWidth
                    />

                    <TextField
                        label="Description"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.description) && Boolean(errors.description)}
                        helperText={<>
                            {
                                (Boolean(touched.description) && Boolean(errors.description)) ?
                                    errors.description : ""
                            }
                        </>}
                        required={true}
                        fullWidth
                        multiline
                    />

                    <Dropzone
                        accept={{
                            'image/*': ['.jpeg', '.jpg', '.png', '.webp']
                        }}
                        multiple={false}
                        onDrop={(acceptedFiles) => {
                            setFieldValue("postImage", acceptedFiles[0])
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
                                    <input {...getInputProps()} name="postImage" />

                                    {values.postImage ?
                                        <>
                                            <Stack direction="row" justifyContent="center" p={2} >
                                                <img
                                                    width="128px"
                                                    height="128px"
                                                    src={URL.createObjectURL(values.postImage)}
                                                    alt={values.postImage.name}
                                                />
                                            </Stack>

                                            <Stack direction="row" justifyContent="space-between">
                                                <Typography variant="body1" color="textSecondary" px={1} >
                                                    {values.postImage.name}
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
                    <Button variant="contained" fullWidth disabled={isSubmitting} type={'submit'} > Add Post </Button>
                </Stack>
            )
            }
        </Formik >)
}

export default createPostForm 
import React from 'react'
import { Stack, TextField, Button, Box, Typography, Paper } from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import * as yup from "yup"
import { Formik, FormikHelpers, FormikProps } from 'formik'
import Dropzone from 'react-dropzone'
import { grey } from '@mui/material/colors';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

interface ICreatePostFormValues {
    title: string,
    description: string,
    postImage: File | null,
}

const createPostValidationSchema = yup.object().shape({
    title: yup.string().required('required').min(3, "Title must be at least 3 characters long").max(30, "Title must be at most 30 characters long"),

    description: yup.string().required('required').min(6, "Description must be at least 6 characters long").max(250, "Description must be at most 250 characters long"),

    postImage: yup.mixed().required('required')

})

const initialCreatePostValues: ICreatePostFormValues = {
    title: '',
    description: '',
    postImage: null
}

const CreatePostForm = () => {
    const navigate = useNavigate()
    const { token } = useAppSelector(state => state.auth)

    const handleCreatePostFormSubmit = async (
        values: ICreatePostFormValues,
        onSubmitProps: FormikHelpers<ICreatePostFormValues>
    ) => {
        console.log("form is submitted")
        try {
            const formData = new FormData()

            formData.append("title", values.title)
            formData.append("description", values.description)
            if (values.postImage)
                formData.append("postImage", values.postImage)
            const createPostResponse = await axios.post("http://localhost:8000/posts/create", formData, {
                headers: {
                    'Content-type': "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            })
            if (createPostResponse.status === 201) {
                navigate("/")
            }

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <Formik
            onSubmit={handleCreatePostFormSubmit}
            initialValues={initialCreatePostValues}
            validationSchema={createPostValidationSchema}
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
                                                Upload cover image for your post
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
        </Formik>)
}

export default CreatePostForm 
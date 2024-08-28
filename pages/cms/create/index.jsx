import React from 'react'
import { Card, CardContent, CardHeader, Breadcrumbs, Typography, TextField, Button, Link, Container, Grid, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useCreateMutation } from '@/hooks/customHooks/cmsQuery.hooks';
import styles from "../../../styles/Home.module.css"


export default function index() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate } = useCreateMutation();

    const onSubmit = (data) => mutate(data);

    return (
        <>
            <div className={styles.registerbackground}>
                <Container style={{ marginTop: '18px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
                            <Paper elevation={3} sx={{ padding: 2 }}>
                                <Typography style={{ color: "Highlight", textAlign: "center" }} variant="h5" gutterBottom>
                                    Contact With Us
                                </Typography>
                                <form>

                                    <TextField
                                        {...register("name", {
                                            required: "name is required",
                                        })}
                                        label="Your Name"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        error={errors.name}
                                        helperText={errors.name && errors.name.message}
                                    />

                                    <TextField
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                message: "Invalid email format",
                                            },
                                        })}
                                        label="Your Email"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        error={errors.email}
                                        helperText={errors.email && errors.email.message}
                                    />
                                    <TextField
                                        {...register("topic", { required: "topic is required" })}
                                        label="Topic"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        type="topic"
                                        error={!!errors.topic}
                                        helperText={errors.topic && errors.topic.message}
                                    />

                                    <TextField
                                        {...register("phone", { required: "phone is required", })}
                                        label="Phone"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        type="phone"
                                        error={!!errors.phone}
                                        helperText={errors.phone && errors.phone.message}
                                    />

                                    <TextField
                                        {...register("msg", { required: "msg is required", })}
                                        label="Message"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        type="msg"
                                        error={!!errors.msg}
                                        helperText={errors.msg && errors.msg.message}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        onClick={handleSubmit(onSubmit)}
                                        sx={{
                                            marginTop: 2,
                                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                            color: 'white',
                                            '&:hover': {
                                              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                            },
                                          }}
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

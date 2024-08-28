import React from 'react'
import { TextField, Button, Container, Paper, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSignUpMutation } from '@/hooks/customHooks/authQuery.hooks';
import Link from 'next/link';
import styles from "../../../styles/Home.module.css"
export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useSignUpMutation();


  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    formData.append("forget", data.forget);
    formData.append("image", data.image[0]);
    mutate(formData);
  };
  return (
    <> <div className={styles.registerbackground} >
      <Container style={{ marginTop: '18px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography style={{ color: "Highlight", textAlign: "center" }} variant="h5" gutterBottom >
                Sign Up
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
                  {...register("phone", {
                    required: "phone is required",
                  })}
                  label="Your phone"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.phone}
                  helperText={errors.phone && errors.phone.message}
                />
                <TextField
                  {...register("password", { required: true })}
                  label="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password && "Password is required"}
                />

                <TextField
                  {...register("forget", { required: true })}
                  label="forget"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="forget"
                  error={!!errors.forget}
                  helperText={errors.forget && "forget is required"}
                />
                <TextField
                  {...register("image", { required: true, maxLength: 20 })}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="file"
                  error={!!errors.image}
                  helperText={errors.image && "image is required"}
                />

                {isPending ? <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  sx={{ marginTop: 2 }}
                >
                  Loading
                </Button> :
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
                    Register
                  </Button>}
                <Link style={{ textDecoration: "none", fontSize: "20px", fontWeight: "bold" }} href={`/auth/login`}><p> Have an account? Login </p></Link>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>

    </>
  )
}

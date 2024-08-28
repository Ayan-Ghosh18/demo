import React from 'react'
import { Typography, TextField, Button, Link, Container, Grid, Paper, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSignInMutation } from '@/hooks/customHooks/authQuery.hooks';
import styles from "../../../styles/Home.module.css"
import { Cookies } from 'react-cookie';

export default function index() {

  const cookie = new Cookies();
  const token = cookie.get('token');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useSignInMutation();

  const onSubmit = (data) => mutate(data);
  return (
    <>
      <div className={styles.loginbackground}>

        {token !== null && (
          <Link style={{ marginTop: "15px", textDecoration: 'none' }} href={`/`}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                border: "2px solid #007BFF",
                borderRadius: "20px",
                padding: "10px 20px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#007BFF",
                  color: "white",
                }
              }}
            >
             HOME
            </Button>
          </Link>
        )}

        <Container style={{ marginTop: '18px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
              <Paper elevation={3} sx={{ padding: 2 }}>

                <Box sx={{ textAlign: "center", mb: 3 }}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/024/585/326/original/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png"
                    alt="DoctorConsult Logo"
                    style={{ width: "80px", marginBottom: "16px" }}
                  />
                  <Typography style={{ color: "Highlight", textAlign: "center" }} variant="h5" gutterBottom>
                    Login to MEDIOCA
                  </Typography>
                </Box>
                <form>
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
                    {...register("password", { required: true })}
                    label="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password && "Password is required"}
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
                    Login
                  </Button>
                  <Link style={{ textDecoration: "none", fontSize: "20px", fontWeight: "bold" }} href={`/auth/register`}><p> Don't have an account? Sign Up</p></Link>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>

    </>
  )
}

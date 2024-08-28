import React from 'react';
import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';
import { Button, TextField, Box, Container, Paper, Typography, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useCreateAppoinment } from '@/hooks/customHooks/cmsQuery.hooks';
import styles from "../../../../../styles/Home.module.css"
const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const router = useRouter();
  const { departmentid, doctorid } = router.query;

  const cookie = new Cookies();
  const userId = cookie.get('_id');

  const createAppointment = useCreateAppoinment();

  const onSubmit = async (data) => {
    const appointmentData = {
      user_id: userId,
      department_id: departmentid,
      doctor_id: doctorid,
      phone: data.phone,
      message: data.message,
    };
    createAppointment.mutate(appointmentData);
  };
  const handleBack = () => {
    if (router.asPath !== '/') {
      router.back();
    } else {
      router.push('/fallback-page');
    }
  };

  return (
    <div  className={styles.loginbackground}>
      <Button style={{marginTop:"20px",}}
     onClick={handleBack}
              variant="contained"
              color="secondary"
              size="large"
            >
               Go Back
           </Button>

        <Container style={{ marginTop: '18px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: '0 auto' }}>
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              borderRadius: 4,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#ffffff',
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 'bold', fontSize: '1.5rem',color:"Highlight" }}
            >
              Book Appointment
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                {...register("phone", {
                  required: "Phone is required",
                })}
                label="Phone"
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone && errors.phone.message}
                fullWidth
                margin="normal"
              />
              <TextField
                {...register("message", {
                  required: "Message is required",
                })}
                label="Message"
                variant="outlined"
                error={!!errors.message}
                helperText={errors.message && errors.message.message}
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                // sx={{
                //   marginTop: 2,
                //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                //   color: 'white',
                //   '&:hover': {
                //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                //   },
                // }}
              >
                Book Appointment
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
    
  
  );
};

export default index;
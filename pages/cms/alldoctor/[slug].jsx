import { product } from '@/api/axios/axios';
import { useGetDoctordetail } from '@/hooks/customHooks/cmsQuery.hooks';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

export default function index() {

    const router = useRouter();
    const { slug } = router.query;

    const { data, isLoading, isError } = useGetDoctordetail(slug);
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        loading doctor Details....  <CircularProgress />
        </Box>
      );
    }
  
    if (isError) {
      return (
        <Typography variant="h6" color="error" align="center">
          Error loading doctors.
        </Typography>
      );
    }
    const handleBack = () => {
      if (router.asPath !== '/') {
        router.back();
      } else {
        router.push('/fallback-page');
      }
    };
  return (
    <>
 <div style={{ backgroundColor:"#0073e6", color:"white",padding:"15px 20px",textAlign:"center",fontSize:"40px",fontWeight:"bolder",fontFamily: "cursive", marginTop: "20px" ,borderRadius:"5px",width:"100%",boxShadow:" 0 2px 5px rgba(0, 0, 0, 0.2)",cursor:"pointer"}}>
      <span>Details</span>
      </div>
    <Button style={{marginTop:"20px",}}
     onClick={handleBack}
              variant="contained"
              color="secondary"
              size="large"
            >
               Go Back
           </Button>

    <Container style={{marginTop:"20px",}}> 
     
      <Grid container spacing={4} justifyContent="center"
              alignItems="center">
            <Grid item key={data?._id} xs={12} sm={6} md={4}>
              <Card sx={{
                  boxShadow: 3,
                  borderRadius: 7,
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 30,
                  },
                  backgroundColor: '#55b2f1',
                }}>
             
                <CardMedia
                  component="img"
                  height="300"
                  sx={{ borderRadius: '0px 100px 0px 100px', objectFit: 'cover' }}
                  image={product(data?.image)}
                  alt={data?.name}
                />
                <CardContent>
                <Typography variant="h6" component="div">
                Doctor Id  {data?._id}
                  </Typography>
                  <Typography variant="h6" component="div">
                  Doctor Name : {data?.name}
                  </Typography>
                  <Typography variant="h6" color="red">
                    Availability: {data?.aperture_time} - {data?.departure_time}
                    </Typography>
                  <Typography variant="h6" component="div">
                  Department Name : {data?.department_id.departmentName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Description: {data?.description} 
                  </Typography>
                </CardContent>
              
              </Card>
            </Grid>
      </Grid>
    </Container>
    </>
  );
};

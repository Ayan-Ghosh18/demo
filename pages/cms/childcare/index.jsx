import { product } from '@/api/axios/axios';
import { useGetchildcare } from '@/hooks/customHooks/cmsQuery.hooks';
import { Box, Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'

export default function index() {

    const {data, isError, isLoading} = useGetchildcare();
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        Loading Child Care Doctors....  <CircularProgress />
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
  console.log(data);

  return (
    <>
    {/* <div></div> */}
    <div style={{ backgroundColor:"#0073e6", color:"white",padding:"15px 20px",textAlign:"center",fontSize:"40px",fontWeight:"bolder",fontFamily: "cursive", marginTop: "20px" ,borderRadius:"5px",width:"100%",boxShadow:" 0 2px 5px rgba(0, 0, 0, 0.2)",cursor:"pointer"}}>
      <span>ChildCare Doctors</span>
      </div>

    <Container style={{marginTop:"20px"}}> 
      <Grid container spacing={4}>
        {data?.length > 0 ? (
          data?.map(doctor => (
            <Grid item key={doctor._id} xs={12} sm={6} md={4}>
              <Card sx={{
                  boxShadow: 3,
                  borderRadius: 7,
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 30,
                  },
                  backgroundColor: '#55b2f1',
                }}>
              <Link style={{ textDecoration: "none", color: "black" }} href={`/cms/alldoctor/${doctor._id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  sx={{ borderRadius: '0px 100px 0px 100px', objectFit: 'cover' }}
                  image={product(doctor.image)}
                  alt={doctor.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Availability: {doctor.aperture_time} - {doctor.departure_time}
                  </Typography>
                </CardContent>
                </Link>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </Grid>
    </Container>
    </>
  )
}

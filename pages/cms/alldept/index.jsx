import React from 'react'
import { product } from '@/api/axios/axios';
import { useGetalldepertment } from '@/hooks/customHooks/cmsQuery.hooks';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';


export default function index() {

  const { data, isLoading, isError } = useGetalldepertment();
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      Loading All Departments....  <CircularProgress />
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
  const router = useRouter();
  const handleButtonClick = (id) => {
    router.push(`/cms/doctorbydeptid/${id}`);
  };

  return (
    <>
      {/* <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center", variant: "h2", fontSize: "40px", marginTop: "50px", color: "Red", fontFamily: "cursive" }}>
        All Department
      </Typography> */}
      <div style={{ backgroundColor:"#0073e6", color:"white",padding:"15px 20px",textAlign:"center",fontSize:"40px",fontWeight:"bolder",fontFamily: "cursive", marginTop: "20px" ,borderRadius:"5px",width:"100%",boxShadow:" 0 2px 5px rgba(0, 0, 0, 0.2)",cursor:"pointer"}}>
      <span>All Departments</span>
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
                  <CardMedia
                    component="img"
                    height="300"
                    sx={{ borderRadius: '0px 100px 0px 100px', objectFit: 'cover' }}
                    image={product(doctor.image)}
                    alt={doctor.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {doctor.departmentName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {doctor.description.length > 130 ? `${doctor.description.substring(0, 130)}...` : doctor.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ marginTop: 2 }}
                      onClick={() => handleButtonClick(doctor._id)}
                    >
                      Check Our Doctors
                    </Button>
                  </CardContent>

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

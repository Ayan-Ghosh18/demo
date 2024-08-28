// import React from 'react';
// import { useRouter } from 'next/router';
// import { Box, Typography, Card, CardContent, CardMedia, Grid, CircularProgress } from '@mui/material';
// import { useQuery } from 'react-query';
// import { useGetDepartmentwisedoctor } from '@/hooks/customHooks/cmsQuery.hook';

// const DepartmentDoctors = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   const { data, isError, isLoading } = useQuery(
//     ['departmentDoctors', slug],
//     () => getDoctorsByDepartment(slug),
//     {
//       enabled: !!slug, // only run the query if slug is available
//     }
//   );

//   if (isLoading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (isError) {
//     return (
//       <Typography variant="h6" color="error" align="center">
//         Error loading doctors.
//       </Typography>
//     );
//   }

//   return (
//     <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
//       <Typography
//         variant="h4"
//         sx={{
//           textAlign: 'center',
//           marginBottom: 4,
//           fontSize: '32px',
//           color: '#8B0000',
//           fontFamily: 'cursive',
//         }}
//       >
//         Doctors in {slug}
//       </Typography>
//       <Grid container spacing={4}>
//         {data?.length > 0 ? (
//           data.map(doctor => (
//             <Grid item key={doctor._id} xs={12} sm={6} md={4}>
//               <Card sx={{
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 transition: '0.3s',
//                 '&:hover': {
//                   boxShadow: 6,
//                 },
//                 backgroundColor: '#fff',
//               }}>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={product(doctor.image)}
//                   alt={doctor.name}
//                   sx={{ borderRadius: '8px 8px 0 0', objectFit: 'cover' }}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#3E2723' }}>
//                     {doctor.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {doctor.description.length > 100 ? `${doctor.description.substring(0, 100)}...` : doctor.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))
//         ) : (
//           <Typography variant="body1" color="text.secondary" align="center">
//             No doctors available for this department.
//           </Typography>
//         )}
//       </Grid>
//     </Box>
//   );
// };

// export default DepartmentDoctors;

import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Card, CardContent, CardMedia, Grid, CircularProgress, Button, CardActions } from '@mui/material';
import { product } from '@/api/axios/axios';
import { useGetDepartmentwisedoctor } from '@/hooks/customHooks/cmsQuery.hooks';
import Link from 'next/link';

const DepartmentDoctors = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isError, isLoading } = useGetDepartmentwisedoctor(slug);

  console.log("data is",data);

  const handleAppointmentClick = (doctorId) => {
    router.push(`/cms/appointment/${slug}/${doctorId}`);
  };
  
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      Loading doctors....  <CircularProgress />
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
    <div>
  <Box sx={{ padding: 4, backgroundColor: '#dcf5f2', minHeight: '100vh' }}>
      {/* <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          fontSize: '32px',
          color: '#8B0000',
          fontFamily: 'cursive',
        }}
      >
        Doctors are
      </Typography> */}
        <div style={{ backgroundColor:"#0073e6", color:"white",padding:"15px 20px",textAlign:"center",fontSize:"40px",fontWeight:"bolder",fontFamily: "cursive", marginTop: "10px" ,borderRadius:"5px",width:"100%",boxShadow:" 0 2px 5px rgba(0, 0, 0, 0.2)",cursor:"pointer"}}>
      <span>Doctors are</span>
      </div>

      <Button style={{marginTop:"20px",}}
     onClick={handleBack}
              variant="contained"
              color="secondary"
              size="large"
            >
               Go Back
           </Button>


      <Grid  style={{marginTop:"20px"}} container spacing={4}>
        {data?.length > 0 ? (
          data.map(doctor => (
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
                 {/* <Link style={{ textDecoration: "none", color: "black" }} href={`/cms/alldoctor/${doctor._id}`}> */}
                <CardMedia
                  component="img"
                  height="350"
                  image={product(doctor.image)}
                  alt={doctor.name}
                  sx={{ borderRadius: '0px 100px 0px 100px', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#3E2723' }}>
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.description.length > 100 ? `${doctor.description.substring(0, 100)}...` : doctor.description}
                  </Typography>
                  <CardActions>
                  <Button 
                    variant="contained" 
                   color="success"
                    sx={{ marginTop: 2 }}
                    onClick={() => handleAppointmentClick(doctor._id)}
                  >
                    Appointment
                  </Button>
                  <Link style={{ textDecoration: "none", color: "black" }} href={`/cms/alldoctor/${doctor._id}`}>
                  <Button 
                    variant="contained" 
                   color="inherit"
                    sx={{ marginTop: 2 }}
                  >
                    Detalis
                  </Button>
                  </Link>
                  </CardActions>
                </CardContent>
                {/* </Link> */}
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" align="center">
            No doctors available for this department.
          </Typography>
        )}
      </Grid>
    </Box>
    </div>
  
  );
};

export default DepartmentDoctors;

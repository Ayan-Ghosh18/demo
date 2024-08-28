import React from 'react';
import { Box, Card, Typography, Grid, Avatar, IconButton, CircularProgress } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { product } from '@/api/axios/axios';
import { useGetuserdashboard } from '@/hooks/customHooks/cmsQuery.hooks';
import { Cookies } from 'react-cookie';
import styles from "../../../styles/Home.module.css"
const userdashboard = () => {
    const router = useRouter();
    const { userId } = router.query;

    const { data, isLoading, isError, error } = useGetuserdashboard(userId);

    const cookie = new Cookies();
    const name = cookie.get("name");
    const email = cookie.get("email");
    const phone = cookie.get("phone");

    if (isLoading) {
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          loading Dashboard....  <CircularProgress />
          </Box>
        );
      }

    if (isError) {
        console.error('Error fetching dashboard data:', error);
        return <Typography>Error fetching dashboard data</Typography>;
    }

    const dashboardData = data?.data;

    if (!dashboardData || dashboardData.length === 0) {
        return <Typography>No dashboard data found</Typography>;
    }


    return (
        <div className={styles.dashbackground}>
        <Box sx={{ padding: 4, maxWidth: '900px', margin: 'auto',backgroundColor:'#f0f4f7' }}>
            <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: "Highlight",mb: 4 }}>
                User Dashboard
            </Typography>
            <Card sx={{ mb: 4, p: 3, borderRadius: 3, boxShadow: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 ,color: "Highlight"}}>
                    User Details
                </Typography>
                <Typography variant="body1"><strong>Name:</strong> {name}</Typography>
                <Typography variant="body1"><strong>Email:</strong> {email}</Typography>
                <Typography variant="body1"><strong>Phone:</strong> {phone}</Typography>
            </Card>
            <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold',color: "Highlight", mb: 4 }}>
                Appointments
            </Typography>
            <Grid container spacing={3}>
                {dashboardData?.map((appointment) => (
                    <Grid item xs={12} key={appointment._id}>
                        <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, boxShadow: 3 }}>
                            <Avatar
                                src={product(appointment.doctor_id.image)}
                                alt={appointment.doctor_id.name}
                                sx={{ width: 70, height: 70, marginRight: 2 }}
                            />
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="div">
                                    {appointment.doctor_id.name}
                                </Typography>
                                <Typography color="text.secondary">
                                    {appointment.department_id.departmentName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Appointment Date: {appointment.doctor_id.date}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Phone: {appointment.phone}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Message: {appointment.message}
                                </Typography>
                            </Box>
                            <IconButton color={appointment.isPending ? 'warning' : 'success'}>
                                <CheckCircleOutline />
                            </IconButton>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </div>
    );
};

export default userdashboard;



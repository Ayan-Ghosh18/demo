import { product } from '@/api/axios/axios';
import { useGetrecentblog } from '@/hooks/customHooks/cmsQuery.hooks';
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

import React from 'react'

export default function index() {

  const { data, isLoading, isError } = useGetrecentblog();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <>
      <div style={{ backgroundColor: "#0073e6", color: "white", padding: "15px 20px", textAlign: "center", fontSize: "40px", fontWeight: "bolder", fontFamily: "cursive", marginTop: "20px", borderRadius: "5px", width: "100%", boxShadow: " 0 2px 5px rgba(0, 0, 0, 0.2)", cursor: "pointer" }}>
        <span>Recentblog</span>
      </div>
      <Link  style={{marginTop:"25px"}} href={`/cms/allblog`}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
        >
         back
        </Button>
        </Link>
      <Container  style={{marginTop:"25px"}}>

        <Grid container spacing={4}>
          {data?.length > 0 ? (
            data?.map(doctor => (
              <Grid item key={doctor._id} xs={12} sm={6} md={4}>
                <Card>

                  <CardMedia
                    component="img"
                    height="200"
                    image={product(doctor.image)}
                    alt={doctor.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      ID: {doctor._id}
                    </Typography>
                    <Typography variant="h6" component="div">
                      {doctor.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      DepartmentName: {doctor.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      createdAt: {doctor.createdAt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      updatedAt: {doctor.updatedAt}
                    </Typography>
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

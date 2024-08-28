// import { product } from '@/api/axios/axios';
// import { useGetallblog } from '@/hooks/customHooks/cmsQuery.hooks';
// import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
// import Link from 'next/link';

// import React from 'react'

// export default function index() {

//   const { data, isLoading, isError } = useGetallblog();
//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error loading products</p>;

//   return (
//     <>
//        <div style={{ backgroundColor:"#0073e6", color:"white",padding:"15px 20px",textAlign:"center",fontSize:"40px",fontWeight:"bolder",fontFamily: "cursive", marginTop: "20px" ,borderRadius:"5px",width:"100%",boxShadow:" 0 2px 5px rgba(0, 0, 0, 0.2)",cursor:"pointer"}}>
//       <span>Allblog</span>
//       </div>
//       <Box style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}} >
//       <Link  style={{marginLeft:"-120px"}} href={`/`}>
//         <Button
//           variant="contained"
//           color="secondary"
//           size="large"
//         >
//          back
//         </Button>
//         </Link>
//       <Link style={{ paddingLeft: "" }} href={`/cms/recentblog`}>
//         <Button
//           variant="contained"
//           color="warning"
//           size="large"
//         >
//           Recentblog
//         </Button>
//       </Link>
//       <Link style={{ paddingLeft: "" }} href={`/cms/allblog`}>
//         <Button
//           variant="contained"
//           color="warning"
//           size="large"
//         >
//           Allblog
//         </Button>
//       </Link>
//       {/* <Link style={{ paddingLeft: "" }} href={`/cms/allblog/${data?._id}`}>
//         <Button
//           variant="contained"
//           color="warning"
//           size="large"
//         >
//           Singleblog
//         </Button>
//       </Link> */}
//       </Box>
  
//       <Container style={{marginTop:"20px"}}>
//         <Grid container spacing={4} >
//           {data?.length > 0 ? (
//             data?.map(doctor => (
//               <Grid item key={doctor._id} xs={12} sm={6} md={4}>
//                 <Card>

//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={product(doctor.image)}
//                     alt={doctor.title}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" component="div">
//                       ID: {doctor._id}
//                     </Typography>
//                     <Typography variant="h6" component="div">
//                       {doctor.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       DepartmentName: {doctor.description}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       createdAt: {doctor.createdAt}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       updatedAt: {doctor.updatedAt}
//                     </Typography>
//                   </CardContent>
//                 </Card>

//               </Grid>

//             ))

//           ) : (
//             <Typography variant="body1">Loading...</Typography>
//           )}
//         </Grid>
//       </Container>
//     </>
//   )
// }

import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
  Stack,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import { product } from "@/api/axios/axios";
import { useGetallblog, useGetrecentblog, useGetsearchblog } from "@/hooks/customHooks/cmsQuery.hooks";

const AllBlogPage = () => {
  const router = useRouter();
  const [recentBlog, setRecentBlog] = useState("allblog");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const blogsPerPage = 6;

  const { data: blogs, isLoading, error } = isSearchActive && searchTerm
    ? useGetsearchblog(searchTerm)
    : recentBlog === "allblog"
      ? useGetallblog()
      : useGetrecentblog();


  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs?.slice(indexOfFirstBlog, indexOfLastBlog) || [];
  const totalPages = Math.ceil((blogs?.length || 0) / blogsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearch = () => {
    setIsSearchActive(true); 
    setCurrentPage(1); 
  };

  const handleRecentBlogChange = (event) => {
    const selectedValue = event.target.value;
    setRecentBlog(selectedValue);

    if (selectedValue === "allblog") {
      router.push("/cms/allblog");
      setIsSearchActive(false); 
    } else {
      setCurrentPage(1); 
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      Loading blogs....  <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        Error: {error.message}
      </Typography>
    );
  }
  const handleCardClick = (_id) => {
    console.log("Navigating to blog with slug:", _id);
    router.push(`/cms/allblog/${_id}`);
  };

  return (
    <div className={styles.dashbackground}>
    <Container sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ borderRadius: "20px" }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Recent Blogs</InputLabel>
              <Select
                value={recentBlog}
                onChange={handleRecentBlogChange}
                label="Recent Blogs"
                sx={{ borderRadius: "20px" }}
              >
                <MenuItem value="allblog">All Blogs</MenuItem>
                <MenuItem value="recent1">Recent Blogs</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{ borderRadius: "20px" }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h4" gutterBottom>
        {recentBlog === "allblog" && !isSearchActive ? "All Blogs" : "Search Results"}
      </Typography>
      <Grid container spacing={4}>
        {currentBlogs.map((blog) => (
          <Grid item key={blog._id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer"  
              }}
              onClick={() => handleCardClick(blog._id)}  
            >
              <CardMedia
                component="img"
                image={product(blog.image)}
                alt={blog.title}
                height="200"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.description.substring(0, 100)}...
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{ mt: 4 }} alignItems="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </Container>
    </div>
  );
};

export default AllBlogPage;
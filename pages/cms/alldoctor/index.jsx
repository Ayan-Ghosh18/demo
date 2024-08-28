import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetalldoctors } from '@/hooks/customHooks/cmsQuery.hooks';
import { product } from '@/api/axios/axios';
import Link from 'next/link';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
 

export default function index() {
    const {data, isError, isLoading} = useGetalldoctors();
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        loading All doctors....  <CircularProgress />
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
  
  return (
    <>
      <div style={{ backgroundColor:"#0073e6", color:"white",padding:"15px 20px",
        textAlign:"center",fontSize:"40px",fontWeight:"bolder",fontFamily: "cursive",
         marginTop: "20px" ,borderRadius:"5px",width:"100%",boxShadow:" 0 2px 5px rgba(0, 0, 0, 0.2)",cursor:"pointer"}}>
      <span>All Doctors</span>
      </div>

      {/* <TableContainer style={{marginTop:"30px"}} component={Paper} xs={12} sm={6} md={4}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Image</StyledTableCell>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="right">Doctor Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                <img style={{width:"80px", height:"80px"}} src={product(row.image)}/>
              </StyledTableCell>
              <StyledTableCell style={{color:"red"}} align="left">{row.name}</StyledTableCell>
              <StyledTableCell style={{color:"Highlight"}} align="left">{row.description}</StyledTableCell>
              <StyledTableCell align="left"> <Link href={`/cms/alldoctor/${row._id}`}>
               <Button variant="contained"color="secondary"size="large" >Details</Button> </Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    
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
                    {doctor.name}
                  </Typography>
                  <Typography variant="h6" component="div">
                  {doctor.description.length > 80 ? `${doctor.description.substring(0, 80)}...` : doctor.description}
                  </Typography>
                  <Typography variant="body2" color="red">
                    Availability: {doctor.aperture_time} - {doctor.departure_time}
                  </Typography>
                  <Link href={`/cms/alldoctor/${doctor._id}`}>
               <Button variant="contained"color="inherit"size="large" >Details</Button> </Link>
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


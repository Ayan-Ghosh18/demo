// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import Tooltip from '@mui/material/Tooltip';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import img1 from "../../public/Images/logo.jpg";
// import { product } from '@/api/axios/axios';
// import Link from 'next/link';
// import { Cookies } from 'react-cookie';
// import { useDispatch } from 'react-redux';
// import { logout } from '@/Toolkit/authSlice';
// import { useRouter } from 'next/router';
// import Image from 'next/image';

// // const pages = [];
// const settings = ['Register'];

// export default function Header(request) {
//   const cookie = new Cookies();

//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const userId = cookie.get('_id');
//   const token = cookie.get('token');
//   const name = cookie.get("name");
//   const image = cookie.get("image");

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const dispatch = useDispatch();
//   const router = useRouter();
//   const handleLogout = () => {
//     dispatch(logout());
//     router.push("/auth/login");
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'white' }}>
//       <Container maxWidth="xl">
//         <Toolbar>
//           <Box sx={{ flexGrow: 1, display: { lg: 'flex', md: 'flex', xs: 'none' } }}>

//             {/* <img style={{width:"100px", height:"80px",display:{xs:'none', md:'flex'}}} src={img1} alt="" />  */}
//             <Image style={{ height: "50px", width: "50px", marginLeft: "-10px", borderRadius: "100px" }}
//               src={img1}
//               alt="Logo"
//             />
//             <Typography
//               variant="h4"
//               noWrap
//               style={{
//                 mr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontFamily: 'Fantasy',
//                 fontWeight: 400,
//                 letterSpacing: '.3rem',
//                 color: '#3498db ',
//                 textDecoration: 'none',
//                 marginTop: "9px",
//                 marginLeft: "50px"
//               }}
//             >
//               MEDIOCA
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }, marginLeft: "400px", display:"flex",justifyContent:"space-around",}}>
//             {token && (
//               <Link style={{ marginTop: "15px", textDecoration: 'none' }} href={`/`}>
//                 <Typography style={{color: '#3498db ',}}>
//                   HOME
//                 </Typography>
//               </Link>
//             )}
//               {userId && (
//                 <Link style={{ marginTop: "15px", textDecoration: 'none' }}
//                   href={`/cms/dashboard/${userId}`} passHref>
//                   <Typography style={{color: '#3498db ',}}>
//                     DASHBOARD
//                   </Typography>
//                 </Link>
//               )}
//             </Box>

//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {/* {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>

//                   <Typography textAlign="center">
//                     <Link href={`/cms/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: '#3498db  ' }}>
//                       {page}
//                     </Link>

//                   </Typography>
//                 </MenuItem>
//               ))} */}


//             </Menu>
//             <MenuItem style={{ color: "red" }}>
//               {token !== null && token !== undefined ?
//                 <>Hello.. {name}
//                 </> :
//                 ("")}
//             </MenuItem>
//           </Box>
//           <Box sx={{ flexGrow: 1, display: { lg: 'none', md: 'none', xs: 'block' } }}>
//             {/* <img style={{width:"130px", height:"100px"}} src={img1} alt="" /> */}
//           </Box>
//           <Typography
//             variant="h5"

//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: '#3498db',
//               textDecoration: 'none',
//             }}
//           >
//             MEDIOCA
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {/* {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: '#3498db ', display: 'block' }}
//               >
//                 <Link href={`/cms/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: '#3498db  ' }}>
//                   {page}
//                 </Link>

//               </Button>
//             ))} */}
//             <MenuItem style={{ color: "#ff0157" }}>
//               {token !== null && token !== undefined ?
//                 <>Hello.. {name}</> :
//                 ""}
//             </MenuItem>
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 {token !== null && token !== undefined ? (<img style={{ width: "50px", height: "50px", borderRadius: "100%" }} src={product(image)} />)
//                   : (<img style={{ width: "50px", height: "50px", borderRadius: "100%" }} src="/Images/login.jpg" />)}
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings?.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center"> <Link href={`/auth/${setting.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                     {setting}
//                   </Link>
//                   </Typography>

//                 </MenuItem>
//               ))}

//               <MenuItem onClick={handleLogout}>

//                 {token !== null && token !== undefined ? (
//                   <>

//                     <Link href={`/auth/login`} style={{ textDecoration: 'none', color: 'inherit' }}> Logout</Link>
//                   </>
//                 )
//                   :
//                   (
//                     <>
//                       <Typography textAlign="center" >
//                         <Link href={`/auth/login`} style={{ textDecoration: 'none', color: 'inherit' }}> Login</Link>
//                       </Typography>

//                     </>
//                   )
//                 }

//               </MenuItem>

//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }


import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { logout } from '@/Toolkit/authSlice';
import img1 from "../../public/Images/logo.jpg";

const Header = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter()

  const dispatch = useDispatch();

  const handelLogout =()=>{
    dispatch(logout())
    router.push('/auth/login')
}


  useEffect(() => {
    const updateAuthState = () => {
      const cookie = new Cookies();
      const storedUserId = cookie.get('_id');
      const storedUserName = cookie.get('name');
      const storedUserPhoto = cookie.get('photo');
      setUserId(storedUserId);
      setUserName(storedUserName);
      setUserPhoto(storedUserPhoto);
      setIsLoaded(true);
    };

    // Initial load
    updateAuthState();

    // Set up an interval to check for changes every few seconds
    const intervalId = setInterval(updateAuthState, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // const handleLogout = () => {
  //   const cookie = new Cookies();
  //   cookie.remove('_id');
  //   cookie.remove('name');
  //   cookie.remove('photo');
  //   window.location.href = '/auth/login';
  // };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#721227', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img
            src="/Images/logo.jpg"
            alt="Logo"
            style={{ height: '50px', marginRight: '10px' }}
          />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
          Medioca
          </Typography>
        </Box>
        <Box display="flex" flexGrow={150} justifyContent="center">
          {userId && (
            <>
              <Link href="/" passHref>
                <Button color="inherit" sx={{ color: 'white', mx: 2, '&:hover': { backgroundColor: '#1a5b9f' } }}>
                  Home
                </Button>
              </Link>
             
            </>
          )}
        </Box>
        <Box display="flex" alignItems="center">
          {isLoaded ? (
            !userId ? (
              <>
                <Link href="/auth/register" passHref>
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
             Sign Up
            </Button>
                </Link>
              </>
            ) : (
              <>
                <Button color="inherit" sx={{ backgroundColor: '#ff0157  ', color: 'white', borderRadius: '20px', px: 3, ml: 2 }} onClick={handleMenuClick}>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/024/585/326/original/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png"
                      alt={userName}
                      style={{ borderRadius: '50%', height: '30px', width: '30px', marginRight: '10px' }}
                    />
                    <Typography variant="body1">Hello..{userName}</Typography>
                  </Box>
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  <MenuItem onClick={handleMenuClose}>
                    <Link href={`/cms/dashboard/${userId}`} passHref>
                      <Button color="success">Dashboard</Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handelLogout}> <Button color="success">Logout</Button></MenuItem>
                </Menu>
              </>
            )
          ) : (
            <div style={{ width: '100px', height: '36px' }}></div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
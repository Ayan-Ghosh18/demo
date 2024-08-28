import Link from "next/link";
import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer>
            
            <Box sx={{ bgcolor: '#595959', color:"whitesmoke", p: 3}} component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Site Links
                        </Typography>
                        <Link href="/" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Home
                        </Link>
                        <Link href="/cms/childcare" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Child Care
                        </Link>
                        <Link href="/cms/personalcare" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Persolal Care
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="/cms/create" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Contact Us
                        </Link>
                        <Link href="/" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Privacy Policy
                        </Link>
                        <Link href="/" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Terms and Conditions
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Follow Us
                        </Typography>
                        <IconButton href="https://www.facebook.com/your-page-or-profile" color="inherit">
                            <Facebook />
                        </IconButton>
                        <IconButton href="https://www.facebook.com/your-page-or-profile" color="inherit">
                            <Twitter />
                        </IconButton>
                        <IconButton href="https://www.facebook.com/your-page-or-profile" color="inherit">
                            <Instagram />
                        </IconButton>
                        <IconButton href="https://www.facebook.com/your-page-or-profile" color="inherit">
                            <LinkedIn />
                        </IconButton>
                    </Grid>
                </Grid>
               
            </Container>
        </Box>
        </footer>
    );
};

export default Footer;
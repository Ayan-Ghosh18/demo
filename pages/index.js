import Image from "next/image";
import { Inter } from "next/font/google";
import img1 from '../public/Images/about.jpg';
const inter = Inter({ subsets: ["latin"] });
import styles from '../styles/Home.module.css';
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { Cookies } from "react-cookie";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  const cookie = new Cookies();
  const token = cookie.get('token');

  return (
    <>
      <Carousel indicators={false} fade={true} interval={2000}>
        <Carousel.Item>
          <img style={{ height: "500px" }}
            className="d-block w-100 carousel-image"
            src="Images/hero.jpg"
            alt="Second slide"

          />
          
          <Carousel.Caption>
            <h1 style={{ fontSize: '50px', color: '#ff0157' }}>Welcome To Medioca</h1>
            <h2 style={{ fontSize: '30px', color: '#f2ed57' }}>Best Healthcare Solution In Your City</h2>
            {token == null && (
              <Link style={{ alignItems: "center" }} href={`/auth/login`}>
                <Button
                  variant="contained"
                  color="warning"
                  size="large"
                >
                  To Explore Us Please Login
                </Button>
              </Link>
            )}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "500px" }}
            className="d-block w-100 carousel-image"
            src="Images/bg7.webp"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: '50px', color: '#ff0157' }}>Welcome To Medioca</h1>
            <h2 style={{ fontSize: '30px', color: '#f2ed57' }}>24/7 best Emergency Services Your City</h2>
            {token == null && (
              <Link style={{ alignItems: "center" }} href={`/auth/login`}>
                <Button
                  variant="contained"
                  color="warning"
                  size="large"
                >
                  To Explore Us Please Login
                </Button>
              </Link>
            )}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "500px" }}
            className="d-block w-100 carousel-image"
            src="Images/bg6.webp"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: '50px', color: '#ff0157' }}>Welcome To Medioca</h1>
            <h2 style={{ fontSize: '30px', color: '#f2ed57' }}>Modern, Advanced Medical Equipment</h2>
            {token == null && (
              <Link style={{ alignItems: "center" }} href={`/auth/login`}>
                <Button
                  variant="contained"
                  color="warning"
                  size="large"
                >
                  To Explore Us Please Login
                </Button>
              </Link>
            )}
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>




      {/* <div className={styles.background}>
        <div >
          <h1 className={styles.text} >Welcome To Medioca</h1>
          <p className={styles.text1}>Best Healthcare <br /> Solution In Your City</p>
          {token == null && (
            <Link style={{ marginLeft: "200px" }} href={`/auth/login`}>
              <Button
                variant="contained"
                color="success"
                size="large"
              >
                To Explore Us Please Login
              </Button>
            </Link>
          )}
        </div>
      </div> */}
      {/* <Image  style={{width:'100%',height:'600px'}}
        src={img1}
        alt="Background Image"
        layout=""
        objectFit="cover"
      /> */}
      <div className={styles.card}>
        <div className={styles.section}>
          <img
            src="/Images/about.jpg"
            alt="Description"
            className={styles.image}
          />
        </div>
        <div className={styles.section}>
          <h1 style={{ textAlign: "center", color: "#ff0157",fontFamily:"unset" }}>About Us</h1>
          <h2 style={{ textAlign: "center",color:"rgb(14, 149, 211)" }}>
          Your Health Our Priority - Excellence in Care for You and Your Family
          </h2>
          <h5 style={{ textAlign: "left",color:"" }}>
            
            Feel free to adjust or let me know if you have a specific theme in mind!
            The hospital that cares we are here to hear and heal your health problems it is not only about the money more than just treating patients the best doctors on the planet we collaborate for better healthcare healthcare at its finest we work for complete healing.
          </h5>
          <Link href={`/cms/create`}>
          <Button
              variant="contained"
              sx={{
                backgroundColor: "#f2ed57",
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
             Contact With Us
            </Button>
        
          </Link>
        </div>
      </div>


      <div className={styles.section3}>
  <h1 style={{ textAlign: "center", color: "#ff0157",fontFamily:"unset",fontSize:"60px" }}>Our Super Specialities</h1>

  <Box className={styles.buttonContainer}>
    <Link href={`/cms/featured`}>
    <Button
              variant="contained"
              sx={{
                backgroundColor: "#f2ed57",
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
            Featured
            </Button>
    </Link>
    <Link href={`/cms/alldoctor`}>
    <Button
              variant="contained"
              sx={{
                backgroundColor: "#f2ed57",
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
             All Doctor
            </Button>
    </Link>
    <Link href={`/cms/alldept`}>
    <Button
              variant="contained"
              sx={{
                backgroundColor: "#f2ed57",
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
             All Department
            </Button>
    </Link>
  </Box>
</div>

      {/* <div className={styles.section2}>
        <h1 className={styles.text2}>Welcome to Our Blog</h1>
        <h2 className={styles.text3}>Bringing You the Latest in Healthcare and Wellbeing</h2>
        <Link style={{ paddingLeft: "580px" }} href={`/cms/allblog`}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
          >
            Our Blog
          </Button>
        </Link>
      </div> */}

      <div className={styles.section2}>
  <h1 style={{fontSize:"70px",color: "#ff0157",fontFamily:"unset",}} className={styles.text2}>Welcome to Our Blog</h1>
  <h2 style={{fontSize:"40px",color:"antiquewhite"}} className={styles.text3}>Bringing You the Latest in Healthcare and Wellbeing</h2>
  <Link className={styles.blogLink} href={`/cms/allblog`}>
  <Button
              variant="contained"
              sx={{
                backgroundColor: "#f2ed57",
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
             Our Blog
            </Button>
  </Link>
</div>





    </>
  );
}

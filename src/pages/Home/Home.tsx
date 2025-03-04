import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { BackgroundVideo } from "../../components/ui/BackgroundVideo";
import CosmicForm from "../../components/MatchingForm/CosmicForm";
import Carousel from "../../components/ui/Carousel";
// const BackgroundVideo = styled("video")({
//   position: "absolute",
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   zIndex: -1,
// });

const Overlay = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  // backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 0,
});

const Content = styled(Container)({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const Home: React.FC = () => {
  return (
    <Box position="relative" height="100vh">
      <BackgroundVideo autoPlay loop muted>
        <source src="/video1.mp4" type="video/mp4" />
      </BackgroundVideo>
      <Overlay />
      <Content>
        <Typography variant="h2" gutterBottom>
          Welcome to Kundali Cosmic Match
        </Typography>
        <Typography variant="h5" gutterBottom>
          Discover your celestial connection
        </Typography>
        <Button variant="contained" 
        // sx={{ backgroundColor: "rgb(27, 73, 96)", color: "white" }}
        size="large">
          Get Started
        </Button>
      </Content>
      <section style={{padding:"50px"}}>
  <CosmicForm /></section>
      <section style={{ textAlign: "center", padding: "40px 0" }}>
  <Typography variant="h3" style={{ marginBottom: "20px", fontWeight: "bold" }}>
  Beyond Traditional Astrology  </Typography>
  
  <div style={{ maxWidth: "1500px", margin: "0 auto" }}>
    <Carousel />
  </div>
</section>

    
    </Box>
  );
};

export default Home;

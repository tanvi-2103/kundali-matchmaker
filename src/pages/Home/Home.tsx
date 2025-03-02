import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { BackgroundVideo } from "../../components/ui/BackgroundVideo";
import CosmicForm from "../../components/MatchingForm/CosmicForm";
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
  backgroundColor: "rgba(0, 0, 0, 0.5)",
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
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Content>
      <CosmicForm/>
    </Box>
  );
};

export default Home;

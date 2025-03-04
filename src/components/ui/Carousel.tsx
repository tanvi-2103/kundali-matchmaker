import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Card, CardMedia, Typography, Grid, CardContent } from "@mui/material";

// Define the carousel data
const slides = [
  {
    image: "/chatbotfr.jpg",
    title: "Kundali Bot",
    description: "Your personal astrology assistant is here! Ask any Kundali-related question and receive instant, insightful answers. Whether it’s about your birth chart, doshas, or future predictions, our AI-powered bot has you covered. Get 24/7 personalized guidance at your convenience!",
  },
  {
    image: "/couple-matching.jpg",
    title: "Advanced Kundali Matching",
    description: "Finding the right life partner is crucial, and we make it easier! Our advanced Kundali matching system analyzes planetary positions, doshas, and compatibility factors in depth. Unlike generic match-making, we provide detailed insights to ensure harmony and happiness. Let astrology guide you to your perfect match!",
  },
  {
    image: "/kundali.jpg",
    title: "In-Depth Kundali Insights",
    description: "Your Kundali holds the key to your destiny! Access detailed birth chart readings, including planetary positions, doshas, and astrological interpretations. Whether you seek career guidance, relationship insights, or life predictions, our precise Kundali analysis helps you understand your path. Explore the universe’s plan for you!",
  },
];

const Carousel: React.FC = () => {
  return (
    <Box sx={{ width: "70%", margin: "auto", mt: 4 ,p:5 }}>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ display: "flex", flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" }, p: 2 }}>
              <CardMedia
                component="img"
                image={slide.image}
                alt={slide.title}
                sx={{ width: { xs: "100%", md: "50%",lg: "40%"  }, height: "500px", objectFit: "cover", borderRadius:"10%" }}
              />
              <CardContent sx={{ width: { xs: "100%", md: "50%" }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="h5" fontWeight="bold">{slide.title}</Typography>
                <Typography variant="body1" mt={1}>{slide.description}</Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;

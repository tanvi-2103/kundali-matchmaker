import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  FormControl,
  Typography,
} from "@mui/material";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

const CosmicForm: React.FC = () => {
  const [girlName, setGirlName] = useState<string>("");
  const [boyName, setBoyName] = useState<string>("");
  const [birthDateGirl, setBirthDateGirl] = useState<Dayjs | null>(null);
  const [birthDateBoy, setBirthDateBoy] = useState<Dayjs | null>(null);
  const [birthTimeGirl, setBirthTimeGirl] = useState<Dayjs | null>(null);
  const [birthTimeBoy, setBirthTimeBoy] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        // bgcolor="rgb(24, 58, 75)"
      >
        <Box pl={3}  maxWidth={900} mx="auto" borderRadius={2} sx={{
    boxShadow: "4px 4px 30px rgba(255, 255, 255, 0.8)", // Custom shadow
  }}>
          <Grid container spacing={3} alignItems="center">
            {/* Form Section */}
            <Grid item xs={12} md={7}>
              <Typography variant="h5" align="center" gutterBottom>
                Guna Milan
              </Typography>

              <Grid container spacing={3}>
                {/* Girl's Details */}
                <Grid item xs={12} md={6}>
                  <h3>♀ Girl's Birth Details</h3>
                  <FormControl fullWidth margin="normal">
                    <TextField
                      label="Girl Name"
                      variant="outlined"
                      value={girlName}
                      onChange={(e) => setGirlName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <TextField label="Location" value="Ujjain, Madhya Pradesh, India" disabled />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <DatePicker
                      label="Birth Date"
                      value={birthDateGirl}
                      onChange={(newValue) => setBirthDateGirl(newValue)}
                      slotProps={{ textField: { fullWidth: true } }}
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <TimePicker
                      label="Birth Time"
                      value={birthTimeGirl}
                      onChange={(newValue) => setBirthTimeGirl(newValue)}
                      slotProps={{ textField: { fullWidth: true } }}
                    />
                  </FormControl>
                </Grid>

                {/* Boy's Details */}
                <Grid item xs={12} md={6}>
                  <h3>♂ Boy's Birth Details</h3>
                  <FormControl fullWidth margin="normal">
                    <TextField
                      label="Boy Name"
                      variant="outlined"
                      value={boyName}
                      onChange={(e) => setBoyName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <TextField label="Location" value="Ujjain, Madhya Pradesh, India" disabled />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <DatePicker
                      label="Birth Date"
                      value={birthDateBoy}
                      onChange={(newValue) => setBirthDateBoy(newValue)}
                      slotProps={{ textField: { fullWidth: true } }}
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <TimePicker
                      label="Birth Time"
                      value={birthTimeBoy}
                      onChange={(newValue) => setBirthTimeBoy(newValue)}
                      slotProps={{ textField: { fullWidth: true } }}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Box mt={3} textAlign="center">
                <Button variant="contained"
                //  sx={{ backgroundColor: "rgb(11, 50, 70)", color: "white" }}
                  size="large">
                  MATCH KUNDALI
                </Button>
              </Box>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={5} display="flex" justifyContent="center">
              <img
                src="/couple.jpg" // Replace with your image URL
                alt="Astrology"
                style={{ width: "100%",  maxHeight:"650px", objectFit: "cover" ,borderTopRightRadius: "9px",  // Rounded top-right corner
                  borderBottomRightRadius: "9px"}}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default CosmicForm;

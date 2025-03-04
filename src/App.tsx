import React from 'react';
import logo from './logo.svg';
import './App.css';
import CosmicForm from './components/MatchingForm/CosmicForm';
import Home from './pages/Home/Home';
import Navbar from './components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import { ThemeProvider ,CssBaseline} from '@mui/material';
import {  cosmicTheme, mildTheme, palletTheme, theme } from './components/Theme/theme';


function App() {
  return (
   <>
   <ThemeProvider theme={cosmicTheme}>
    <CssBaseline/>
   <Navbar></Navbar>
   <Outlet></Outlet></ThemeProvider>
   {/* <CosmicForm></CosmicForm> */}
   </>
  );
}

export default App;

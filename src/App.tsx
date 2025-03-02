import React from 'react';
import logo from './logo.svg';
import './App.css';
import CosmicForm from './components/MatchingForm/CosmicForm';
import Home from './pages/Home/Home';
import Navbar from './components/Header/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <>
   <Navbar></Navbar>
   <Outlet></Outlet>
   {/* <CosmicForm></CosmicForm> */}
   </>
  );
}

export default App;

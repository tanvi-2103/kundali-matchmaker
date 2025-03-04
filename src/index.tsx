import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './components/Signin/Login';
import SignUp from './components/Signin/SignUp';

let childRoutes=[
  
  {
    
    element:<Home></Home>,
    path:'/'
  },
  {
    element:<Login></Login>,
    path:'/login'
  },
  {
    element:<SignUp></SignUp>,
    path:'/signup'
  }
  
  
 
]

const router = createBrowserRouter(
  [{element:<App></App>,
    path:'/',
    children:childRoutes
  }]
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}></RouterProvider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

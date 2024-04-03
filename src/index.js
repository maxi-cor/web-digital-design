import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/Home';
import AcercaDe from './routes/AcercaDe/AcercaDe';
import Portfolio from './routes/Portfolio/Portfolio';
import Contacto from './routes/Contacto/Contacto';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home/>,
      errorElement: <h1>Error</h1>
  },
  {
    path: "/acerca-de",
      element: <AcercaDe/>,
  },
  {
    path: "/portfolio",
      element: <Portfolio/>,
  },
  {
    path: "/contacto",
      element: <Contacto/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router}/>

);

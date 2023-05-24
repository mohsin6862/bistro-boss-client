import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { router } from './Rouets/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<HelmetProvider><div className='w-full max-w-6xl mx-auto'>    <RouterProvider router={router} /></div></HelmetProvider>
  </React.StrictMode>,
)

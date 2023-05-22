import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'

import { router } from './Rouets/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div className='w-full max-w-screen-xl mx-auto'>    <RouterProvider router={router} /></div>
  </React.StrictMode>,
)

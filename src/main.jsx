import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { router } from './Rouets/Routes';
import AuthProvider from './Provider/AuthProvider/AuthProvider';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<HelmetProvider>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <div className='w-full max-w-6xl mx-auto'>    <RouterProvider router={router} /></div>
    </QueryClientProvider>
  
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

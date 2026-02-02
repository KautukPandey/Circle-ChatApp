import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import App from './App.tsx'
import LoginPage from './pages/LoginPage.tsx'
import SignupPage from './pages/SignupPage.tsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<SignupPage />} />
        </>
    )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

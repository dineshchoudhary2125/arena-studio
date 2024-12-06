import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Visualization from './components/Visualization'
import Clients from './components/Clients'
import Career from './components/Career'
import Contact from './components/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/visualization' element={<Visualization />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/career' element={<Career />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

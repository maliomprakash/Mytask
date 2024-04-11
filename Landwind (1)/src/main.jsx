import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ChartComponent from './Component/ChartComponent.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>


  <Route path="/" element={<App />} />

  <Route path="/ChartComponent" element={<ChartComponent />} />
  </Routes>
  </BrowserRouter>
)

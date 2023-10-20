import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import BMI from "./components/BMI"
import BMIresults from "./components/BMIresults"
import NotFound from "./components/NotFound"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Routes>
            <Route index element={<Home />} />
            <Route path="bmi" element={<BMI />} />
            <Route path="bmi/:results" element={<BMIresults />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import './assets/css/App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Videos from "./pages/Videos.jsx";

function App() {

  return (
    <div className='app'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/videos' element={<Videos />} />
        </Routes>
    </div>
  )
}

export default App

import { useState } from 'react'
import './assets/css/App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Videos from "./pages/Videos.jsx";

function App() {
    const [videos, setVideos] = useState(
        [
            {name: "VideoName1", link: "https://www.youtube.com/watch?v=Wkc8pkaJjlU"},
            {name: "VideoName2", link: "https://www.youtube.com/watch?v=Wkc8pkaJjlU"},
            {name: "VideoName3", link: "https://www.youtube.com/watch?v=Wkc8pkaJjlU"},
            {name: "VideoName4", link: "https://www.youtube.com/watch?v=Wkc8pkaJjlU"},
            {name: "VideoName5", link: "https://www.youtube.com/watch?v=Wkc8pkaJjlU"},
        ]
    )

  return (
    <div className='app'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/videos' element={<Videos videos = {videos} />} />
        </Routes>
    </div>
  )
}

export default App

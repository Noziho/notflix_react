import {useEffect, useState} from 'react'
import './assets/css/App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Videos from "./pages/Videos.jsx";
import SearchResult from "./pages/searchResult.jsx";

function App() {
    const API_KEY = 'ef9cf0f05e1dcda042c9989a878b11ca';
    const [videoData, setVideoData] = useState([])
    useEffect(() => {
        async function getData()
        {
            const data = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&language=fr-FR`);
            setVideoData(await data.json())
        }
        getData()
            .catch(() => console.log('Erreur de récupération des vidéos'));
    }, []);
  return (
    <div className='app'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/videos' element={<Videos videoData = {videoData} />} />
            <Route path='/search/:name' element={<SearchResult videoData={videoData}/>} />
        </Routes>
    </div>
  )
}

export default App

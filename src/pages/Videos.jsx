import React, {useEffect, useState} from 'react'
import VideoCard from "../components/VideoCard.jsx";

const Videos = () => {
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
    let results = videoData.results
        if(results){
            return(
                results.map(video => {
                    return <VideoCard key={video.id} video = {video}/>
                })
            )
        }


}
export default Videos

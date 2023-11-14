import React from 'react'
import {useParams} from "react-router-dom";
import VideoCard from "../components/VideoCard.jsx";

const SearchResult = ({videoData}) => {
    let params = useParams();
    console.log(params.name)
    let results = videoData.results;

    if (results) {
        return(
            results.map(video => {
                if (video.name === params.name) {
                    return <VideoCard key={video.id} video={video}/>
                }
            })
        )
    }

}
export default SearchResult

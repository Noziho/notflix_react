import React, {useEffect, useState} from 'react'
import VideoCard from "../components/VideoCard.jsx";

const VideosList = ({videoData}) => {

    let results = videoData.results
    if(results){
        return(
            results.map(video => {
                return <VideoCard key={video.id} video = {video}/>
            })
        )
    }
}
export default VideosList

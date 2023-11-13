import React from 'react'
import VideoCard from "../components/VideoCard.jsx";

const Videos = ({videos}) => {
    return (
        videos.map(video => {
            return <VideoCard key={video.name} video = {video}/>
        })
    )
}
export default Videos

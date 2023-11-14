import React from 'react'

const VideoCard = ({video}) => {
    return (
        <>
            <h1>{video.name}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${video.backdrop_path}`} alt=""/>
        </>

    )
}
export default VideoCard

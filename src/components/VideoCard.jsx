import React from 'react'

const VideoCard = ({video}) => {
    return (
        <>
            <h1>{video.name}</h1>
            <div className='videoCard'>
                {video.link}
            </div>
            <iframe width="640" height="587" src="https://www.youtube.com/embed/Wkc8pkaJjlU" title="Nuit" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </>

    )
}
export default VideoCard

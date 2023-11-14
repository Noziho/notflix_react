import React, {useEffect, useState} from 'react'
import SearchBar from "../components/searchBar.jsx";
import VideosList from "../components/VideosList.jsx";

const Videos = ({videoData}) => {
    return(
        <>
            <SearchBar videoData = {videoData} />
            <VideosList videoData={videoData} />
        </>
    )
}
export default Videos

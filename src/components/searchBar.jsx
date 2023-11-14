import React, {useEffect, useState} from 'react'
import SearchResult from "../pages/searchResult.jsx";

const SearchBar = () => {
    const [value, setValue] = useState('');


    return (
        <>
            <label htmlFor="search">Rechercher</label>
            <input type="search" id='search' onChange={(e) => setValue(e.target.value)} onBlur={() => {
                document.location = `/search/${value}`
                setValue('')
            }}/>
        </>
    )

}
export default SearchBar

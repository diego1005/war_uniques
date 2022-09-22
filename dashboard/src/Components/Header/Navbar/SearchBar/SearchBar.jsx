import React from 'react'
import "./SearchBar.css"

function SearchBar() {
  return (
    <div className='search-bar'>
        <input type="text" className='search-in' placeholder='Search here'/>
    </div>
  )
}

export default SearchBar
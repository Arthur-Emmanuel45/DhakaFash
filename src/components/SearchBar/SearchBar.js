import React from 'react'
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({onSearchOff}) => {
  return (
    <div>
      <div id='Search_bar'>
        <input type='search' placeholder='Searching...'></input>
        <button onClick={onSearchOff}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button>
      </div>
    </div>
  )
}

export default SearchBar;
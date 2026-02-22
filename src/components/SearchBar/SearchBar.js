import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({onSearchOff}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <div>
      <div className='Search_bar'>
        <form onSubmit={handleSearch}>
          <input type='text' placeholder='Search products...' value={query} onChange={(e) => setQuery(e.target.value)}></input>
          <button type='submit' className="search_button"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
        </form>
        <button onClick={onSearchOff}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button>
      </div>
    </div>
  )
}

export default SearchBar;
import React from "react";
import "./search-box.styles.css";

export const SearchBbox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
) 
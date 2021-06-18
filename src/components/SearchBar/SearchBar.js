import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {

    const submitHandler = (e) => {
        e.preventDefault();
        props.handleSubmit();
    }

    const handleFocus = (e) => {
        console.log("handleFocus hitttttttttttttt");
        props.handleFocus('focus')
    }

    const handleBlur = (e) => {
        console.log("handleBlur hitttttttttttttt");
        props.handleFocus('blur')
    }

    return (
        <div className={`search-wrapper ${props.loading ? 'active' : ''} ${props.searchData ? 'auto-height' : ''}`}>
            <form onSubmit={submitHandler}>
                <input
                    id="titleInput"
                    type="text"
                    aria-label="Search"
                    aria-required="true"
                    name="title"
                    ref={props.textInput}
                    className="search-field"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                />
                <label htmlFor="titleInput" className={` ${!props.isFocused ? '' : 'hide-label'}`}></label>
                <input
                    type="submit" 
                    value="Submit" 
                    aria-label="Submit"
                />
            </form>
        </div>
    )
}

export default SearchBar;
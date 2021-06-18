import React from 'react'
import './FilterButton.scss'

const FilterButton = (props) => {
    const { handleFilter, title, sortByTitle, sortByYear } = props;

    const handleFilterClick = () => {
        let sortType;
        if(title == 'Sort Alphabetical') {
            sortType = 'title';
        } else {
            sortType = 'year';
        }
        handleFilter(sortType);
    }
    return (
        <li className={`filter-btn ${sortByTitle ? 'active' : ''} ${sortByYear ? 'active' : ''}`} onClick={handleFilterClick}>
            {title}
        </li>
    )
}

export default FilterButton;
import React from 'react'

const SearchBar = (props)=> {    
    
    const SearchInput = React.createRef();
    
    const handleSearch = () => {
        const searchValue = SearchInput.current;
            props.onSearchTerm(searchValue.value)
    }

    return(
    
        <div className="search">
            <input
                className="form-control"
                placeholder="Search for a character " 
                ref={ SearchInput }
                onChange = { handleSearch }    
            />
        </div>
    )
}

export default SearchBar
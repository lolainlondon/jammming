import react, {useState} from 'react'

function SearchBar() {
    return (
        <form>
            <label htmlFor="search">Search</label>
            <input id="search" name="search" type="text"/>
        </form>
    )
}

export default SearchBar;
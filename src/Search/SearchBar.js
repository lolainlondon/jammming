import react, {useState} from 'react'

function SearchBar() {
    return (
        <form>
            <label htmlFor="search">Brian</label>
            <input id="search" name="search" type="text"/>
        </form>
    )
}

export default SearchBar;
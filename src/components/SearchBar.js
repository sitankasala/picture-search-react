import '../css/SearchBar.css'
import '../api'
import {useState} from "react";

function SearchBar({onSubmit}) {
    const [searchText, setSearchText] = useState('')
    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            console.log('enter key pressed');
            event.preventDefault()
            onSubmit(searchText);
        }
    }
    const handleOnChange = (event) => {
        setSearchText(event.target.value);
        console.log('onchange finished');
    }
    return (
        <div align='center'>
            <p>please enter search text</p>
            <textarea
                className='search-area'
                value={searchText}
                onChange={handleOnChange}
                onKeyDown={handleEnterKey}>
            </textarea>
        </div>
    );
}

export default SearchBar;

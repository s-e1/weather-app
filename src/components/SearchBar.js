import { useState } from "react";
import { useSelector } from 'react-redux';
import "./SearchBar.css";

function SearchBar({ searchCB, weatherCB }) {
    const searchResults = useSelector(state => state.searchResults);
    const [text, setText] = useState("");

    const search = (e) => {
        setText(e.target.value);
        searchCB(e.target.value);
    }

    const sendWeather = (name, key) => {
        weatherCB(name, key);
        setText("");
        searchCB("");
    }

    return (
        <div>
            <div className="searchBar">Search: 
                <input onChange={search} value={text} />
            </div>
            {searchResults.length ?
                <ul className="searchResults">
                    {searchResults.map((e, i) => {
                        return <li className="searchItem" key={i} onClick={() => sendWeather(e.cityName, e.key)}>
                            {e.cityName}, {e.countryName}
                        </li>
                    })}
                </ul>
                : null}
        </div>
    );
}

export default SearchBar;
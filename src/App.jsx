import {useEffect, useState} from "react";
import './App.css'
import searchIcon from './searchIcon.svg';
import MovieCard from "./MovieCard.jsx";

// 51f70017
function App() {
    const API_URL = "https://www.omdbapi.com?apikey=51f70017";

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        //https://www.omdbapi.com?apikey=51f70017&s=telugu
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        // searchMovies();
    }, [searchTerm]);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchMovies(searchTerm);
        }
    };

    return (
        <div className="app">
            <h1>Movie Land </h1><h2>🍿</h2>
            <div className="search">
                <input
                    placeholder="Search for Movies"
                    alt="movieSearch"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                    onKeyDown={handleKeyPress}
                />
                <img
                    src={searchIcon}
                    alt="searchIcon"
                    onClick={() => {
                        searchMovies(searchTerm);
                    }}/>
            </div>
            {movies?.length > 0 ?
                <div className="container">
                    {movies.map((movie) => (
                        <div>
                            <MovieCard Movie={movie}/>
                        </div>
                    ))}

                </div> : <div className="empty">
                    <h3 style={{color: 'white'}}>No Movies !! 🥺 </h3>
                </div>
            }


        </div>
    )
}

export default App;

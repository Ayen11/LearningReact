import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

import MovieCard from './MovieCard'

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=fbde6639';

const Movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
  }



function App() {

  const [Movies, setMovies ] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {

    searchMovies('spiderman');

  }, []);

  return (
    <div className='app'>
      <h1>MovieLoind</h1>

      <div className='search'>
        <input
        placeholder='Search for movies'
        value="Superman"
        onChange={() => {}}
        />
        <img 
        src={SearchIcon}
        alt="src"
        onClick={() => {}}
      />
        
      </div>

      {
        Movies?.length > 0 //check
        ? (   //? is if true
        <div className='container'>
         {Movies.map((movie) => (
            <MovieCard Movie={movie} />
         ))}
        </div>
        ) : //: is else
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }


    </div>
  );
}

export default App;

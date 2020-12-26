import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'


export const Row = ({ title, fetchUrl, isLargeRow }) => {


    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {

        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            // console.log(request)

            setMovies(request.data.results)
            return request
        }

        fetchData();

    }, [fetchUrl])

    // console.log(movies)
    const posterUrl = "https://images.tmdb.org/t/p/original/";

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlPrams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlPrams.get("v"));
            }).catch(error => console.log(error))
        }
    }


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters" >
                {movies.map(movie => (
                    <img key={movie.id} 
                    className={`row__posterImage ${isLargeRow && "row__posterLarge"}`} 
                    src={`${posterUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    onClick={() => handleClick(movie)} />
                ))}
            </div>

            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
        
    )
}

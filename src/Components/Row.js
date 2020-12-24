import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'

export const Row = ({ title, fetchUrl, isLargeRow }) => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            console.log(request)

            setMovies(request.data.results)
            return request
        }

        fetchData();

    }, [fetchUrl])

    console.log(movies)

    const posterUrl = "https://images.tmdb.org/t/p/original/";

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters" >
                {movies.map(movie => (
                    <img key={movie.id} className={`row__posterImage ${isLargeRow && "row__posterLarge"}`} src={`${posterUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

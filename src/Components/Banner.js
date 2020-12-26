import React, { useState, useEffect} from 'react'
import axios from '../axios'
import requests from '../requests'
import './Banner.css'

export const Banner = () => {

    const [ movie, setMovie ] = useState([])

    useEffect(() => {
        const fetchBanner = async () => {
            const request = await axios.get(requests.fetchTrending);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
            return request
        }

        fetchBanner();
    },[])

    console.log(movie)

    const trancate = (str, n) => {
        return str?.length ? str.substr(0, n-1) + "...." : str;
    }

    return (
    <header className="banner" style={{
        backgroundSize:"cover",
        backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
    }}>
        {/* <img src={`https://images.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt=""/> */}
        <div className="banner__contents">
            <h1 className="banner__title">
                { movie?.title || movie?.name || movie?.original_name }
            </h1>
            <div className="nanner__butons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h2 className="banner__description">
                {movie?.overview}
                {trancate(movie?.overview, 60)}
            </h2>
        </div>
        <div className="banner__fadebottom"></div>
    </header>
    )
}

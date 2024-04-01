import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from './Requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }

        fetchData();
    },  []);

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ccd3cde-f8c0-480c-ab9d-4db767bda944/dc0txr7-14cb4e25-21fa-49f2-89a5-169067e6b7d1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjY2QzY2RlLWY4YzAtNDgwYy1hYjlkLTRkYjc2N2JkYTk0NFwvZGMwdHhyNy0xNGNiNGUyNS0yMWZhLTQ5ZjItODlhNS0xNjkwNjdlNmI3ZDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fLwk5p4ks16nRV1_JuOhgY8gGabJtu2ZVKlU6ousyNc")`,
                backgroundPosition: "center center",
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>Movie Name</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My list</button>
                </div>
                <h1 className='banner_description'>
                    {truncate(
                        `This is a test decription for my Netflix clone (film desctiption)
                This is a test decription for my Netflix clone (film desctiption)
                This is a test decription for my Netflix clone (film desctiption)
                This is a test decription for my Netflix clone (film desctiption)
                This is a test decription for my Netflix clone (film desctiption)
                This is a test decription for my Netflix clone (film desctiption)
                This is a test decription for my Netflix clone (film desctiption)
                This is a test decription for my Netflix clone (film desctiption)
                This is a test decription for my Netflix clone (film desctiption)`, 150
                    )}
                </h1>
            </div>

            <div className='banner--fadeButton' />
        </header>
    )
}

export default Banner
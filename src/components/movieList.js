import React from "react";
import Movie from "./movie";

const MovieList = ({movies}) => {

    const movieNodes = movies.map(movie => {
        return(
            <Movie name={movie.name} key={movie.id} url={movie.url}></Movie>
        )
    })

    return(
        <>
            {movieNodes}
        </>
    )
}

export default MovieList;
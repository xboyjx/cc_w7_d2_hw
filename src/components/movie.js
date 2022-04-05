import React from "react";

const Movie = ({url, name}) => {

    return(
        <>
            <li><a href={url}>{name}</a></li><br/>
        </>
    );
};

export default Movie;
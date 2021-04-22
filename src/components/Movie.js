import React from 'react'

function Movie(props){
    return(
        <div>
            <h2> Title: {props.movie.title} </h2>
            <h3> Director: {props.movie.director} </h3>
            <button onClick={() => props.deleteMovie(props.index)}> DELETE </button>
        </div>
    )
}

export default Movie
import React, { Component } from 'react'
import data from './Data.js'
import Movie from './Movie.js'

class MovieList extends Component {
    constructor(){
        super()
        this.state = {
            // movies: data                         This imports an array of objects or just an array into state.
            movies: data,
            // index: 0                             use this to get a respective one in the object or array
        }
    }

    // where to put methods

    deleteMovie = (index) => {
        const {movies} = this.state
        movies.splice(index,1)
        this.setState({movies: movies})
    }

    render(){
        return(
            <div>
                {/* <Movie movie={this.state.movies[this.state.index]} /> */}
                <h2> Movie List </h2>
                {this.state.movies.map((e, index) => {
                    return (
                        <Movie movie={e} deleteMovie={this.deleteMovie} index={index}/>
                        // <div>
                        //     <h2> Title: {e.title} </h2>
                        //     <h3> Director: {e.director}</h3>
                        // </div>
                    )
                })}
            </div>
        )
    }
}

export default MovieList
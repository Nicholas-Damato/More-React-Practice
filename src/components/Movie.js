// import React from 'react'

// function Movie(props) {
//     return (
//         <div>
//             <h2> Title: {props.movie.title} </h2>
//             <h3> Director: {props.movie.director} </h3>
//             <button onClick={() => props.deleteMovie(props.index)}> DELETE </button>
//         </div>
//     )
// }

// export default Movie

import React, { Component } from 'react'
import saveMovie from './MovieList'

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            title: '',
            director: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    saveMovie = () => {
        this.props.saveMovie(this.props.index, this.state.title, this.state.director)
        this.toggleEditMode()
    }


    render() {
        const { movie, deleteMovie, index } = this.props
        return this.state.editMode ? (
            <div>
                <input placeholder={movie.title} value={this.state.title} name='title' onChange={(e) => this.handleChange(e)} />
                <input placeholder={movie.director} value={this.state.director} name='director' onChange={(e) => this.handleChange(e)} />
                <button onClick={this.saveMovie}> Save Movie </button>
            </div>
        ) : (
            <div>
                <h2> Title: {movie.title} </h2>
                <h3> Director: {movie.director} </h3>
                <button onClick={() => deleteMovie(index)}> DELETE </button>
                <button onClick={this.toggleEditMode}> Edit </button>
            </div>
        )
    }
}

export default Movie
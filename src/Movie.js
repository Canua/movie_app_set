import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


class Movie extends Component {
    static propType = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    // <MoviePoster poster={this.props.poster}/> 객체의 String 값이 전달
     
    render() {
        return (
            <div className="Movie">
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster}/>
            </div>
        );
    }
}

// class MoviePoster extends Component {
//     render() {
//         console.log(this.props);
//         return (
//                 <img src={this.props.poster} alt=''/>
//         );
//     }
// }

function MoviePoster({poster}){
    return (
        <img src={poster} alt=''></img>
    )
}


export default Movie;
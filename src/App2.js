import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';
import logo from './ajax-loader.png'

      
// .then((response => {
//   const result = response;
//   return result;  
// })

class App extends Component {
    state = {
    }
    componentWillMount() {
        // request API
      }
    
    componentDidMount() {
       fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then((response) => response.json() )
      .then((json) => {
        console.log(json.data)
        this.setState({
          movies: json.data.movies
        });
      })
      .catch(err => console.log(err))
  }


  _renderMovies= () => {
    const movies = this.state.movies.map((movie, index) => {
      console.log(movie);
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={index}/>
  });
  return movies;
  }

  // movies 객체 생성
  _render() {
      const movies = this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }
  render() {
    return (
        <div className="App">
            {/* {(this.state.movies==null) ? <h5>Loading...</h5> : this._render()} */}
            {this.state.movies ? this._renderMovies() : <img className='loading-img' src={logo} alt="Logo" />}
        </div>
        );
    }
}

export default App;

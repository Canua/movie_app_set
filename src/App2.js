import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';



      
class App extends Component {
    state = {
    }
    componentWillMount() {
        // request API
      }
      componentDidMount() {
        // processing response
        setTimeout(() => {
            this.setState({
                movies: [
                    {
                        title:'생일',
                        poster:'http://imgnews.naver.net/image/109/2019/03/26/0003976393_001_20190326082605104.jpg'
                        },
                        {
                          title:'헬보이',
                          poster:'https://seoul-p-studio.bunjang.net/product/90573459_1_1552438935_w640.jpg'
                        },
                        {
                        title:'샤잠!',
                        poster:'https://i.ytimg.com/vi/8g_UXrr0rt8/maxresdefault.jpg'
                        },
                        {
                        title:'미성년',
                        poster:'http://www.unpluggedbaba.com/wp-content/uploads/2019/03/%EC%98%81%ED%99%94-%EB%AF%B8%EC%84%B1%EB%85%84-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'
                        },
                        {
                        title:'극한직업',
                        poster:'https://t1.daumcdn.net/liveboard/maxmovie/d16b39af2cd14089b3e0b6fde57e3274.JPG'
                        },
                        {
                        title : '덤보',
                        poster : 'https://image.ytn.co.kr/osen/2019/01/20190105_1546667487_49132400_1.jpg'
                }]
            })
        }, 3000)
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
            {this.state.movies ? this._render() : 'Loading'}
        </div>
        );
    }
}

export default App;

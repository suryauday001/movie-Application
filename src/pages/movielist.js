import React, { Component } from 'react'
import { userlogin } from '../function/postData';
import ContentLoader from '../component/loading';
import { Redirect } from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/footer';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      trending: [],
      base_url: "",
      imagesize: "",
      isLoading: true
    }
  }

  componentDidMount() {
    Promise.all([
      fetch('https://api.themoviedb.org/3/configuration?api_key=d69d7ea6f792347ca3760283324b6600'),
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=d69d7ea6f792347ca3760283324b6600&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'),
      fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=d69d7ea6f792347ca3760283324b6600')
    ])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([config, movies, trending]) => this.setState({
        movies: movies.results,
        base_url: config.images.base_url,
        imagesize: config.images.still_sizes[2],
        trending: trending.results,
        isLoading: false
      }));

  }


  render() {
    //console.log(this.state.congiguration.base_url);
    console.log(this.state);

    const { isLoading, movies, base_url, imagesize, trending } = this.state;

    if (localStorage.getItem('userdata')) {
      return (
        <React.Fragment>
          <Header />
          <section className="wrapper p-movieList">
            <div className="container">

              <div className="left-pannel">
                <h2>Trending</h2>
                <ul>
                  {!isLoading ? (
                    trending.slice(0, 10).map(trendmovie => {
                      const { original_title } = trendmovie;
                      return (
                        <li>
                          <h5>{original_title}</h5>

                        </li>
                      )
                    })

                  ) : (

                      <ContentLoader />
                    )}

                </ul>
              </div>
              <div className="right-pannel">
                <h2>Movie</h2>
                <ul>
                  {!isLoading ? (
                    movies.map(moviesList => {
                      const { poster_path, original_title, vote_average } = moviesList;
                      const imagepath = this.state.base_url + this.state.imagesize + poster_path;
                      const votenum = vote_average / 10 * 100;
                      return (
                        <li>
                          <div className="moviecard">
                            <img src={imagepath} />
                            <div className="movieinfo">
                              <div><span class="mdi mdi-cards-heart"></span> <abbr>{vote_average}/10</abbr></div>
                              <div>
                                <p>{original_title}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    })
                  ) : (

                      <ContentLoader />
                    )}
                </ul>
              </div>

            </div>
          </section>
          <Footer/>
        </React.Fragment>
      )
    }

    else {
      return (
        <Redirect path={'/'} to={'/'} />
      )
    }


  }
}

export default MovieList
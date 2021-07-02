import ImageCarousel from "./ImageCarousel";
import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./MovieList";


class UpcomingMovies extends Component {
  componentDidMount() {
    this.props.onRequestUpcomingMovies()
  }
  render() {
    return this.props.upcomingmovies && 
    <div>
    <MovieList movieList={this.props.upcomingmovies} isUpcoming={true} />
    </div>
  }
}
const mapStateToProps = (state) => {
  return {
    upcomingmovies: state.sagaUpcomingMoviesReducer }
};


function mapDispatchToProps(dispatch) {
  return {
    onRequestUpcomingMovies : () => dispatch({ type: 'UPCOMINGMOVIES_FETCH_REQUESTED' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovies);
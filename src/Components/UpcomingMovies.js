import React, { Component } from "react";
import { connect } from "react-redux";


import MovieList from "./movies/MovieList";

class UpcomingMovies extends Component {
  componentDidMount() {
    this.props.onRequestUpcomingMovies();
  }
  render() {
    return (
      this.props.upcomingmovies && (
        <div
          style={{
            width:'100rem',
            padding: "5rem",
            paddingTop: "1rem",
          }}
        >
          <h3>Upcoming movies</h3>
          <MovieList movieList={this.props.upcomingmovies} pageName='upcoming'/>
        </div>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    upcomingmovies: state.sagaUpcomingMoviesReducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onRequestUpcomingMovies: () =>
      dispatch({ type: "UPCOMINGMOVIES_FETCH_REQUESTED" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovies);

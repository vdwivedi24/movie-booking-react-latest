import ImageCarousel from "../ImageCarousel";
import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./MovieList";

class LatestMovies extends Component {
  componentDidMount() {
    this.props.onRequestMovies();
  }
  render() {
    return (
      this.props.movies && (
        <div
          style={{
            padding: "5rem",
            paddingTop: "0rem",
          }}
        >
          <ImageCarousel />
          <MovieList movieList={this.props.movies} />
        </div>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.sagaMoviesReducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onRequestMovies: () => dispatch({ type: "MOVIES_FETCH_REQUESTED" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies);

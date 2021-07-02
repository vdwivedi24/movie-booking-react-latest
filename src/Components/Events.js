import ImageCarousel from "./ImageCarousel";
import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from './movies/MovieList';

class Events extends Component {
  componentDidMount() {
    this.props.events();
  }
  render() {
    return (
      this.props.eventData && (
        <div
          style={{
            padding: "5rem",
            paddingTop: "1rem",
          }}
        >
          <h3>Events</h3>
          <MovieList movieList={this.props.eventData} isUpcoming={true} />
        </div>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    eventData: state.sagaEvents,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    events: () => dispatch({ type: "FETCH_EVENTS" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);

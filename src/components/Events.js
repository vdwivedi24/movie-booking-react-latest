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
            width:'100rem',
            padding: "5rem",
            paddingTop: "1rem",
          }}
        >
          <h3>Events</h3>
          <MovieList movieList={this.props.eventData} pageName='events'/>
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

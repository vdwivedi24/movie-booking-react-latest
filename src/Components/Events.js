import ImageCarousel from "./ImageCarousel";
import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./MovieList";


class Events extends Component {
  componentDidMount() {
    this.props.events()
  }
  render() {
      return this.props.eventData && 
      <div>
      <MovieList movieList={this.props.eventData} isUpcoming={true} />
      </div>
}
}
const mapStateToProps = (state) => {
  return {
    eventData: state.sagaEvents }
};


function mapDispatchToProps(dispatch) {
  return {
    events : () => dispatch({ type: 'FETCH_EVENTS' }),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
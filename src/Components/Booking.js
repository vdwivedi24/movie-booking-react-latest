import React, { Component, useEffect } from "react";
import QRCodeGenerator from "./QRCodeGenerator";
import { connect } from "react-redux";

function Booking(props) {
  useEffect(() => {
    props.onMovieBooking();
  }, []);
  return (
    <div
      style={{
        padding: "5rem",
      }}
    >
      {props.bookedMovie && (
        <QRCodeGenerator
          name={props.bookedMovie.name}
          image={props.bookedMovie.image}
          actors={props.bookedMovie.actors}
          seats={props.bookedMovie.seats}
          plot={props.bookedMovie.plot}
          genres={props.bookedMovie.genres}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bookedMovie: state.bookedmoviereducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onMovieBooking: () => dispatch({ type: "BOOKED_MOVIE_FETCH" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);

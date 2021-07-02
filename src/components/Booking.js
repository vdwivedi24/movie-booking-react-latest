import React, {  useEffect } from "react";
import QRCodeGenerator from "./QRCodeGenerator";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <div>
          <QRCodeGenerator
            name={props.bookedMovie.name}
            image={props.bookedMovie.image}
            actors={props.bookedMovie.actors}
            seats={props.bookedMovie.seats}
            plot={props.bookedMovie.plot}
            genres={props.bookedMovie.genres}
          />
          <p>
            <strong>Congratulations!</strong> You have successfully booked the
            tickets for <strong>{props.bookedMovie.name}</strong>. Enjoy your
            time.
          </p>
          <p>
            <strong>Number of seats:</strong> {props.bookedMovie.seats}
          </p>
          <p>
            <strong>Plot:</strong> {props.bookedMovie.plot}
          </p>
          <p>
            <strong>Genres:</strong> {props.bookedMovie.genres}
          </p>
          <p>
            <strong>Actors:</strong> {props.bookedMovie.actors}
          </p>
          <Button
            style={{
              width: "25rem",
              marginTop: "1rem",
              marginBottom: "1rem",
              marginLeft: "1rem",
              paddingRight: "1rem"
              }}
            variant="dark"
            size="md"
          >
            <Link to={`/`}>Back to Movie List</Link>
          </Button>
        </div>
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

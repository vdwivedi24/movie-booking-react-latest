import React, { useState, useEffect } from "react";
import { Card, Button, Form, CardGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Moviedetail(props) {
  const id = props.match.params.id;
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];

  useEffect(() => {
    props.saveCurrentPageNameToStore(currentPage);
  }, []);

  const [seat, setSeats] = useState(1);
  const onChangeSeat = (event) => {
    setSeats(event.target.value);
  };

  const onBookingPressed = () => {
    const dataToStore = {
      name: movieDataFiltered[0].title,
      image: movieDataFiltered[0].info.image_url,
      actors: movieDataFiltered[0].info.actors,
      seats: seat,
      plot: movieDataFiltered[0].info.plot,
      genres: movieDataFiltered[0].info.genres,
    };
    props.onMovieBooking(dataToStore);
  };
  const movieDataFiltered = props.movieData.filter(
    (movie) => movie.info.rank == id
  );
  return (
    <center>
      {movieDataFiltered.map((filteredMovie) => (
        <CardGroup
          style={{
            paddingTop: "5rem",
            paddingLeft: "1rem",
          }}
        >
          <Card
            style={{
              paddingTop: ".5rem",
              width: "35rem",
              paddingLeft: "1rem",
            }}
          >
            <Card.Body>
              <Card.Img
                style={{
                  width: "35rem",
                  height: "35rem",
                  padding: ".5rem",
                }}
                src={filteredMovie.info.image_url}
              />
            </Card.Body>
          </Card>
          <Card
            style={{
              paddingTop: "5rem",
              paddingRight: "0rem",
              paddingLeft: "-10rem",
              padding: ".5rem",
              float: "left",
              justifyContent: "center",
            }}
          >
            <Card.Body
              style={{
                paddingTop: "1rem",
                paddingRight: "5rem",
                paddingLeft: "10rem",
                padding: ".5rem",
              }}
            >
              <Card.Title>
                <strong>Name</strong>: {filteredMovie.title}
              </Card.Title>
              <Card.Text>
                <strong>Directors</strong>: {filteredMovie.info.directors}
              </Card.Text>
              <Card.Text>
                <strong>Genres:</strong> {filteredMovie.info.genres}
              </Card.Text>
              <Card.Text>
                <strong>Plot: </strong>Plot: {filteredMovie.info.plot}
              </Card.Text>
              <Card.Text>
                <strong>Running time in secs:</strong>{" "}
                {filteredMovie.info.running_time_secs}
              </Card.Text>
              <Card.Text>
                <strong>Actors:</strong> {filteredMovie.info.actors}
              </Card.Text>
              <Card.Text>
                <strong>Release date:</strong> {filteredMovie.info.release_date}
              </Card.Text>
              <Form>
                <Form.Label
                  className="my-1 mr-2"
                  htmlFor="inlineFormCustomSelectPref"
                >
                  <strong> Number of seats: </strong> {seat}
                </Form.Label>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2"
                  onChange={(event) => onChangeSeat(event)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </Form.Control>
              </Form>
              <Button
                style={{
                  width: "25rem",
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  paddingRight: "1rem",
                  marginBottom: "1rem",
                }}
                variant="dark"
                size="md"
                onClick={() => onBookingPressed()}
              >
                <Link to={`/booking`}>Book Now</Link>
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      ))}
    </center>
  );
}

const mapStateToProps = (state) => {
  const reducerName =
    state.detailpagename === "upcoming"
      ? state.sagaUpcomingMoviesReducer
      : state.detailpagename === "events"
      ? state.sagaEvents
      : state.sagaMoviesReducer;
  return {
    movieData: reducerName,
    bookedMovie: state.bookedmoviereducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onMovieBooking: (dataToSave) => {
      dispatch({ type: "BOOKED_MOVIE", data: dataToSave });
    },
    saveCurrentPageNameToStore: (pageName) => {
      dispatch({ type: "MOVIE_DETAIL", data: pageName });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Moviedetail);

import React, { Component } from "react";
import { Card, Button, CardDeck, CardGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Moviedetail(props) {
  const id = props.match.params.id;
  return (
    <center>
      {props.movieData
        .filter((movie) => movie.info.rank == id)
        .map((filteredMovie) => (
          <CardGroup style={{
            paddingTop: "5rem",
            paddingLeft: "1rem",
          }}>
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
                justifyContent:'center'
              }}
            >
              <Card.Body
                style={{
                  paddingTop: ".5rem",
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
                  <strong>Release date:</strong>{" "}
                  {filteredMovie.info.release_date}
                </Card.Text>
                <Button
                  style={{
                    width:'25rem',
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    paddingRight: "1rem",
                    marginBottom:'1rem',
                  }}
                  variant="dark"
                  size="md"
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
  return {
    movieData: state.sagaMoviesReducer,
  };
};

export default connect(mapStateToProps, null)(Moviedetail);

{/* <Button
  style={{
    marginTop: "1rem",
    marginBottom: "1rem",
    marginLeft: "1rem",
    paddingRight: "1rem",
  }}
  variant="link"
>
  <Link to={`/booking`}>Book Now</Link>
</Button>; */}

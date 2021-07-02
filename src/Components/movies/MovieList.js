import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { CardDeck, CardGroup } from "react-bootstrap";

class MovieList extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <CardGroup>
        {this.props.movieList.map((movie) => {
          return (
            <center>
              <CardDeck
                style={{
                  width: "100%",
                  marginLeft: ".5rem",
                  marginRight: ".1rem",
                  marginBottom: ".5rem",
                  paddingRight: ".1rem",
                  paddingLeft: ".1rem",
                  marginTop: ".5rem",
                }}
              >
                <MovieItem
                  upcoming={this.props.isUpcoming}
                  key={movie.info.rank}
                  id={movie.info.rank}
                  name={movie.title}
                  imageUrl={movie.info.image_url}
                />
              </CardDeck>
            </center>
          );
        })}
      </CardGroup>
    );
  }
}
export default MovieList;

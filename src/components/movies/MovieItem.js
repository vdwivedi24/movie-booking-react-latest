import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class MovieItem extends Component {
  constructor(props) {
    super();
  }

  render() {
    const id = parseInt(this.props.id);
    return (
      <Card>
        <Card.Img
          style={{
            height: "25rem",
            marginRight: ".5rem",
            padding: ".5rem",
          }}
          src={this.props.imageUrl}
        />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          {!this.props.upcoming && (
            <Button
              style={{
                width: "20rem",
                marginTop: "1rem",
                marginLeft: "1rem",
                paddingRight: "1rem",
                marginBottom: "1rem",
              }}
              variant="dark"
              size="md"
             >
              <Link to={`/${this.props.pageName}/detail/${id}`}>Movie Detail</Link>
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}
export default MovieItem;

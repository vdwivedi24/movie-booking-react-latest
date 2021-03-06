import { Navbar, Nav, Button } from "react-bootstrap";
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Latest from "./movies/LatestMovies";
import UpcomingMovies from "./UpcomingMovies";
import Events from "./Events";
import Moviedetail from './movies/Moviedetail'
import Booking from "./Booking";

class NavBarCompoment extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" className="justify-content-center">
          <Nav style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
            <Button
              variant="dark"
              style={{ backgroundColor: "#FFFFFF", margin: ".3rem" }}
            >
              <Link to="/">Latest Movies</Link>
            </Button>
            <Button
              variant="dark"
              style={{ backgroundColor: "#FFFFFF", margin: ".3rem" }}
            >
              <Link to="/upcoming">Upcoming Movies</Link>
            </Button>
            <Button
              variant="dark"
              style={{ backgroundColor: "#FFFFFF", margin: ".3rem" }}
            >
              <Link to="/events">Events</Link>
            </Button>
          </Nav>
        </Navbar>
        <div>
          <Route exact path="/" component={Latest}></Route>
          <Route exact path="/upcoming" component={UpcomingMovies}></Route>
          <Route exact path="/:pageName/detail/:id" component={Moviedetail}></Route>
          <Route exact path="/events" component={Events}></Route>
          <Route exact path="/booking" component={Booking}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBarCompoment;

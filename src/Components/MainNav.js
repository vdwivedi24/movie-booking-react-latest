import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Latest from './LatestMovies';
import UpcomingMovies from './UpcomingMovies';
import Events from './Events';
import Moviedetail from "./Moviedetail";
import Booking from './Booking';

class MyNavBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Nav  style={{  marginLeft:'15rem', marginRight:'15rem', width:'auto' }}>
            <Button variant="dark"
            style={{ backgroundColor: '#FFFFFF', margin:'.3rem' }}>
              <Link to="/">Latest Movies</Link>
            </Button>
            <Button variant="dark" style={{ backgroundColor: '#FFFFFF',margin:'.3rem' }}>
              <Link to="/upcoming">Upcoming Movies</Link>
            </Button>
            <Button variant="dark" style={{ backgroundColor: '#FFFFFF',margin:'.3rem' }}>
              {" "}
              <Link to="/events">Events</Link>
            </Button>
          </Nav>
        </Navbar>
        <div>
          <Route exact path="/" component={Latest}></Route>
          <Route exact path="/upcoming" component={UpcomingMovies}></Route>
          <Route exact path="/moviedetail/:id" component={Moviedetail}></Route>
          <Route exact path="/events" component={Events}></Route>
          <Route exact path="/booking" component={Booking}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default MyNavBar;

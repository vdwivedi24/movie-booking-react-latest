import React from "react";
import { QRCode } from "react-qrcode-logo";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function QRCodeGenerator(props) {
  const dataForQRCode = `${props.name} ${props.image} ${props.actors}`;
  return (
    <div>
      <QRCode value={dataForQRCode} />
      <p>
        <strong>Congratulations!</strong> You have successfully booked the
        ticket for <strong>{props.name}</strong>. Enjoy your time.
      </p>
      <p>
        <strong>Number of seats:</strong> {props.seats}
      </p>
      <p>
        <strong>Plot:</strong> {props.plot}
      </p>
      <p>
        <strong>Genres:</strong> {props.genres}
      </p>
      <p>
        <strong>Actors:</strong> {props.actors}
      </p>
      <Button
        style={{
          width: "25rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          paddingRight: "1rem",
          marginBottom: "1rem",
        }}
        variant="dark"
        size="md"
      >
        <Link to={`/`}>Back to Movie List</Link>
      </Button>
    </div>
  );
}
export default QRCodeGenerator;

import React, { Component } from "react";
import QRCodeGenerator from "./QRCodeGenerator";


function Booking(props){
    return(
    <div
    style={{
        padding: "5rem"
      }}>
    <QRCodeGenerator name='We Are What We Are' image='https://ia.media-imdb.com/images/M/MV5BMjI3NjI3NjAyN15BMl5BanBnXkFtZTgwODE3NzMxMDE@._V1_SX400_.jpg' actors='Bill Sage' />
    </div>
    )
}

export default Booking;
import React from 'react';
import { QRCode } from 'react-qrcode-logo';


function QRCodeGenerator(props) {
const dataForQRCode = `${props.name} ${props.image} ${props.actors}`
  return (
    <div>
    <QRCode value={dataForQRCode} /> 
    <p>Congratulations! You have suvvessfully booked the ticket for <strong>{props.name}</strong>. Enjoy your time.</p>
    </div>
     );
}
export default QRCodeGenerator;

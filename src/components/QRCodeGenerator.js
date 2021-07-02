import React from "react";
import { QRCode } from "react-qrcode-logo";


function QRCodeGenerator(props) {
  const dataForQRCode = `${props.name} ${props.image} ${props.actors}`;
  return (
    <div>
      <QRCode value={dataForQRCode} />
    </div>
  );
}
export default QRCodeGenerator;

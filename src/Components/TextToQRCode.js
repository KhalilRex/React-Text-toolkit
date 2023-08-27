import React, { useState } from 'react';
import QRCode from 'qrcode';

function TextToQRCode() {

  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setQrCode(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container text-center my-3 ny-3">
      <input 
        className="form-control mb-3"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}  
      />
      <button className="btn btn-primary" onClick={generateQRCode}>Generate QR Code</button>
      
      {qrCode && <img src={qrCode} alt="QR code generated from entered text" className="mx-auto d-block my-3 ny-3"/>}
      
    </div>
  );
}

export default TextToQRCode;
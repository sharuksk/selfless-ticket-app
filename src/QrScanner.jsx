// QrScanner.js
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './App.css';

const QrScanner = () => {
  const [scanResult, setScanResult] = useState('');

  const handleResult = (result, error) => {
    if (result) {
      setScanResult(result?.text);
    }

    if (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <div className='QRScan'>
        <QrReader
            onResult={handleResult}
            style={{ display: "none" }}
        />
      </div>
      <p>Scanned Code: {scanResult}</p>
    </div>
  );
};

export default QrScanner;

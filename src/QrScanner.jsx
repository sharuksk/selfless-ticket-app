// QrScanner.js
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import ItemCard from './components/items';
import './qr.scss';

const QrScanner = () => {
  const [pageStatus, setPageStatus] = useState(true);
  const [scanResults, setScanResults] = useState([]);
  const [scanned, setScanned] = useState(false);

  const handleResult = (result, error) => {
    if (result) {
      setScanResults((prevResults) => [...prevResults, result?.text]);
    }

    if (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      {pageStatus ? (
        <div>
          <button onClick={() => setPageStatus(false)}>New Button</button>
        </div>
      ) : (
        <div>
          <button onClick={() => {setPageStatus(true); setScanned(true);}}>New Button</button>
          <div className='QR-Scan-main'>
          {!scanned && (
            <QrReader
              className='QR-read'
              onResult={handleResult}
            />
          )}
          <div>
            <h3>Scanned Codes:</h3>
            <ul>
              {scanResults.map((result, index) => (
                <li key={index} style={{gap: "20px"}}>
                  <ItemCard 
                    image="https://rukminim2.flixcart.com/image/612/612/kw85bww0/t-shirt/t/0/4/s-ts-801-803-tqh-original-imag8ycsms2ej5fz.jpeg?q=70"
                    title={result}
                    description="Available offers: Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above. Bank Offer5% Cashback on Flipkart Axis Bank Card. Special PriceGet extra ₹6500 off (price inclusive of cashback/coupon). FreebieSpotify Premium - 3M at ₹119."
                    price="999"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default QrScanner;

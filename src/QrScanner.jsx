// QrScanner.js
import React, { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import ItemCard from './components/items';
import './qr.scss';
import axios from 'axios';

const QrScanner = () => {
  const [pageStatus, setPageStatus] = useState(true);
  const [scanResults, setScanResults] = useState([]);
  const [scanned, setScanned] = useState(false);
  const lastScanTimeRef = useRef(0);

  const handleResult = async (result, error) => {
    const currentTime = new Date().getTime();

    if (result) {
      if (currentTime - lastScanTimeRef.current > 2000) { // 2 seconds debounce
        lastScanTimeRef.current = currentTime;
        let rest = result.text;
        await axios
        .post(`http://localhost:5000/api/items/getItem`, { results: rest })
        .then((res) => {
          // console.log(res.data);
          setScanResults(scanResults => [...scanResults, res.data]);
          console.log(scanResults);
        });
      }
    }

    if (error) {
      // console.log("error");
    }
  };

  const handleDeleteReply = async (targetIndex) => {
    try {
        console.log(targetIndex);
        const newArray = scanResults.filter((item, index) => index !== targetIndex);
        setScanResults(newArray);
        
    } catch (err) {
        console.log(err);
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
          <button onClick={() => { setPageStatus(true); setScanned(true); }}>New Button</button>
          <div className='QR-Scan-main'>
            {!scanned && (
              <QrReader
                className='QR-read'
                onResult={handleResult}
                scanDelay={1000}
              />
            )}
            <div>
              <h3>Scanned Codes:</h3>
              <ul>
                {scanResults.map((result, index) => (
                  <li key={index} style={{ gap: "20px" }}>
                    <ItemCard 
                      image={result.itemImage[0]}
                      title={result.itemName}
                      description={result.itemDescription}
                      price={result.itemPrice}
                    />
                    <button
                        className="deleteBtn"
                        style={{
                            width: "200px",
                            height: "80px",
                        }}
                        onClick={() => {
                            handleDeleteReply(
                              index,
                            );
                        }}
                    ></button>
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

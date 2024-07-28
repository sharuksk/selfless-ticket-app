// QrScanner.js
import React, { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import ItemCard from './items';
import '../SCSS/qr.scss';
import axios from 'axios';
import Invoice from './invoice';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from "../nodelink";
const QrScanner = () => {
  const [pageStatus, setPageStatus] = useState(true);
  const [scanResults, setScanResults] = useState([]);
  const [scanned, setScanned] = useState(false);
  const [total, setTotal] = useState(0);
  const lastScanTimeRef = useRef(0);
  const navigate = useNavigate();

  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'height=500, width=800');
    printWindow.document.write('<html><head><title>Futad Invoice Generating</title>');
    printWindow.document.write('<style>table { width: 100%; border-collapse: collapse; } table, th, td { border: 1px solid black; padding: 10px; } th, td { text-align: left; } </style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };
  const handleResult = async (result, error) => {
    const currentTime = new Date().getTime();

    if (result) {
      if (currentTime - lastScanTimeRef.current > 2000) { // 2 seconds debounce
        lastScanTimeRef.current = currentTime;
        let rest = result.text;
        await axios
        .post(`${API_BASE_URL}/items/getItem`, { results: rest })
        .then((res) => {
          // console.log(res.data);
          setScanResults(scanResults => [...scanResults, res.data]);
          setTotal(total => total + res.data.itemPrice);
          console.log(scanResults);
        })
        .catch(console.log("no data"))
        ;
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
        setTotal(total => total - scanResults[targetIndex].itemPrice);
        
    } catch (err) {
        console.log(err);
    }
};

  return (
    <div>
      <h2>QR Code Scanner</h2>
      {pageStatus ? (
        <div>
          <button onClick={() => setPageStatus(false)}> Click to Scan: </button>
        </div>
      ) : (
        <div>
          <button onClick={() => { setPageStatus(true); setScanned(false); setScanResults([]); setTotal(0) }}>Stop Scanning: </button>
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
              <ul className='unorderedList'>
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
                            width: "100px",
                            height: "50px",
                        }}
                        onClick={() => {
                            handleDeleteReply(
                              index,
                            );
                        }}
                    >Delete</button>
                  </li>
                ))}
              </ul>
              <h2>Total Amount: <span>QAR {total}</span></h2>
              <button onClick={handlePrint} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
                Checkout Your Order
              </button>
              </div>
              <div>
              <div style={{backgroundColor: "white"}}>
              <div ref={printRef}>
                <Invoice 
                  data={scanResults}
                  total={total}
                 />
              </div>
              <button onClick={handlePrint} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
                Print Invoice
              </button>
              </div>

            </div>
          </div>
        </div>
      )}

      <button onClick={()=> navigate("/newitem")} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>

      </button>
    </div>
  );
};

export default QrScanner;

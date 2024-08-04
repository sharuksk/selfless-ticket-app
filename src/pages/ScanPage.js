import React, { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import ItemCard from '../components/items';
import '../SCSS/qr.scss';
import axios from 'axios';
import Invoice from '../components/invoice';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from "../nodelink";

const ScanPage = () => {
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
        <div>
      <h2>QR Code Scanner</h2>
      {pageStatus ? (
        <div>
          <button onClick={() => setPageStatus(false)}> Click to Scan: </button>
        </div>
      ) : (
        <div>
          <button onClick={() => { setPageStatus(true); setScanned(false); setScanResults([]); setTotal(0) }}>Stop Scanning: </button>
          <div  className='flex bg-addRect justify-center border-2 rounded-2xl items-center gap-10 w-[1364px] h-[625px]'>
            <div className='flex-0.4 p-4 pl-20 flex flex-col justify-center items-center'>
            {!scanned && (
              <QrReader className='w-[400px] h-3/5 rounded-full'
                showViewFinder={false}
                onResult={handleResult}
                scanDelay={1000}
              />
            )}
            <div className='text-white'>Scan QR to add Products</div>
            <button className='bg-black/50 py-1 px-8 border-2 border-atlantis text-atlantis rounded-full'>QR Scan</button>
            </div>
            <div className='flex-1 pr-16'>
              <h3>Scanned Codes:</h3>
              <ul className='gap-y-5 max-h-96 overflow-y-auto'>
                {scanResults.map((result, index) => (
                  <li className='flex justify-between bg-cardbg rounded-2xl' key={index} style={{ gap: "20px" }}>
                    <ItemCard 
                      image={result.itemImage[0]}
                      title={result.itemName}
                      description={result.itemDescription}
                      price={result.itemPrice}
                    />
                    <button
                        className='bg-black/50 py-1 px-8 border-2 border-atlantis text-atlantis rounded-full'
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
              {/* <div>
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

            </div> */}
          </div>
        </div>
      )}

      <button onClick={()=> navigate("/newitem")} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>

      </button>
    </div>
    </div>
  )
}

export default ScanPage
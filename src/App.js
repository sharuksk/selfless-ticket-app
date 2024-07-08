// App.js
import React, { useRef } from 'react';
import QrScanner from './QrScanner';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import './App.css'
import Invoice from './components/invoice';


const App = () => {
  const invoiceData = [
    { ItemID: 1, ItemPrice: 50, ItemDesc: 'Item 1 Description', SoldStatus: true },
    { ItemID: 2, ItemPrice: 100, ItemDesc: 'Item 2 Description', SoldStatus: false },
    { ItemID: 3, ItemPrice: 150, ItemDesc: 'Item 3 Description', SoldStatus: true }
  ];
  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'height=500, width=800');
    printWindow.document.write('<html><head><title> Futad Invoice Generating</title>');
    printWindow.document.write('<style>table { width: 100%; border-collapse: collapse; } table, th, td { border: 1px solid black; padding: 10px; } th, td { text-align: left; } </style>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(printContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };
  return (
    <Router>
    <div className='App'>
      <QrScanner />
        {/* <Routes>
            <Route path="/items" element={<Item/>} />
        </Routes> */}
      <div style={{backgroundColor: "white"}}>
      <div ref={printRef}>
        <Invoice data={invoiceData} />
      </div>
      <button onClick={handlePrint} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Print Invoice
      </button>
      </div>
    </div>
    </Router>
  );
};

export default App;

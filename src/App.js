// App.js
import React from 'react';
import QrScanner from './QrScanner';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import './App.css'


//push

const App = () => {
  return (
    <Router>
    <div className='App'>
      <QrScanner />
        {/* <Routes>
            <Route path="/items" element={<Item/>} />
        </Routes> */}
      {/* <div style={{backgroundColor: "white"}}>
      <div ref={printRef}>
        <Invoice data={invoiceData} />
      </div>
      <button onClick={handlePrint} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Print Invoice
      </button>
      </div> */}
    </div>
    </Router>
  );
};

export default App;

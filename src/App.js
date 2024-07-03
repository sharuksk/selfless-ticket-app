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


const App = () => {
  return (
    <Router>
    <div className='App'>
      <h1>QR Code Scanner App</h1>
      
      <QrScanner />
        {/* <Routes>
            <Route path="/items" element={<Item/>} />
        </Routes> */}
    </div>
    </Router>
  );
};

export default App;

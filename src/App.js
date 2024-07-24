// App.js
import React from 'react';
import QrScanner from './components/QrScanner';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import './App.css'
import MainPage from './components/MainPage';


const App = () => {
  return (
    <Router>
    <div className='App'>
      <MainPage/>
      {/* <QrScanner /> */}
    </div>
    </Router>
  );
};

export default App;

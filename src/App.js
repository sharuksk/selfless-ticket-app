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
import AtlantisLogo from '../src/assets/AtlantisLogo.png'
import futad from '../src/assets/futad.png'


const App = () => {
  return (
    <Router>
    <div className='App'>
      <header className='flex items-center justify-center mt-10'>
        <img  className='w-[456px] h-[64px]' src={AtlantisLogo} />
      </header>
      <main className='min-h-[calc(100vh-120px)] flex justify-center items-center'>
        <MainPage/>
      </main>
      {/* <QrScanner /> */}
      <footer className='flex items-center justify-center '>
        <img  className='w-[195px] h-[30px]' src={futad} />
      </footer>
    </div>
    </Router>
  );
};

export default App;

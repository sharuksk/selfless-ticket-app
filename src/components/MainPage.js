import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import QrScanner from './QrScanner';
import AddItems from '../pages/AddItems';

const MainPage = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<QrScanner/>} />
        <Route path="/addItems" element={<AddItems/>} />
    </Routes>
  )
}

export default MainPage
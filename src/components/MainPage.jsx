import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import QrScanner from './QrScanner';

const MainPage = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<QrScanner/>} />
    </Routes>
  )
}

export default MainPage
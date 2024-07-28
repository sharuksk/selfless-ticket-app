import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import QrScanner from './QrScanner';
import AddItems from '../pages/AddItems';
import ListItems from '../pages/ListItems';

const MainPage = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<QrScanner/>} />
        <Route path="/addItems" element={<AddItems/>} />
        <Route path="/list" element={<ListItems/>} />
    </Routes>
  )
}

export default MainPage
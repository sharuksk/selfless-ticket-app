import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import QrScanner from './QrScanner';
import AddItems from '../pages/addItems';
import ListItems from '../pages/ListItems';
import Dashboard from '../pages/dashboard';
import EditProducts from '../pages/editProducts';
import ScanPage from '../pages/ScanPage';

const MainPage = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        {/* <Route path="/shopproduct" element={<QrScanner/>} /> */}
        <Route path="/addproduct" element={<AddItems/>} />
        <Route path="/listproduct" element={<ListItems/>} />
        <Route path="/editproduct:id" element={<EditProducts/>} />
        <Route path="/shopproduct" element={<ScanPage/>} />
    </Routes>
  )
}

export default MainPage
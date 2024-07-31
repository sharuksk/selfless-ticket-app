import React from 'react'
import { useNavigate } from "react-router-dom";
import ProdAdd from '../../src/assets/ProdAdd.png'
import ProdList from '../../src/assets/ProdList.png'
import ProdShop from '../../src/assets/ProdShop.png'

const Dashboard = () => {
    
  const navigate = useNavigate();

  return (
    <div className='flex gap-20 item-center h-[439px] text-red-600'>
        <div className='w-[398px] h-[439px]' onClick={()=> navigate("/addproduct")}>
            <img src={ProdAdd}/>
        </div>
        <div className='w-[398px] h-[439px]' onClick={()=> navigate("/listproduct")}>
            <img src={ProdList}/>
        </div>
        <div className='w-[398px] h-[439px]' onClick={()=> navigate("/shopproduct")}>
            <img src={ProdShop}/>
        </div>
        
    </div>
  )
}

export default Dashboard;
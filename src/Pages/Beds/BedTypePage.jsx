import React from 'react'
import { NavLink } from 'react-router-dom'
const BedTypePage=()=>{
    return(
       <div className="container">
            <div className='row py-3'>
            <div className='col-6 col-md-4' style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',width:'95%' ,marginBottom:'20px'}}>
                <NavLink style={{fontSize:'14px',fontWeight:'bold',color:'#0A1048',width:'95%',backgroundColor:'#E8F9FF',height:'100px',display:'flex',justifyContent: 'center',alignItems: 'center'}} 
                to='/bedlist?type=Oxygen Beds'>
                
                Oxygen Bed</NavLink>
            </div>
            <div className='col-6 col-md-4' style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',width:'95%',marginBottom:'20px'}}>
                <NavLink style={{fontSize:'14px',fontWeight:'bold',color:'#0A1048',width:'95%',backgroundColor:'#E8F9FF',height:'100px',display:'flex',justifyContent: 'center',alignItems: 'center'}} 
                to='/bedlist?type='>
                
                Non Oxygen Bed</NavLink>
            </div>
            <div className='col-6 col-md-4' style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',width:'95%',marginBottom:'20px'}}>
                <NavLink style={{fontSize:'14px',fontWeight:'bold',color:'#0A1048',width:'95%',backgroundColor:'#E8F9FF',height:'100px',display:'flex',justifyContent: 'center',alignItems: 'center'}} 
                to='/bedlist?type='>
                
                ICU Bed</NavLink>
            </div>
            <div className='col-6 col-md-4' style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',width:'95%',marginBottom:'20px'}}>
                <NavLink style={{fontSize:'14px',fontWeight:'bold',color:'#0A1048',width:'95%',backgroundColor:'#E8F9FF',height:'100px',display:'flex',justifyContent: 'center',alignItems: 'center'}} 
                to='/bedlist?type='>
                
                Ventilator</NavLink>
            </div>
        </div>
       </div>
    )
}

export default BedTypePage
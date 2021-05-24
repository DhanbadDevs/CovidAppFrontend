import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'
const MedEquipsTypePage=()=>{
    const [medequips,setMedEquips]=useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/medicines`)
              .then(response=>setMedEquips(response.data.payload))
    },[])



    return(
       <div className="container">
            <div className='row py-3'>
            {medequips?.map(medequip=>(
                <div className='col-6 col-md-4 p-2 d-flex flex-column justify-content-center align-items-center flex-wrap' style={{padding:'5px',minWidth:'50%',minHeight:'100px'}} >
                <NavLink style={{fontSize:'14px',fontWeight:'bold',minWidth:'100%',color:'#0A1048',padding:'5px',padding:'5px',backgroundColor:'#E8F9FF',height:'100px',display:'flex',justifyContent: 'center',alignItems: 'center',wordWrap: 'break-word'}} 
                to={`/medlist?id=${medequip.id}`}>
                <div style={{wordBreak:'break-all',padding:'5px',border: '3px solid #7CC1F4',minWidth:'100%',minHeight:'100px',borderRadius:"10px",display:'flex',justifyContent: 'center',alignItems: 'center'}} >
                {medequip.medicineEquipmentName}  
                </div>
                </NavLink>
            </div>
            )) }
            
        </div>
       </div>
    )
}

export default MedEquipsTypePage
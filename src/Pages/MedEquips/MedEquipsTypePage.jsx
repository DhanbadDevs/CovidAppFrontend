import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'
const MedEquipsTypePage=()=>{
    const [medequips,setMedEquips]=useState([])
    useEffect(()=>{
        axios.get('http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/medicines')
              .then(response=>setMedEquips(response.data.payload))
    },[])



    return(
       <div className="container">
            <div className='row py-3'>
            {medequips?.map(medequip=>(
                <div className='col-6 col-md-4' style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',width:'95%'}}>
                <NavLink style={{fontSize:'14px',fontWeight:'bold',color:'#0A1048',width:'95%',backgroundColor:'#E8F9FF',height:'100px',display:'flex',justifyContent: 'center',alignItems: 'center'}} 
                to={`/medlist?id=${medequip.id}`}>
                {medequip.medicineEquipmentName}  
                </NavLink>
            </div>
            )) }
            
        </div>
       </div>
    )
}

export default MedEquipsTypePage
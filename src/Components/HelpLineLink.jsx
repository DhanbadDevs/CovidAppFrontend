import React from 'react'
import { NavLink } from 'react-router-dom'
const HelpLineLink=(props)=>{
    return(
        <div style={{display: 'flex',justifyContent:'flex-end',margin:'5px 0'}}>
           <div>
           <NavLink to='/helplinelist' className="p-1 pl-2 d-flex align-items-center helplineLink" style={{width:'100%',backgroundColor:'#FE9574',margin:'10px 0',top:'10px',left:'50%'}}>
            <i class="fas fa-phone-volume mx-1"></i>
            <p className="m-0">HELPLINE NUMBERS</p>
            </NavLink>
           </div>
        </div>
    )
}

export default HelpLineLink
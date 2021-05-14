import React from 'react'
import { NavLink } from 'react-router-dom'
const ItemCard=(props)=>{
    return(
        <NavLink style={{color:"#0A1048"}} to={props.item.to} className="col-6 p-1">
        <div style={{width:'70%',height:'100px'}} style={{backgroundColor:"#9DE0F5",padding:'10px',borderRadius:'10px'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent: 'center',alignItems: 'center',border:'3px solid #7CC1F4',borderRadius:'10px',height:'100px'}}>
            <i style={{fontSize:'44px'}} class={props.item.icon}></i>
            </div>
        </div>
            <h6 className="text-center">{props.item.title}</h6>
    </NavLink>
    )
}

export default ItemCard
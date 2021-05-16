import React from 'react'
import Bed from '../Assets/bed.png'
import moment from 'moment'
const AmbulanceCard =(props)=>{
    return(
        <div className="col-12 mb-3">
        <div className="row shadow" style={{position:'relative',backgroundColor:"#E4F7FF",padding:'20px 0',width:'100%',margin:'auto',borderRadius:'10px'}}>
        
        <div className="col-4 p-0" style={{display:'flex',flexDirection:'column',justifyContent: 'flex-end',alignItems: 'stretch'}}>
        <i style={{fontSize:'44px',color:'#0A1048'}} class='text-center fad fa-ambulance'></i>
            <div style={{backgroundColor:"#55C3DB" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px'}}>Cost:{props.item?.charges}</div>
            {props.item.phone.split(',').map(phone=>
            <div style={{backgroundColor:"#FE9574" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px'}}>{phone}</div>
            )}
        </div>
        <div className="col-8 m-0 mb-1" style={{backgroundColor:'#BFE9FB',marginBottom:'20px',width:'100%',borderRadius:'10px',alignItems: 'center',display: 'flex'}}>
            <p style={{textAlign:'left',fontSize:'14px'}} className='m-1'>
            Name:<span style={{fontWeight:'bold'}}>{props.item?.ambulanceName}</span><br/>
            <span style={{fontWeight:'bold'}}>Timing:</span>{props.item?.timing}<br/>
            <span style={{fontWeight:'bold'}}>Accepts Covid Patients:</span>{props.item?.acceptsCovidPatient}<br/>
            <span style={{fontWeight:'bold'}}>Oxygen Facility:</span>{props.item?.oxygenAvailable}<br/>
            <span style={{fontWeight:'bold'}}>OutStation Service:</span>{props.item?.providesOutstationService}<br/>
            <span style={{fontWeight:'bold'}}>Air Conditioned:</span>{props.item?.isAirConditioned}<br/>
            </p>
        {props.item.isVerified && <i style={{color: '#09B22E',position:'absolute',top:3,right:10}} class="fas fa-check-circle"></i>}
        </div>
        <i style={{position:'absolute',bottom:5,right:40}} class="fal fa-thumbs-up"></i><span className='pl-1'>{props.item.votes}</span><i style={{position:'absolute',bottom:5,right:10}} class="fal fa-thumbs-down"></i>
        <p style={{position:'absolute',bottom:0,left:'40%',margin:0,fontSize:'10px'}}>Updated On:{moment(props.item.updatedOn).format('DD/MM/YYYY') }</p>
        </div>
        </div>
    )
}

export default AmbulanceCard
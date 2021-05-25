import React from 'react'
import Ambulance from '../Assets/ambulance.png'
import moment from 'moment'
const AmbulanceCard =(props)=>{
    const phoneNumbers=props.item.phone.split(',')
    phoneNumbers.length=2
    return(
        <div className="row col-12 col-md-6 col-md-4 my-3">
        <div className="row shadow pr-1 m-0" style={{position:'relative',backgroundColor:"#E4F7FF",padding:'20px 0',width:'100%',margin:'auto',borderRadius:'10px'}}>
        
        <div className="col-4 p-0" style={{display:'flex',flexDirection:'column',justifyContent: 'flex-end',alignItems: 'stretch'}}>
        <img src={Ambulance} style={{width:'50px',alignSelf:'center',marginBottom:'10px'}} />
            <div className="text-center" style={{backgroundColor:"#55C3DB" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px',zIndex:10}}>Cost:{props.item?.charges}</div>
            {phoneNumbers.map(phone=>
            <a href={`tel:${phone}`} style={{color:'#000',textDecoration:'none',zIndex:10}}>

            <div className="text-center" style={{backgroundColor:"#FE9574" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px'}}>{phone}</div>
            </a>
            )}
        </div>
        <div className="col-8 m-0 mb-1" style={{backgroundColor:'#BFE9FB',marginBottom:'20px',width:'100%',borderRadius:'10px'}}>
            <h5 className="text-center">{props.item?.ambulanceName}</h5>
            <p style={{textAlign:'left',fontSize:'14px'}} className='m-1'>
            <span style={{fontWeight:'bold'}}>Timing:</span>{props.item?.timing}<br/>
            <span style={{fontWeight:'bold',fontSize:'14px'}}>Accepts Covid Patients:{props.item?.acceptsCovidPatient?<i class="ml-1 fas fa-check text-success"></i>:<i class="ml-1 fas fa-times text-danger"></i>}</span><br/>
            <span style={{fontWeight:'bold',fontSize:'14px'}}>Oxygen Facility:{props.item?.oxygenAvailable?<i class="ml-1 fas fa-check text-success"></i>:<i class="ml-1 fas fa-times text-danger"></i>}</span><br/>
            <span style={{fontWeight:'bold',fontSize:'14px'}}>OutStation Service:{props.item?.providesOutstationService?<i class="ml-1 fas fa-check text-success"></i>:<i class="ml-1 fas fa-times text-danger"></i>}</span><br/>
            <span style={{fontWeight:'bold',fontSize:'14px'}}>Air Conditioned:{props.item?.isAirConditioned?<i class="ml-1 fas fa-check text-success"></i>:<i class="ml-1 fas fa-times text-danger"></i>}</span><br/>
            </p>
       
        
        </div>
        {/* <i style={{position:'absolute',bottom:5,right:40}} class="fal fa-thumbs-up"></i><span className='pl-1'>{props.item.votes}</span><i style={{position:'absolute',bottom:5,right:10}} class="fal fa-thumbs-down"></i> */}
        <p style={{position:'absolute',bottom:0,left:'40%',margin:0,fontSize:'10px'}}>Updated On:{moment(props.item.updatedOn).format('DD/MM/YYYY') }</p>
        {props.item.isVerified && <p className="verified" >
        <i  class="fas fa-check-circle"></i>
            Verified
        </p>}
        </div>
        </div>
    )
}

export default AmbulanceCard
import React from 'react'
import moment from 'moment'
import Oxygen from '../Assets/o2.png'
const OxygenCard =(props)=>{

    return(
  
    

        <div className="col-12 col-md-6 col-md-4 my-3">
        <div className="row shadow pr-1" style={{position:'relative',backgroundColor:"#E4F7FF",padding:'20px 0',width:'100%',margin:'auto',borderRadius:'10px'}}>
        
        <div className="col-4 p-0" style={{display:'flex',flexDirection:'column',justifyContent: 'flex-end',alignItems: 'stretch'}}>
        {/* <i style={{fontSize:'44px',color:'#0A1048'}} class='text-center fad fa-ambulance'></i> */}
        <img src={Oxygen} style={{ width: '50px', alignSelf: 'center', marginBottom: '10px' }} /> 
            <div className="text-center" style={{backgroundColor:"#55C3DB" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px',zIndex:10}}>Cost: {props.item?.price}</div>
            {props.item.phone.split(',').map(phone=>
                <a href={`tel:${phone}`} style={{color:'#000',textDecoration:'none',zIndex:10}}>
            <div className="text-center" style={{backgroundColor:"#FE9574" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px'}}>{phone}</div>
            </a>
            )}
        </div>
        <div className="col-8 m-0 mb-1" style={{backgroundColor:'#BFE9FB',marginBottom:'20px',width:'100%',borderRadius:'10px',alignItems: 'center',display: 'flex',flexDirection:'column',alignItems:'flex-start'}}>
           <div >

           <h5 className="text-center">{props.item?.location.locationName}</h5>
           <p  className="text-center" style={{fontSize:"14px", marginBottom:"0px"}}>{props.item?.location.address}</p>
           </div>
            <p style={{textAlign:'left',fontSize:'14px' ,fontWeight:'bold'}} className='m-1'>
            <span >Available:{props.item?.stock>-1?<i class="fas fa-check text-success ml-1"></i>:<i class="ml-1 fas fa-times text-danger"></i>}</span><br/>
            Timing:<span className="ml-1" style={{fontWeight:'normal'}}>{props.item.timing}</span>
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

export default OxygenCard



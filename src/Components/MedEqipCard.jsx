import React from 'react'
import Bed from '../Assets/bed.png'
import moment from 'moment'
const MedEquipCard =(props)=>{
    return(
        <div className="row col-12 col-md-6 col-md-4 my-3 px-3 px-md-3">
        <div className="row shadow pr-1 m-0" style={{position:'relative',backgroundColor:"#E4F7FF",padding:'20px 0',width:'100%',margin:'auto',borderRadius:'10px'}}>
        
        <div className="col-4 p-0" style={{display:'flex',flexDirection:'column',justifyContent: 'flex-end',alignItems: 'stretch'}}>
            <img src={Bed} style={{width:'50px',alignSelf:'center',marginBottom:'10px'}}/>
            <div className='text-center' style={{backgroundColor:"#55C3DB" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px',zIndex:10}}>Cost:{props.item.price}</div>
            {props.item.phone.split(',').map(phone=>
                <a href={`tel:${phone}`} style={{color:'#000',textDecoration:'none',zIndex:10}}>
            <div className="text-center" style={{backgroundColor:"#FE9574" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px'}}>{phone}</div>
            </a>
            )}
        </div>
        <div className="col-8 m-0 mb-1" style={{backgroundColor:'#BFE9FB',marginBottom:'20px',width:'100%',borderRadius:'10px'}}>
            
            <h5 className='text-center'>{props.item?.location?.locationName}</h5>
            <p className='text-center'>{props.item?.location?.address}</p>
            
            <p>        
            <span style={{fontWeight:'bold'}} className="mr-1">Stock:</span>{props.item.stock}<br/>
            <span style={{fontWeight:'bold'}} className="mr-1">HomeDelivery:</span>
                            {props.item?.isAirConditioned?<i class="fas fa-check text-success pl-2"></i>:<i class="fas fa-times text-danger pl-2"></i>}<br/>
            <span style={{fontWeight:'bold'}} className="mr-1">Timing:</span>{props.item.timing}<br/>
            {/* Note:{props.item.notes} */}
            </p>
        </div>
        {/* <i style={{position:'absolute',bottom:5,right:10}} class="fal fa-thumbs-up"><span className='pl-1'>20{props.item.votes}</span></i> */}
        <p style={{position:'absolute',bottom:0,left:'40%',margin:0,fontSize:'10px'}}>Updated On:{moment(props.item.updatedOn).format('DD/MM/YYYY') }</p>
        {props.item.isVerified && <p className="verified" >
        <i  class="fas fa-check-circle"></i>
            Verified
        </p>}
        </div>
        </div>
    )
}

export default MedEquipCard
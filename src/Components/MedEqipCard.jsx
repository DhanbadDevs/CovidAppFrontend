import React from 'react'
import Bed from '../Assets/bed.png'
import moment from 'moment'
const MedEquipCard =(props)=>{
    return(
        <div className="col-12 mb-3">
        <div className="row shadow" style={{position:'relative',backgroundColor:"#E4F7FF",padding:'20px 0',width:'100%',margin:'auto',borderRadius:'10px'}}>
        
        <div className="col-4 p-0" style={{display:'flex',flexDirection:'column',justifyContent: 'flex-end',alignItems: 'stretch'}}>
            <img src={Bed} style={{width:'50px',alignSelf:'center',marginBottom:'10px'}}/>
            <div style={{backgroundColor:"#55C3DB" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px'}}>Cost:{props.item.price}</div>
            {props.item.phone.split(',').map(phone=>
            <div style={{backgroundColor:"#FE9574" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px'}}>{phone}</div>
            )}
        </div>
        <div className="col-8 m-0 mb-1" style={{backgroundColor:'#BFE9FB',marginBottom:'20px',width:'100%',borderRadius:'10px'}}>
            <p style={{textAlign:'left',fontSize:'14px'}}>
            Stock:{props.item.stock}<br/>
            <span style={{}}>HomeDelivery:{props.item?.isAirConditioned?<i class="fas fa-check text-success pl-2"></i>:<i class="fas fa-times text-danger pl-2"></i>}</span><br/>
            Timing:{props.item.timing}<br/>
            Hospital:{props.item?.location?.locationName}<br/>
            Address:{props.item?.location?.address}<br/>
            Note:{props.item.notes}
            </p>
        {props.item.isVerified && <i style={{color: '#09B22E',position:'absolute',top:3,right:10}} class="fas fa-check-circle"></i>}
        </div>
        {/* <i style={{position:'absolute',bottom:5,right:10}} class="fal fa-thumbs-up"><span className='pl-1'>20{props.item.votes}</span></i> */}
        <p style={{position:'absolute',bottom:0,left:'40%',margin:0,fontSize:'10px'}}>Updated On:{moment(props.item.updatedOn).format('DD/MM/YYYY') }</p>
        </div>
        </div>
    )
}

export default MedEquipCard
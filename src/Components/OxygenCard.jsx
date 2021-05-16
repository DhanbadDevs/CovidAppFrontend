import React from 'react'
import moment from 'moment'
import Oxygen from '../Assets/o2.png'
const OxygenCard =(props)=>{

    return(
        <div className="col-12 my-3">
        <div className="row shadow w-100 m-auto rounded py-4 bg-card position-relative" >
            <div className="col-3.5 p-1 d-flex flex-column justify-content-center d-flex align-items-stretch">
            <img src={Oxygen} style={{ width: '50px', alignSelf: 'center', marginBottom: '10px' }} />  
                <div className="m-p-custom" style={{backgroundColor:"#55C3DB"}}>Cost: {props.item?.price}</div>
            {props.item?.phone===undefined?
            (props.item?.location.phone.split(',').map(phone=>
                <div className="m-p-custom" style={{backgroundColor:"#FE9574"}}><i class="fas fa-phone-alt" style={{fontSize:"10px", marginRight:"2px"}}></i>{phone}</div>
                )):
            (props.item?.phone.split(',').map(phone=>
            <div className="m-p-custom" style={{backgroundColor:"#FE9574"}}><i class="fas fa-phone-alt" style={{fontSize:"10px", marginRight:"2px"}}></i>{phone}</div>
            ))}
            </div>
            <div className="col-7 mb-3 w-100 rounded-corner d-flex align-items-center" style={{backgroundColor:'#BFE9FB'}}>
                <p className="text-left m-1">
                    <h4 className="text-center my-0">{props.item?.location.locationName}</h4>
                    <p className="text-center" style={{fontSize:"13px"}}>{props.item?.location.address}</p>
                    <span><span className="font-weight-bold">Stock: </span>{props.item?.stock>0?props.item?.stock:(props.item?.stock==0?"Available":"Not Available")}</span><br/>
                    <span><span className="font-weight-bold">Timing: </span>{props.item?.timing}<br/></span><br/>
                </p>
                {props.item.isVerified && <i style={{color: '#09B22E',position:'absolute',top:3,right:10}} class="fas fa-check-circle"></i>}
            </div>
        <p className="footer">Updated On:{moment(props.item.updatedOn).format('DD/MM/YYYY')}</p>
        </div>
        </div>
    )
}

export default OxygenCard



import React from 'react'
import Bed from '../Assets/bed.png'
import moment from 'moment'
import BedAvlCard from '../Components/BedAvlCard'
const BedCard = (props) => {
    return (
             <div className="col-12 my-3">
        <div className="row shadow w-100 m-auto rounded py-4 pr-2 bg-card position-relative" >
            <div className="col-3.5 p-1 d-flex flex-column justify-content-center d-flex align-items-stretch">
            <img src={Bed} style={{ width: '50px', alignSelf: 'center', marginBottom: '10px' }} />  
                <div className="m-p-custom" style={{backgroundColor:"#55C3DB"}}><center>{props.item?.isPrivate?"Private":"Government"}</center></div>
            {props.item?.phone===undefined?
            (props.item?.location.phone.split(',').map(phone=>
                <div className="m-p-custom" style={{backgroundColor:"#FE9574"}}><i class="fas fa-phone-alt" style={{fontSize:"12px", marginRight:"2px"}}></i>{phone}</div>
                )):
            (props.item?.phone.split(',').map(phone=>
            <div className="m-p-custom" style={{backgroundColor:"#FE9574"}}><i class="fas fa-phone-alt" style={{fontSize:"12px", marginRight:"2px"}}></i>{phone}</div>
            ))}
            </div>
                    <div className="col-8 mb-3 pb-1 w-100 rounded-corner d-flex flex-column align-items-center" style={{backgroundColor:'#BFE9FB'}}>
                        <div className="text-left m-1 ">
                        <h4 className="text-center my-0">{props.item?.location.locationName}</h4>
                        <p className="text-center" style={{fontSize:"13px", marginBottom:"0px"}}>{props.item?.location.address}</p>
                        </div>
                    <div>
                        <div className="row">
                        <BedAvlCard type="Without Oxygen Beds" count={props.item?.withoutOxygen}></BedAvlCard>
                        <BedAvlCard type="With Oxygen Beds " count={props.item?.withOxygen}></BedAvlCard>
                        </div>
                        <div className="row">
                        <BedAvlCard type="ICU without Ventilator" count={props.item?.icuWithoutVentilator}></BedAvlCard>
                        <BedAvlCard  type="ICU with Ventilator" count={props.item?.icuWithVentilator}></BedAvlCard>
                        </div>
                    </div>
                    {props.item.isVerified && <i style={{ color: '#09B22E', position: 'absolute', top: 3, right: 10 }} class="fas fa-check-circle"></i>}
                </div>
                <p className="footer">Updated On:{moment(props.item.updatedOn).format('DD/MM/YYYY')}</p>
            </div>
        </div>
    )
}

export default BedCard
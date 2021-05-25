import React from 'react'
import Bed from '../Assets/bed.png'
import moment from 'moment'
import BedAvlCard from '../Components/BedAvlCard'
const BedCard = (props) => {
    const phoneNumbers=props.item?.phone===undefined?props.item?.location.phone.split(','):props.item.phone.split(',')
    phoneNumbers.length=2
    return (
             <div className="col-12 row col-md-6 my-3">
        <div className="row shadow w-100 m-0 rounded pt-4 pb-2 pr-2 bg-card position-relative" >
            <div className="col-4 p-1 d-flex flex-column justify-content-center d-flex align-items-stretch">
            <img src={Bed} style={{ width: '50px', alignSelf: 'center', marginBottom: '10px' }} />  
                <div className="m-p-custom" style={{backgroundColor:"#55C3DB",zIndex:10}}><center>{props.item?.isPrivate?"Private":"Government"}</center></div>
            {phoneNumbers.map(phone=> <a href={`tel:${phone}`} style={{color:'#000',textDecoration:'none',zIndex:10}}>

<div className="text-center" style={{backgroundColor:"#FE9574" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px'}}>{phone}</div>
</a>)}
            </div>
                    <div className="col-8 mb-3 pb-1 w-100 rounded-corner d-flex flex-column align-items-center" style={{backgroundColor:'#BFE9FB'}}>
                        <div className="text-left m-1 ">
                        <h5 className="text-center my-0">{props.item?.location.locationName}</h5>
                        <p className="text-center" style={{fontSize:"13px", marginBottom:"0px"}}>{props.item?.location.address}</p>
                        </div>
                    <div>
                        <div className="row">
                        <BedAvlCard type1='Without Oxygen' type2='Beds' count={props.item?.withoutOxygen}></BedAvlCard>
                        <BedAvlCard type1="With Oxygen" type2="Beds " count={props.item?.withOxygen}></BedAvlCard>
                        </div>
                        <div className="row">
                        <BedAvlCard type1="ICU without" type2="Ventilator" count={props.item?.icuWithoutVentilator}></BedAvlCard>
                        <BedAvlCard  type1="ICU with" type2="Ventilator" count={props.item?.icuWithVentilator}></BedAvlCard>
                        </div>
                    </div>
                    </div>
                <p className="footer">Updated On:{moment(props.item.updatedOn).format('DD/MM/YYYY')}</p>
                {props.item.isVerified && <p className="verified" >
        <i  class="fas fa-check-circle"></i>
            Verified
        </p>}
            </div>
        </div>
    )
}

export default BedCard
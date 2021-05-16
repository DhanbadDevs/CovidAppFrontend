import React from 'react'
import Bed from '../Assets/bed.png'
import moment from 'moment'
const BedCard = (props) => {
    return (
        <div className="col-12 mb-3">
            <div className="row shadow" style={{ position: 'relative', backgroundColor: "#E4F7FF", padding: '20px 0', width: '100%', margin: 'auto', borderRadius: '10px' }}>

                <div className="col-4 p-0" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'stretch' }}>
                    <img src={Bed} style={{ width: '50px', alignSelf: 'center', marginBottom: '10px' }} />
                    <div style={{ backgroundColor: "#55C3DB", margin: '5px', padding: '3px 10px', borderRadius: '20px', fontSize: '14px' }}>Cost:{props.item.charges}</div>
                    <div style={{ backgroundColor: "#FE9574", margin: '5px', padding: '3px 10px', borderRadius: '20px', fontSize: '14px' }}>{props.item.phone}</div>
                </div>
                <div className="col-8 m-0 mb-1" style={{ backgroundColor: '#BFE9FB', marginBottom: '20px', width: '100%', borderRadius: '10px' }}>
                    <p style={{ textAlign: 'left', fontSize: '14px' }}>Bed Type:{props.item.bedType}<br />
            Bed Count:{props.item.bedCount}<br />
            Hospital:{props.item?.location?.locationName}<br />
            Private:{props.item?.location?.isPrivate ? "true" : "false"}<br />
            Address:{props.item?.location?.address}
                    </p>
                    {props.item.isVerified && <i style={{ color: '#09B22E', position: 'absolute', top: 3, right: 10 }} class="fas fa-check-circle"></i>}
                </div>
                <i style={{ position: 'absolute', bottom: 5, right: 10 }} class="fal fa-thumbs-up"></i><span className='pl-1'>20{props.item.votes}</span>
                <i style={{ position: 'absolute', bottom: 5, right: 10 }} class="fal fa-thumbs-downs"></i>
                <p style={{ position: 'absolute', bottom: 0, left: '40%', margin: 0, fontSize: '10px' }}>Updated On:{moment(props.item.updatedOn).format('DD/MM/YYYY')}</p>
            </div>
        </div>
    )
}

export default BedCard
import React from 'react'
import moment from 'moment'
const HelplineCard=(props)=>{
    return(
        <div className="col-12 col-md-6 col-md-4 my-3" style={{position: 'relative',borderRadius:'10px',paddingBottom:'20px',backgroundColor:'#E4F7FF',margin:'20px 0',fontWeight:'bold'}}>
                <h6 className='pl-3 m-0 py-1' style={{fontWeight:'bold'}}>{props.item.helplineName}</h6>
                <p className='py-0 pl-3' style={{fontSize:'14px',fontWeight:'400',margin:'0'}}>{props.item.timing}</p>
            <div className='d-flex justify-content-start'>
               <div className='d-flex'>
               {props.item.phone.split(',').map(phone=>
                <a href={`tel:${phone}`} style={{color:'#000',textDecoration:'none',zIndex:10}}>
            <div style={{backgroundColor:"#FE9574" ,margin:'5px',padding:'3px 10px',borderRadius:'20px',fontSize:'14px'}}>{phone}</div>
            </a>
            )}
               </div>
            </div>
            <p className="footer">Updated On:{moment(props.item.updatedOn).format('DD/MM/YYYY') }</p>
        
        </div>
    )


}

export default HelplineCard
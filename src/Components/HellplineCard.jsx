import React from 'react'
import moment from 'moment'
const HelplineCard=(props)=>{
    return(
        <div className="col-12 col-md-6 col-md-4 my-3" style={{borderRadius:'20px',overflow:'hidden',margin:'20px 0',fontWeight:'bold',display:'flex',flexDirection:'column',justifyContent:'stretch'}}>
                <div style={{backgroundColor:"#E4F7FF",position: 'relative',borderRadius:'10px',margin:'10px',padding:'20px',}}>
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
        </div>
    )


}

export default HelplineCard
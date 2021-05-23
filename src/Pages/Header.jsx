import React from 'react'
import { withRouter } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import { useHistory } from "react-router-dom";
import Back from '../Assets/back.png'
import Logo from '../Assets/logo.png'

const  Header=(props)=> {
    let history = useHistory();
       var heading;
       switch(window.location.pathname){
           case "/ambulancelist": heading='AMBULANCE';break;
           case "/bedlist":heading="HOSPITAL BEDS";break;
           case "/medtype":heading="MEDICINE & EQUIPMENT";break;
           case "/oxygenlist":heading="OXYGEN";break;
           case "/doctorslist":heading="DOCTOR";break;
           case "/helplinelist":heading="HELPLINE";break;
           default :heading=""
       }
       if(window.location.pathname.includes("/medlist"))
       heading="MEDICINE & EQUIPMENT"
    return(
        <div style={{backgroundColor:'#0A3441',height:'48px',overflow:'hidden'}}>

<Navbar bg="custom" variant="blue" className="py-0" height="40">
                <Navbar.Brand >
                  <div className="d-inline-block align-middle mb-2">
                    <img
                        alt=""
                        src={Logo}
                        width="102"
                        height="38"
                        className=""
                        style={{display:(window.location.pathname==="/")?"block":"none"}}
                    />
                    <img src={Back}  onClick={() => history.goBack()} style={{display:(window.location.pathname!=="/")?"block":"none",fontSize:"40px"}}/>
                    </div>
                    <h6 style={{ color: "#FFF"}} className='d-inline-block ml-3' >{heading}</h6>
                </Navbar.Brand>
            </Navbar>
        </div>

    )
}

export default withRouter(Header);

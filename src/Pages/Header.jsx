import React from 'react'
import { withRouter } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import { useHistory } from "react-router-dom";
import Back from '../Assets/back.png'


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
           default :heading="COVID APP"
       }
       if(window.location.pathname.includes("/medlist"))
       heading="MEDICINE & EQUIPMENT"
    return(
<Navbar bg="custom" variant="blue" className="py-0">
                <Navbar.Brand >
                <div className="align-middle">
                  <div className="d-inline-block align-middle mb-2">
                    <img
                        alt=""
                        src="https://www.eurodiaconia.org/wordpress/wp-content/uploads/2020/03/hilf-jetzt-logo-ohne-text.png"
                        width="35"
                        height="35"
                        className=""
                        style={{display:(window.location.pathname==="/")?"block":"none"}}
                    />
                    <img src={Back}  onClick={() => history.goBack()} style={{display:(window.location.pathname!=="/")?"block":"none",fontSize:"40px"}}/>
                    </div>
                    <h4 style={{ color: "#FFF"}} className='d-inline-block ml-3' >{heading}</h4>
                </div>
                </Navbar.Brand>
            </Navbar>

    )
}

export default withRouter(Header);

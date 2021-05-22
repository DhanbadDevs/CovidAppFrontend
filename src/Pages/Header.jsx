import React from 'react'
import { withRouter } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import { useHistory } from "react-router-dom";
import Back from '../Assets/back.png'


const  Header=(props)=> {
    let history = useHistory();
      
    return(
<Navbar bg="custom" variant="blue">
                <Navbar.Brand >
                <div className="align-middle">
                  <div className="d-inline-block align-middle mb-3">
                    <img
                        alt=""
                        src="https://www.eurodiaconia.org/wordpress/wp-content/uploads/2020/03/hilf-jetzt-logo-ohne-text.png"
                        width="40"
                        height="40"
                        className=""
                        style={{display:(window.location.pathname==="/")?"block":"none"}}
                    />
                    <img src={Back}  onClick={() => history.goBack()} style={{display:(window.location.pathname!=="/")?"block":"none",fontSize:"40px"}}/>
                    </div>
                    {'    '}
                    <h1 style={{ color: "#FFF"}} className='d-inline-block' >CovidApp</h1>
                </div>
                </Navbar.Brand>
            </Navbar>

    )
}

export default withRouter(Header);

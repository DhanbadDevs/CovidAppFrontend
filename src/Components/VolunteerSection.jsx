import React from 'react'
import { NavLink } from 'react-router-dom'
const VolunteerSection =()=>{
    return (
        <div style={styles.cardholder}>

            <NavLink to="/form/feedback" style={styles.card}>
                <h6 style={{fontWeight:'bold'}}>HAVE ANY FEEDBACK</h6>
                <p className='m-0'>Click Here</p>
            </NavLink>
            <NavLink to="/form/volunteer" style={styles.card}>
                <h6 style={{fontWeight:'bold'}}>VOLUNTEER WITH US</h6>
                <p className='m-0'>Click Here</p>
            </NavLink>
        </div>
    )
}

export default VolunteerSection

const styles ={
    cardholder:{
        width:'100vw',
        backgroundColor:"#011827",
        padding:'25px',
        color:'#000'
    },
    card: {
        display:'block',
        backgroundColor:"#BFE9FB",
        padding:'15px',
        borderRadius: "25px",
        marginBottom:'15px',
        color:'#000'
    }
}

import React from 'react'
const VolunteerSection =()=>{
    return (
        <div style={styles.cardholder}>
            <div style={styles.card}>
                <h6 style={{fontWeight:'bold'}}>HAVE ANY FEEDBACK</h6>
                <p className='m-0'><a href="/form/feedback">Click Here</a></p>
            </div>
            <div style={styles.card}>
                <h6 style={{fontWeight:'bold'}}>VOLUNTEER WITH US</h6>
                <p className='m-0'><a href="/form/volunteer">Click Here</a></p>
            </div>
        </div>
    )
}

export default VolunteerSection

const styles ={
    cardholder:{
        width:'100vw',
        backgroundColor:"#011827",
        padding:'25px'
    },
    card: {
        backgroundColor:"#BFE9FB",
        padding:'15px',
        borderRadius: "25px",
        marginBottom:'15px'
    }
}

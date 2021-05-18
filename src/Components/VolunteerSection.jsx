import React from 'react'
const VolunteerSection =()=>{
    return (
        <div style={styles.cardholder}>
            <div style={styles.card}>
                <h6 style={{fontWeight:'bold'}}>HAVE ANY LEAD</h6>
                <p className='m-0'>click here to submit info</p>
            </div>
            <div style={styles.card}>
                <h6 style={{fontWeight:'bold'}}>GIVE FEEDBACK</h6>
                <p className='m-0'>click here </p>
            </div>
            <div style={styles.card}>
                <h6 style={{fontWeight:'bold'}}>VOLUNTEER WITH US</h6>
                <p className='m-0'>click here </p>
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
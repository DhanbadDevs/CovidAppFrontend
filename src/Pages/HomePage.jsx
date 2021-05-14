import React from 'react'
import BedCard from '../Components/BedCard'
import ItemCard from '../Components/ItemCard'
const HomePage=()=>{
    const items=[
        {
            title:'Hospital & Beds',
            icon:"fas fa-procedures",
            to:'/bedtype'
        },
        {
            title:'Medicine & Equipment',
            icon:"fas fa-pills",
            to:'/medtype'
        },
        {
            title:'Vaccine',
            icon:"fas fa-syringe",
            to:'/vaccinelist'
        },
        
        {
            title:'Blood & Plasma',
            icon:"fas fa-tint",
            to:'/bloodplasmatype'
        },
        {
            title:'NGO',
            icon:"fas fa-hands-helping",
            to:'/ngolist'
        },
        {
            title:'Guidelines',
            icon:"fas fa-clipboard-list-check",
            to:'/guidelinelist'
        },
        {
            title:'Doctors',
            icon:"fas fa-user-md",
            to:'/doctorslist'
        },
        {
            title:'Ambulance',
            icon:"fad fa-ambulance",
            to:'/ambulancelist'
        },
    ]
    return(
        <div className="container py-1" style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flex:1}}>
        <div className="row">
            {items.map(item=>
                <ItemCard item={item}/>
            )}

        </div>
        </div>
    )
}

export default HomePage

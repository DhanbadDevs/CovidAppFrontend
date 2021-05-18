import React from 'react'
import HelpLineLink from '../Components/HelpLineLink'
import ItemCard from '../Components/ItemCard'
import VolunteerSection from '../Components/VolunteerSection'
const HomePage = () => {
    const items = [
        {
            id: 1,
            colourId: 0,
            title: 'Hospital & Beds',
            icon: "fas fa-procedures",
            to: '/bedtype'
        },
        {
            id: 2,
            colourId: 1,
            title: 'Medicine & Equipment',
            icon: "fas fa-pills",
            to: '/medtype'
        },
         {
            id: 7,
            colourId: 1,
            title: 'Doctors',
            icon: "fas fa-user-md",
            to: '/doctorslist'
        },
        {
            id: 8,
            colourId: 0,
            title: 'Ambulance',
            icon: "fad fa-ambulance",
            to: '/ambulancelist'
        },
        {
            id: 9,
            colourId: 0,
            title: 'Oxygen',
            icon: "fad fa-fas fa-lungs",
            to: '/oxygenlist'
        },
    ]
    return (
        <div>
            <HelpLineLink />
            <div className="container">
            <div className="row">
                {items.map(item =>
                    <ItemCard item={item} />
                )}
            </div>
            </div>
            <VolunteerSection />
        </div>
    )
}

export default HomePage

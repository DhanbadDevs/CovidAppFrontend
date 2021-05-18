import React from 'react'
import ItemCard from '../Components/ItemCard'
const HomePage = () => {
    const items = [
        {
            id: 1,
            colourId: 0,
            title: 'Hospital & Beds',
            icon: "fas fa-procedures",
            to: '/bedlist'
        },
        {
            id: 2,
            colourId: 1,
            title: 'Medicine & Equipment',
            icon: "fas fa-pills",
            to: '/medtype'
        },
        // {
        //     id: 3,
        //     colourId: 1,
        //     title: 'Vaccine',
        //     icon: "fas fa-syringe",
        //     to: '/vaccinelist'
        // },

        // {
        //     id: 4,
        //     colourId: 0,
        //     title: 'Blood & Plasma',
        //     icon: "fas fa-tint",
        //     to: '/bloodplasmatype'
        // },
        // {
        //     id: 5,
        //     colourId: 0,
        //     title: 'NGO',
        //     icon: "fas fa-hands-helping",
        //     to: '/ngolist'
        // },
        // {
        //     id: 6,
        //     colourId: 1,
        //     title: 'Guidelines',
        //     icon: "fas fa-clipboard-list-check",
        //     to: '/guidelinelist'
        // },
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
            <div className="container-fluid flex-column mt-3 ">
                <div className="row">
                    {items.map(item =>
                        <ItemCard item={item} />
                    )}

                </div>
            </div>
        </div>
    )
}

export default HomePage

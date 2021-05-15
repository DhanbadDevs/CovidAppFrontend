import React from 'react'
import BedCard from '../Components/BedCard'
import ItemCard from '../Components/ItemCard'
import Navbar from 'react-bootstrap/Navbar'
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
            id: 3,
            colourId: 1,
            title: 'Vaccine',
            icon: "fas fa-syringe",
            to: '/vaccinelist'
        },

        {
            id: 4,
            colourId: 0,
            title: 'Blood & Plasma',
            icon: "fas fa-tint",
            to: '/bloodplasmatype'
        },
        {
            id: 5,
            colourId: 0,
            title: 'NGO',
            icon: "fas fa-hands-helping",
            to: '/ngolist'
        },
        {
            id: 6,
            colourId: 1,
            title: 'Guidelines',
            icon: "fas fa-clipboard-list-check",
            to: '/guidelinelist'
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
    ]
    return (
        <div>
            <Navbar bg="custom" variant="blue">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://www.eurodiaconia.org/wordpress/wp-content/uploads/2020/03/hilf-jetzt-logo-ohne-text.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top mt-1"
                    />{' '}
                    <h1 style={{ color: "#0A1048", }} className='d-inline-block' >CovidApp</h1>
                </Navbar.Brand>
            </Navbar>
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

import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	useHistory,
} from 'react-router-dom'

import HomePage from './Pages/HomePage'

import BedTypePage from './Pages/Beds/BedTypePage';
import BedListPage from './Pages/Beds/BedListPage';

import MedEquipsTypePage from './Pages/MedEquips/MedEquipsTypePage'
import MedEquipsListPage from './Pages/MedEquips/MedEquipsListPage'

import VaccinesListPage from './Pages/Vaccines/VaccinesListPage'

import BloodPlasmaTypePage from './Pages/BloodPlasma/BloodPlasmaTypePage';
import BloodPlasmaListPage from './Pages/BloodPlasma/BloodPlasmaListPage';

import NgolistPage from './Pages/NGOs/NGOsListPage'
import GuidelinesListPage from './Pages/Guidelines/GuidelinesListPage'
import DoctorsListPage from './Pages/Doctors/DoctorsListPage'
import AmbulanceListPage from './Pages/Ambulance/AmbulanceListPage'

import OthersListPage from './Pages/Others/OthersListPage'


import Navbar from 'react-bootstrap/Navbar'
import OxygenListPage from './Pages/Oxygen/OxygenListPage';
import HelplinePage from './Pages/Helpline/HelplinePage';

function App() {

  // http://covidapp-dev.ap-south-1.elasticbeanstalk.com/swagger/index.html

  let routes = (
    <Switch>
    <Route path='/bedtype'>
      <BedTypePage />
    </Route>
    <Route path='/bedlist'>
      <BedListPage />
    </Route>
    <Route path='/medtype'>
      <MedEquipsTypePage />
    </Route>
    <Route path='/medlist'>
      <MedEquipsListPage />
    </Route>
    <Route path='/vaccinelist'>
      <VaccinesListPage />
    </Route>
    <Route path='/bloodplasmatype'>
      <BloodPlasmaTypePage />
    </Route>
    <Route path='/bloodandplasmalist'>
      <BloodPlasmaListPage />
    </Route>
    <Route path='/ngolist'>
      <NgolistPage />
    </Route>
    <Route path='/guidelinelist'>
      <GuidelinesListPage />
    </Route>
    <Route path='/doctorslist'>
      <DoctorsListPage />
    </Route>
    <Route path='/ambulancelist'>
      <AmbulanceListPage/>
    </Route>
    <Route path='/otherlist'>
      <OthersListPage />
    </Route>
    <Route path='/oxygenlist'>
      <OxygenListPage />
    </Route>
    <Route path='/helplinelist'>
      <HelplinePage />
    </Route>
    
      <Route path='/'>
        <HomePage />
      </Route>
      <Redirect to='/' />
    </Switch>
  )


return (
  // <AppContextProvider>
    <Router>
      {/* <Header /> */}
      <Navbar bg="custom" variant="blue">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://www.eurodiaconia.org/wordpress/wp-content/uploads/2020/03/hilf-jetzt-logo-ohne-text.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top mt-1"
                    />{' '}
                    <h1 style={{ color: "#FFF",}} className='d-inline-block' >CovidApp</h1>
                </Navbar.Brand>
            </Navbar>
      <Switch> {routes} </Switch>
        {/* <Footer /> */}
      {/* <BottomNavigator/> */}
    </Router>
  // </AppContextProvider>
)
}

export default App;

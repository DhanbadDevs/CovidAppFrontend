import './App.css';
import {useEffect} from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
    useLocation,
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


import OxygenListPage from './Pages/Oxygen/OxygenListPage';
import HelplinePage from './Pages/Helpline/HelplinePage';

// import FeedbackForm
import FeedbackForm from './Forms/FeedbackForm';
import VolunteerForm from './Forms/VolunteerForm';
import Header from './Pages/Header';
import Footer from './Pages/Footer'

const ScrollToTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        // for Chrome, Firefox, IE and Opera
        document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
        // for Safari
        document.body.scrollTo({top: 0, behavior: 'smooth'});
    }, [pathname]);
    return null;
}

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
    <Route path='/form/feedback'>
        <FeedbackForm />
    </Route>
    <Route path='/form/volunteer'>
        <VolunteerForm />
    </Route>
    
    
      <Route path='/'>
        <HomePage />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
return (
  // <AppContextProvider>
  
    <Router >
      {/* <Header /> */}
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
      <Header/>
      <div className="flex-grow-1">
        <Switch> {routes} </Switch>
      </div>
        <Footer /></div>
    </Router>
  // </AppContextProvider>
)
}

export default App;

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/common/Footer'
import Home from './pages/Home'
import AboutMain from './pages/AboutUs/AboutMain'
import AdmissionsMain from './pages/Admissions/AdmissionsMain'
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery'
import Notices from './pages/Notices/Notices'
import Navbar from './components/common/Navbar'
import Primary from './pages/Academics/Primary'
import ItoV from './pages/Academics/ItoV'
import VItoX from './pages/Academics/VItoX'
import ScienceStream from './pages/Academics/ScienceStream'
import CommerceStream from './pages/Academics/CommerceStream'
import LibraryPage from './pages/Facilities/Library'
import SportsComplex from './pages/Facilities/SportsComplex'
import ScienceLabs from './pages/Facilities/ScienceLabs'
import Hostel from './pages/Facilities/Hostel'
import Transport from './pages/Facilities/Transport'
import Error404 from './pages/Error404'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMain />} />
        <Route path='/academics/primary' element={<Primary />} />
        <Route path='/academics/middle' element={<ItoV />} />
        <Route path='/academics/senior' element={<VItoX />} />
        <Route path='/academics/science' element={<ScienceStream />} />
        <Route path='/academics/commerce' element={<CommerceStream />} />
        <Route path='/facilities/library' element={<LibraryPage />} />
        <Route path='/facilities/sports' element={<SportsComplex />} />
        <Route path='/facilities/labs' element={<ScienceLabs />} />
        <Route path='/facilities/hostel' element={<Hostel />} />
        <Route path='/facilities/transport' element={<Transport />} />
        <Route path='/admissions' element={<AdmissionsMain />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/notices' element={<Notices />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pageNotFound' element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

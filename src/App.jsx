import React from 'react'
import TeamSection from './components/TeamSection'
import Testimonals from './components/Testimonals'
import FooterNav from './components/FooterNav'
import Hero2 from './components/Hero2'
import Contact from './components/Contact'
import Service from './components/Service'
import Innovation from './components/Innovation'
import Career from '../src/components/career/Career'
import ServicePage from './components/service/ServicePage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home'
import { array2 } from './main'




const App = () => {
  return (
    <>
      <Router> <Routes>
        {array2.map((a) => (
          <Route path={a.path} element={<ServicePage value={a.title}
          />} key={a.title} />

        ))}

        {/* <Route path='/prod' element={<ServicePage value = {"Product Devlopment"}
        />} />
         <Route path='/sap' element={<ServicePage value = {"Sap development"}
        />} />
         <Route path='/cs' element={<ServicePage value = {"Cyber Security"}
        />} />
         <Route path='/script' element={<ServicePage value = {"Script/Bot Development"}
        />} />
         <Route path='/cld' element={<ServicePage value = {"Cloud Services"}
        />} /> */}
        <Route path="/" element={<Home />} />

      </Routes></Router>

    </>
  )
}

export default App

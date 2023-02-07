import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/about'
import Projects from './Pages/Projects/projects'
import Contacts from './Pages/Contacts/contacts'

import Nusawallet from './Pages/CaseStudy/nusawallet'
import Krista from './Pages/CaseStudy/krista'
import Cloudloop from './Pages/CaseStudy/cloudloop'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/nusawallet-mobile-app-study-case' element={<Nusawallet/>}/>
          <Route path='/cloudloop-mobile-app-design' element={<Cloudloop/>}/>
          <Route path='/krista-client-mobile-app-design' element={<Krista/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
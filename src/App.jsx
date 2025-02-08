import React from 'react'

import Navbar from './components/Navbar/Navbar.jsx'
import Navbar2 from './components/Navbar2/Navbar2.jsx'
import HomePage from './components/Home/Home.jsx'
import CompanyTag from './components/CompanyTag/CompanyTag.jsx'
import Explores from './components/Explores/Explores.jsx'
import Wellcome from './components/WellcomePage/Wellcome.jsx'
import WhyChoose from './components/WhyChoose/WhyChoose.jsx'
import Introduction from './components/Introduction/Introduction.jsx'
import HappyClient from './components/HappyClients/HappyClient.jsx'
import Blog from './components/Blogs/Blog.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Question from './components/Questions/Question.jsx'
import MobilePhone from './components/MobilePhone/MobilePhone.jsx'
import Logo from './components/Logos/Logo.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Navbar2 />   
      <HomePage />
      <CompanyTag />
      <Explores />
      <Wellcome />
      <WhyChoose />
      <Introduction />
      <HappyClient />
      <Blog />
      <AboutUs />
      <Question />
      <MobilePhone />
      <Logo />
      <Footer />
    </div>
  )
}

export default App

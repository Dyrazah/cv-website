import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portofolio from './components/portofolio/Portofolio'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Portofolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App
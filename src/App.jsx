import React from 'react'
import Navbar from './components/nav/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Topbar from './components/topbar/Topbar'


const App = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    <Header />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
    </>
  )
}

export default App
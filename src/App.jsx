import React from 'react'
import Partical from './components/Partical'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from './components/ScrollToTop'
const App = () => {
  return (
    <>
      <Partical></Partical> 
      <Navbar></Navbar> 
      <Hero></Hero>
     
      <About></About>
       <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </>
  )
}

export default App

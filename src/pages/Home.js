import React from 'react'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Gamedev from '../components/gamedev/Gamedev'
import Menu from '../components/menu/Menu'
import Welcome from '../components/welcome/Welcome'

const Home = () => {
  return (
    <>
        <Menu/>
        <Welcome/>
        <About/>
        <Gamedev/>
        <Footer/>
    </>
  )
}

export default Home
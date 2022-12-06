import React from 'react'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Gamedev from '../components/gamedev/Gamedev'
import Welcome from '../components/welcome/Welcome'

const Home = () => {
  return (
    <>

        <Welcome/>
        <About/>
        <Gamedev/>
        <Footer/>
    </>
  )
}

export default Home
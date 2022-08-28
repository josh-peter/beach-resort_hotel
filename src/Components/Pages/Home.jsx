import React from 'react'
import NavBar from '../NavBar'
import Services from '../Services'
import {FeaturedRoom} from '../FeaturedRoom'
import Footer from '../Footer'
import Hero from '../Hero'



const Home = () => {
  return (
    <div>
      <NavBar />
     <Hero />
      <Services/>
      <FeaturedRoom />
      <Footer />
      
    </div>
  )
}

export default Home
import React from 'react'
import Anouncement from '../components/Anouncement'
import Catagories from '../components/Catagories'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Product from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Anouncement/>
      <Navbar/>
      <Slider/>
      <Catagories/>
      <Product/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Categories />
        <Products />
        <Footer />
    </div>
  )
}

export default Home;
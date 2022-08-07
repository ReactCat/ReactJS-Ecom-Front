
import React from 'react'
import Announce from '../components/Announce';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';



const Home = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Category />
      <Products />
      <Newsletter />
      <Footer />

            
    </div>
  )
}

export default Home;



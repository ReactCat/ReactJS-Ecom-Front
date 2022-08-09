
import React from 'react'
import Announce from '../components/Promotion';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Catalogue from '../components/Catalogue';
import Promotion from '../components/Promotion';



const Home = () => {
  return (
    <div>
      <Promotion />
      <Navbar />
      <Category />
      <Products />
      <Catalogue />
      <Footer />

            
    </div>
  )
}

export default Home;



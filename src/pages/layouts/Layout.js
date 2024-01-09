import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Slider from './Slider'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Slider />
      <Footer />
    </>
  )
}

export default Layout
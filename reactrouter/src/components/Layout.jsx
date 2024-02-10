import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './About/About'


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Layout;
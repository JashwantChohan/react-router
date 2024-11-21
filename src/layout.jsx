import React from 'react'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer' 
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

export default layout

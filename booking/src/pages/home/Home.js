import React from 'react'
import style from "./Home.module.css"

import Header from '../../components/header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertylist/PropertyList'
import GuestLove from '../../components/guestLove/GuestLove'
import MailList from '../../components/mailList/mailList'
import Footer from '../../components/footer/Footer'
function Home() {
  return (
   <>
    <Navbar/>
    <Header />
    <div  className={style.homeContainer}><Featured/>
    <h1 className={style.homeTitle}>Browse by property type</h1>
    <PropertyList/>
    <h1 className={style.homeTitle}>Home guests love</h1>
    <GuestLove/>
    <MailList/>
    {/* <Footer/> */}
    </div>
    </>
  )
}

export default Home

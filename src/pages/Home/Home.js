import React from 'react'
import Header from '../../component/Header/Header'
import Banner from '../../component/Banner/Banner'
import RowList from '../../component/Rows/RowList.js/RowList'
import Footer from "../../component/Footer/Footer"
import Request from '../../Utils/Request'

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <RowList/>
    <Footer/>
    {/* <Request/> */}
    </>
  )
}

export default Home
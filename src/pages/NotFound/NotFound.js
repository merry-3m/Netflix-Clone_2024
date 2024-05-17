import React from 'react'
import Footer from '../../component/Footer/Footer'
import { Link } from 'react-router-dom'
import SimpleHeader from '../../component/Header/SimpleHeader'

const NotFound = () => {
  return (
    <div>
      <SimpleHeader />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>404 Page Not Found</h1>
        <Link to="/login">
          <button style={{ padding: '10px 20px', marginTop: '20px', cursor:"pointer" }}>Go to Login Page</button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
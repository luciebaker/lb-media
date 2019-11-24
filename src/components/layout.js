
import React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css" 
import "./layout.css"
import Navbar from './global/Navbar'
import Footer from './global/Footer'

const Layout = ({ children }) => ( <> 
<Navbar />
{children} 
<Footer />
</>

)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import Navbar from "./Navbar"
import "../assets/css/main.css"
import "normalize.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout

import React from "react"
import "modern-normalize"
import "../assets/css/main.css"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  )
}

export default Layout

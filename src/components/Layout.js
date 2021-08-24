import React from "react"
// import "normalize.css"
import "../assets/css/main.css"
import Particles from "react-particles-js"


const Layout = ({ children }) => {
  return (
    <>
  <p>layout</p>
      {children}
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </>
  )
}

export default Layout
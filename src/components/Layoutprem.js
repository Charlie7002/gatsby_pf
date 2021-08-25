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
              value: 120,
              density: "enable",
              value_area: 800,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
            },
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          // move: {
          //   enable: true,
          //   direction: "top",
          //   speed: 2,
          // },
        }}
      />
    </>
  )
}

export default Layout

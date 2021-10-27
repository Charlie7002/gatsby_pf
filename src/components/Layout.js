import React from "react"
import Navbar from "./Navbar"
import "../assets/css/main.css"
import "normalize.css"
import { StaticImage } from "gatsby-plugin-image"
import CookieConsent from "react-cookie-consent"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <CookieConsent
        location="bottom"
        buttonText="Accepter"
        buttonId="btn-cookie"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{
          display: "flex",
          alignCenter: "center",
          justifyContent: "flex",
          background:
            "linear-gradient(40deg, rgb(71, 77, 235) 0%, rgb(103, 34, 150) 100%)",
        }}
      >
        <StaticImage
          src="../assets/images/cookie.png"
          alt="cookies"
          quality={80}
          height={30}
          width={30}
          className="cookies-img"
          layout="constrained"
        />
        <span
          style={{
            marginLeft: "1rem",
          }}
        >
          Ce site utilise des cookies pour garantir une meilleure expérience
          utilisateur.
        </span>
      </CookieConsent>
    </>
  )
}

export default Layout

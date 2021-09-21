import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"

const SectionFooterStyles = styled.footer`
  position: relative;
  padding-top: 65px;
  .text {
    position: absolute;
    color: white;
    z-index: 50;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 100px;
    text-align: center;
  }
`

const Footer = () => {
  return (
    <SectionFooterStyles>
      <StaticImage
        className="footer-img"
        src="../assets/images/footer_bg.jpg"
        alt="footer"
        placeholder="dominantColor"
        height={418}
        style={{ zIndex: 5 }}
        layout="constrained"
        formats={["auto", "webp", "avif"]}
      />
      <div className="text">
        <p>Mentions légales / Données personnelles</p>
        <p>Developed and designed with ☕ by Charlotte Cachet</p>
      </div>
    </SectionFooterStyles>
  )
}

export default Footer

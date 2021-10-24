import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"

const SectionFooterStyles = styled.footer`
  position: absolute;
  padding-top: 4.06rem;
  margin-top: -9rem;

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
  @media (max-width: 1420px) {
    .text {
      margin-top: 80px;
    }
    margin-top: 0;
  }
  @media (max-width: 1000px) {
    .text {
      font-size: 0.8rem;
      margin-top: 56px;
    }
  }
  @media (max-width: 650px) {
    padding-top: 0;
    .text {
      font-size: 0.8rem;
      margin-top: 56px;
      background: pink;
      width: 100%;
      border-radius: 50% 50% 0 0;
      padding: 1rem;
      background: var(--lg-violet-btn);
    }
    img {
      display: none;
    }
  }
  a {
    text-decoration: none;
    &:visited,
    &:focus {
      color: var(--white);
    }
  }
`

const Footer = () => {
  return (
    <SectionFooterStyles>
      <div className="text">
        <a href="/mentions">Mentions légales / Données personnelles</a>
        <p>Developed and designed with ☕ by Charlotte Cachet</p>
      </div>
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
    </SectionFooterStyles>
  )
}

export default Footer

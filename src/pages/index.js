import React from "react"
import ParticlesComp from "../components/ParticlesComp"

import "../assets/css/main.css"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"

import SectionIntro from "../components/SectionIntro"
import SectionServices from "../components/SectionServices"
import SectionProcessus from "../components/SectionProcessus"
import SectionAbout from "../components/SectionAbout"
import SectionProject from "../components/SectionProject"
import SectionContact from "../components/SectionContact"
import Footer from "../components/Footer"

import Arrow from "../components/Arrow"
import image from "../assets/icons/girlpf.svg"

import ScrollToTop from "react-scroll-to-top"
import Seo from "../components/SEO"

const MainStyles = styled.main`
  @media (max-width: 1200px) {
    margin: 0 1rem;
  }
`

export default function Home({ location }) {
  return (
    <Layout>
      <Seo
        title="Accueil"
        description="Charlotte Cachet, création de site internet, développement web, web design, réferencement"
        image={image}
        location={location}
      />
      <ScrollToTop
        smooth
        component={<Arrow />}
        style={{
          borderRadius: "40px",
          boxShadow: "0px 9px 25px  rgba(255, 158, 152, 0.8)",
          backgroundColor: "#ffbbae",
          transition: "all, .3s",
          zIndex: 59,
        }}
      />
      <Hero />
      <ParticlesComp />
      <MainStyles>
        <SectionIntro />
        <SectionServices sectionname="services" />
        <SectionProcessus sectionname="processus" />
        <SectionAbout sectionname="A propos" />
        <SectionProject sectionname="Mes derniers projects" />
        <SectionContact sectionname="contact" />
      </MainStyles>
      <Footer />
    </Layout>
  )
}

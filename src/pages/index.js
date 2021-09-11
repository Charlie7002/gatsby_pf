import React from "react"
// import ParticlesComp from "../components/ParticlesComp"

import "../assets/css/main.css"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"

import SectionIntro from "../components/SectionIntro"
import SectionProcessus from "../components/SectionProcessus"
import SectionAbout from "../components/SectionAbout"
import SectionProject from "../components/SectionProject"
import SectionContact from "../components/SectionContact"
import Footer from "../components/Footer"

import Arrow from "../components/Arrow"

import ScrollToTop from "react-scroll-to-top"

const MainStyles = styled.main`
  max-width: 73rem;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Layout>
      <ScrollToTop
        smooth
        component={<Arrow />}
        style={{
          borderRadius: "40px",
          boxShadow: "0px 9px 25px  rgba(255, 158, 152, 0.8)",
          backgroundColor: "#ffbbae",
          transition: "all, .3s",
        }}
      />
      <Hero />
      {/* <ParticlesComp /> */}
      <MainStyles>
        <SectionIntro />
        <SectionProcessus name="processus" />
        <SectionAbout name="A propos" />
        <SectionProject name="Mes derniers projects" />
        <SectionContact name="Contact" />
      </MainStyles>
      <Footer />
    </Layout>
  )
}

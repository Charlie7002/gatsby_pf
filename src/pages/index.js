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

const MainStyles = styled.main`
  /* width: 100%; */
  max-width: 73rem;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <ParticlesComp /> */}
      <MainStyles>
        <SectionIntro />
        <SectionProcessus name="processus" />
        <SectionAbout name="A propos" />
        <SectionProject name="Mes derniers projects" />
        <SectionContact name="Contact" />
        {/* <p style={{ background: "purple" }}>footer</p> */}
      </MainStyles>
    </Layout>
  )
}

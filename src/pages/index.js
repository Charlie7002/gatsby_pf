import React from "react"
// import ParticlesComp from "../components/ParticlesComp"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/main.css"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"

import SectionIntro from "../components/SectionIntro"
import SectionProcessus from "../components/SectionProcessus"
import SectionAbout from "../components/SectionAbout"

const MainStyles = styled.main`
  width: 100%;
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
        {/* <p style={{ background: "purple" }}>footer</p> */}
      </MainStyles>
    </Layout>
  )
}

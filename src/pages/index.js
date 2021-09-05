import React from "react"
// import ParticlesComp from "../components/ParticlesComp"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/main.css"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"
import img from "../assets/images/girl-sect1.svg"

const SectionOneStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: var(--violet);
  }
  border: 1px solid pink;
`

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
        <SectionOneStyles>
          <h4>
            Vous n'avez pas besoin d'un site Web, vous avez besoin d'un site Web
            <span> performant </span>.
          </h4>
          <p>
            Ce mot suplémentaire fait toute la différence entre une
            <span> visite</span> et une
            <span> vente</span>
          </p>
          <div className="sep"></div>
          <p>
            Quand je dis site Web performant, je ne parle pas seulement d'un
            beau site Web, bien que cela en fasse biensûr partie, voici les
            <span> points clés</span> :
          </p>
          <img
            className="set1-img"
            src={img}
            alt="home"
            style={{ zIndex: 5 }}
          />
        </SectionOneStyles>
        <p style={{ background: "purple" }}>footer</p>
      </MainStyles>
    </Layout>
  )
}

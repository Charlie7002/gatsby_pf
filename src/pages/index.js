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
  // -------------------------------a virer
  margin-bottom: 100px;
  span {
    color: var(--violet);
  }
  border: 1px solid pink;
  .set1-img {
    height: 26rem;
  }
  .tiretwrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    p {
      font-size: 1.55rem;
      color: var(--gray-d);
    }
  }
  .tiret {
    height: 1px;
    width: 130px;
    top: 0;
    left: 0;

    &:before {
      position: absolute;
      content: "";
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 100%;
      top: 3px;
      left: 0;
    }
  }
  .tiret1 {
    background: linear-gradient(225deg, var(--white), var(--violet));
    &:before {
      background: var(--violet);
    }
  }
  .tiret2 {
    background: linear-gradient(225deg, var(--white), var(--orange));
    &:before {
      background: var(--orange);
    }
  }
  .tiret3 {
    background: linear-gradient(225deg, var(--white), var(--orange-light));
    &:before {
      background: var(--orange-light);
    }
  }
  .tiret4 {
    background: linear-gradient(225deg, var(--white), var(--blue));
    &:before {
      background: var(--blue);
    }
  }
  .pointbox {
    display: flex;
    justify-content: center;
    align-items: center;
    &-tiret {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      width: 350px;
      gap: 1rem;
    }
  }
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
          <div className="pointbox">
            <img
              className="set1-img"
              src={img}
              alt="home"
              style={{ zIndex: 5 }}
            />
            <div className="pointbox-tiret">
              <div className="tiretwrap">
                <div className="tiret tiret1 "></div>
                <p>Design attractif</p>
              </div>
              <div className="tiretwrap">
                <div className="tiret tiret2 "></div>
                <p>Navigation intuitive</p>
              </div>
              <div className="tiretwrap">
                <div className="tiret tiret3"></div>
                <p>Rapidité</p>
              </div>
              <div className="tiretwrap">
                <div className="tiret tiret4 "></div>
                <p>Responsive</p>
              </div>
            </div>
          </div>
        </SectionOneStyles>
        <p style={{ background: "purple" }}>footer</p>
      </MainStyles>
    </Layout>
  )
}

import React from "react"
import styled from "styled-components"
import img from "../assets/images/girl-sect1.svg"

const SectionIntroStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  h2,
  h5,
  h4 {
    text-align: center;
    margin-bottom: 3.8rem;
    z-index: 2;
  }
  span {
    color: var(--violet);
  }

  .set1-img {
    max-height: 26rem;
    max-width: 26rem;
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
      top: 10px;
      left: -3px;
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
  .bg {
    background: white;
    z-index: 1;
    position: absolute;
    height: 400px;
    width: 100%;
    opacity: 0.8;
    top: -1rem;
  }

  @media (max-width: 1010px) {
    h2 {
      font-size: 1.7rem !important;
      margin-bottom: 2.2rem !important;
    }
    h3 {
      font-size: 1.5rem;
      margin-bottom: 2.2rem !important;
    }

    h4 {
      font-size: 1.4rem;
      margin-bottom: 2.2rem !important;
    }

    h5 {
      font-size: 1.3rem;
      margin-bottom: 2.2rem !important;
    }
  }
  @media (max-width: 830px) {
    .bg {
      height: 320px;
    }
    .pointbox {
      flex-direction: column;
      img.set1-img {
        width: 260px;
        height: 260px;
      }
      .pointbox-tiret {
        .tiretwrap {
          justify-content: center;
          width: fit-content;
          margin: 0 auto;
          p {
            margin-left: 2.8rem;
            font-size: 1.3rem;
          }
          .tiret {
            width: 0px;
            &:before {
              width: 1rem;
              height: 1rem;
            }
          }
        }
      }
    }
  }
`

const SectionIntro = () => {
  return (
    <SectionIntroStyles>
      <div className="bg"></div>
      <h2>
        Vous avez besoin d'un site Web, mais surtout d'un site Web
        <span> performant </span>
      </h2>
      <h5>
        Ce mot suplémentaire fait toute la différence entre une
        <span> visite</span> et une
        <span> vente</span>
      </h5>
      <div className="sep"></div>
      <h4>
        Quand je dis site Web performant, je ne parle pas seulement d'un beau
        site Web, bien que cela en fasse biensûr partie, voici les
        <span> points clés</span> :
      </h4>

      <div className="pointbox">
        <img className="set1-img" src={img} alt="home" style={{ zIndex: 5 }} />
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
            <p>Affichage adaptatif</p>
          </div>
        </div>
      </div>
    </SectionIntroStyles>
  )
}

export default SectionIntro

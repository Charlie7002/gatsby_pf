import React from "react"
import SectionTitle from "./SectionTitle"
import img from "../assets/icons/process.svg"
import imgDot from "../assets/images/violet_dot.svg"
import { boxProcess } from "../utils/constants"
import styled from "styled-components"

const SectionProcessStyles = styled.section`
  .boxwrap {
    max-width: 72.5rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 420px));
    grid-template-rows: repeat(2, minmax(300px, 400px));
    justify-content: space-between;
    gap: 3rem 0;
    .box {
      display: grid;
      grid-template-rows: 8rem 4.5rem 1fr;
      background: pink;
      padding: 2.5rem;
      background: var(--white);
      border-radius: 20px;
      box-shadow: 0px 10px 40px rgba(122, 126, 241, 0.3);
      h4 {
        font-weight: 700;
      }
      p {
        font-size: 1.23rem;
      }
    }
  }
`

const SectionProcessus = ({ name }) => {
  return (
    <SectionProcessStyles>
      <SectionTitle img={img} imgDot={imgDot} name={name} />
      <div className="boxwrap">
        {boxProcess.map((proc, i) => {
          return (
            <div className="box" key={i}>
              <img src={proc.icon} alt={proc.title} />
              <h4 style={{ color: proc.color }}>{proc.title}</h4>
              <p>{proc.text}</p>
            </div>
          )
        })}
      </div>
    </SectionProcessStyles>
  )
}

export default SectionProcessus

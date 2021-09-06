import React from "react"
import SectionTitle from "./SectionTitle"
import img from "../assets/icons/about.svg"
import imgDot from "../assets/images/orange_dot.svg"

const SectionAbout = ({ name }) => {
  return (
    <div>
      <SectionTitle name={name} img={img} imgDot={imgDot} />
    </div>
  )
}

export default SectionAbout

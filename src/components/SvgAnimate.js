import React from "react"
import boxtools from "../assets/animatesvg/boxtools.svg"
import seo from "../assets/animatesvg/seocss.svg"
import dev from "../assets/animatesvg/developpementcss2.svg"

export const SvgAnimateDesign = () => {
  return <img src={boxtools} alt="web design" />
}

export const SvgAnimateDev = () => {
  return <img src={dev} alt="Développement web" />
}

export const SvgAnimateSeo = () => {
  return <img src={seo} alt="SEO" />
}

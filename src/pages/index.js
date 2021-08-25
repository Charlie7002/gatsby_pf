import React from "react"
import ParticlesComp from "../components/ParticlesComp"
import "../assets/css/main.css"

import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <ParticlesComp />
      <h1>Salut les batards!</h1>
    </Layout>
  )
}

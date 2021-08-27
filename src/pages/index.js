import React from "react"
import ParticlesComp from "../components/ParticlesComp"

import "../assets/css/main.css"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ParticlesComp />
    </Layout>
  )
}

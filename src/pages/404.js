import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const WrapperError = styled.div``

const ErrorPage = () => {
  return (
    <Layout>
      <Seo title="Error" />
      <WrapperError>
        <p>Olala c'est error</p>
      </WrapperError>
    </Layout>
  )
}

export default ErrorPage

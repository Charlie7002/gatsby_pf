import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const WrapperError = styled.div``

const ErrorPage = () => {
  return (
    <Layout>
      <WrapperError>
        <p>Olala c'est error</p>
      </WrapperError>
    </Layout>
  )
}

export default ErrorPage

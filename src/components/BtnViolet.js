import React from "react"
import styled from "styled-components"

const Button = styled.button`
  color: #fff;
  font-size: 1rem;

  padding: 0.8rem 3.6rem;
  border: none;
  font-weight: 600;
  border-radius: var(--borderRadius-btn);
  background: var(--lg-violet-btn);
`

const BtnViolet = ({ link }) => {
  return (
    <Button as="a" href={link}>
      contact
    </Button>
  )
}

export default BtnViolet

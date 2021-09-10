import React from "react"
import styled from "styled-components"

const Button = styled.button`
  border-radius: var(--borderRadius-btn);
  background: var(--lg-violet-btn);
`

const BtnViolet = ({ link }) => {
  return (
    <Button as="a" href={link} className="btn_def">
      Contact
    </Button>
  )
}

export default BtnViolet

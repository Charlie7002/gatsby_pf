import React from "react"
import SectionTitle from "./SectionTitle"
import img from "../assets/icons/contact.svg"
import imgDot from "../assets/images/blue_dot.svg"
import styled from "styled-components"
import img_contact from "../assets/images/img_contact.svg"

const SectionContactStyles = styled.section`
  .wrap {
    display: grid;
    grid-template-columns: 30% 40%;
    justify-content: center;
    form {
      display: flex;
      flex-direction: column;
    }
  }
`

const SectionContact = ({ name }) => {
  return (
    <SectionContactStyles>
      <SectionTitle name={name} img={img} imgDot={imgDot} />
      <div className="wrap">
        <div className="img-section">
          <img src={img_contact} alt="contact" />
          <p>Si vous avez une question, n'hésitez pas !</p>
          <span>hello@charlotte-cachet.com</span>
        </div>
        <form>
          <label htmlFor="nom">Nom / Prénom</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button type="submit"></button>
        </form>
      </div>
    </SectionContactStyles>
  )
}

export default SectionContact

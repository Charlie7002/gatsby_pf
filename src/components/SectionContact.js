import React from "react"
import SectionTitle from "./SectionTitle"
import img from "../assets/icons/contact.svg"
import imgDot from "../assets/images/violet_dot.svg"
import styled from "styled-components"
import img_contact from "../assets/images/img_contact.svg"

const SectionContactStyles = styled.section`
  .wrap {
    display: grid;
    color: var(--grey-font);
    grid-template-columns: 30% 40%;
    justify-content: center;
    form {
      display: flex;
      flex-direction: column;
    }
  }
  form {
    input {
      height: 4.37rem;
      margin-bottom: 2rem;
    }

    input,
    textarea {
      background: var(--orange-input);
      border: 1px solid var(--orange-border);
      border-radius: 0.3rem;
      resize: none;
    }
    label {
      font-size: 1.125rem;
      margin-bottom: 0.6rem;
    }
  }
  .btn_contact {
    background: var(--lg-orange-btn);
    color: white;
    border: none;
    width: 19.3rem;
    height: 5rem;
    font-weight: 700;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    margin-top: 4rem;
    box-shadow: 0 16px 40px 0 rgba(255, 84, 117, 0.46);
  }
`

const SectionContact = ({ name }) => {
  return (
    <SectionContactStyles id="contact">
      <SectionTitle name={name} img={img} imgDot={imgDot} />
      <div className="wrap">
        <div className="img-section">
          <img src={img_contact} alt="contact" />
          <p>
            Si vous avez une question, besoin de renseignements, n'hésitez pas!
          </p>
          <span>hello@charlotte-cachet.com</span>
        </div>
        <form method="post" action="#">
          <label htmlFor="nom">Nom / Prénom</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button type="submit" className="btn_contact">
            Envoyer
          </button>
        </form>
      </div>
    </SectionContactStyles>
  )
}

export default SectionContact

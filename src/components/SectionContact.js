import React from "react"
import SectionTitle from "./SectionTitle"
import img from "../assets/icons/contact.svg"
import imgDot from "../assets/images/violet_dot.svg"
import styled from "styled-components"
import img_contact from "../assets/images/img_contact.svg"
import img_thx from "../assets/images/thx.svg"
import { useForm, ValidationError } from "@formspree/react"

const SectionContactStyles = styled.section`
  z-index: 5;
  background: var(--white);
  position: relative;
  padding-top: 2rem;
  .wrap {
    display: grid;
    color: var(--grey-font);
    grid-template-columns: 40% 50%;
    justify-content: center;
    gap: 5rem;
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
      border: 1px solid var(--orange-light);
      border-radius: 0.3rem;
      font-size: 1.2rem;
      color: var(--grey-d);
      resize: none;
      padding: 1.5rem;
    }
    textarea:focus,
    input:focus {
      outline: 1px solid var(--orange);
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
  .img-section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    p {
      text-align: center;
      font-size: 1.4rem;
    }
    a {
      color: var(--orange);
      font-size: 1.8rem;
    }
  }
  .form_thanks {
    height: 100%;
    width: 100%;
    border: 1px solid #f5e6dc;
    background: #fffaf7;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    p {
      color: var(--orange);
      font-size: 1.2rem;
    }
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
            Si vous avez une question, besoin de renseignements ou un projet en
            tête, n'hésitez pas!
          </p>

          <a
            href="#mailgo"
            data-address="hello"
            data-domain="charlotte-cachet.com"
            className="dark"
          >
            &rarr; Ecrire un email &larr;
          </a>
          <p>ou utiliser le formulaire de contact</p>
        </div>
        <ContactForm />
      </div>
    </SectionContactStyles>
  )
}

const ContactForm = () => {
  const [state, handleSubmit] = useForm("myyloekb")
  if (state.succeeded) {
    return (
      <div className="form_thanks">
        <img src={img_thx} alt="message send" />
        <p>Votre message a bien été envoyé !</p>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nom">Nom / Prénom</label>
      <input type="text" name="name" id="name" required />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" cols="30" rows="10" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" className="btn_contact" disabled={state.submitting}>
        Envoyer
      </button>
    </form>
  )
}

export default SectionContact

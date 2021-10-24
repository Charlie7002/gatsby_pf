import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Seo from "../components/SEO"

const WrapperError = styled.div`
  height: 100vh;
  background: var(--orange-light);
  .top {
    padding-top: 5rem;
  }

  .container {
    margin: 5rem auto 0;
    position: relative;
    width: 250px;
    height: 250px;
    margin-top: 1rem;
  }

  .ghost {
    width: 50%;
    height: 53%;
    left: 25%;
    top: 10%;
    position: absolute;
    border-radius: 50% 50% 0 0;
    background: white;
    border: 1px solid gray;
    border-bottom: none;
    animation: float 2s ease-out infinite;
  }

  .ghost-copy {
    width: 50%;
    height: 53%;
    left: 25%;
    top: 10%;
    position: absolute;
    border-radius: 50% 50% 0 0;
    background: white;
    border: 1px solid gray;
    border-bottom: none;
    animation: float 2s ease-out infinite;
    z-index: 0;
  }

  .face {
    position: absolute;
    width: 100%;
    height: 60%;
    top: 20%;
  }
  .eye,
  .eye-right {
    position: absolute;
    background: darkgray;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    top: 40%;
  }

  .eye {
    left: 25%;
  }
  .eye-right {
    right: 25%;
  }

  .mouth {
    position: absolute;
    top: 50%;
    left: 45%;
    width: 10px;
    height: 10px;
    border: 3px solid;
    border-radius: 50%;
    border-color: transparent darkgray darkgray transparent;
    transform: rotate(45deg);
  }

  .one,
  .two,
  .three,
  .four {
    position: absolute;
    background: white;
    top: 85%;
    width: 25%;
    height: 23%;
    border: 1px solid gray;
    z-index: 0;
  }

  .one {
    border-radius: 0 0 100% 30%;
    left: -1px;
  }

  .two {
    left: 23%;
    border-radius: 0 0 50% 50%;
  }

  .three {
    left: 50%;
    border-radius: 0 0 50% 50%;
  }

  .four {
    left: 74.5%;
    border-radius: 0 0 30% 100%;
  }

  .shadow {
    position: absolute;
    width: 30%;
    height: 7%;
    background: gray;
    left: 35%;
    top: 80%;
    border-radius: 50%;
    animation: scale 2s infinite;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes float {
    50% {
      transform: translateY(15px);
    }
  }

  .bottom {
    max-height: 10rem;
    min-height: 8rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: white;
    text-align: center;
    font-size: 9em;
    margin: 0 auto 2rem;
    background: linear-gradient(to right, var(--orange) 0%, var(--violet) 60%);
    background-size: 200% 20%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
  h3 {
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
    margin-top: -20px;
    font-weight: 900;
  }
  p {
    font-size: 0.6em;
    text-transform: uppercase;
  }

  .btn {
    font-family: var(--title-font);
    border-radius: var(--borderRadius-btn);
    background: var(--lg-violet-btn);
    box-shadow: 10px 10px 30px 2px rgba(179, 114, 243, 0.46);
    transition: var(--transition);
    &:hover {
      filter: hue-rotate(20%);
      filter: hue-rotate(30deg);
      transform: translateY(-2px);
      box-shadow: 0px 10px 40px 2px rgba(179, 114, 243, 0.7);
    }
    padding: 15px 20px;
    border: none;
    color: var(--white);
  }
`

const ErrorPage = () => {
  return (
    <>
      <Seo title="Error" />
      <WrapperError>
        <div id="background"></div>
        <div class="top">
          <h1>404</h1>
          <h3>Oups! La page que vous recherchez semble introuvable.</h3>
        </div>
        <div class="container">
          <div class="ghost-copy">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="ghost">
            <div class="face">
              <div class="eye"></div>
              <div class="eye-right"></div>
              <div class="mouth"></div>
            </div>
          </div>
          <div class="shadow"></div>
        </div>
        <div class="bottom">
          <p>Boo! Run away!</p>
          <Link to="/">
            <button className="btn">Retour sur la page d'accueil</button>
          </Link>
        </div>
      </WrapperError>
    </>
  )
}

export default ErrorPage

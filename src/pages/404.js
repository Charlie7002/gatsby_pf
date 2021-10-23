import React from "react"
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
    margin-top: 10px;
  }

  /*text styling*/
  h1 {
    color: white;
    text-align: center;
    font-size: 9em;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(to right, var(--orange) 0%, var(--violet) 100%);
    background-size: 150% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    animation: gradient 5s ease infinite;
  }
  h3 {
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
    color: gray;
    margin-top: -20px;
    font-weight: 900;
  }
  p {
    text-align: center;

    color: darkgray;
    font-size: 0.6em;
    margin-top: -20px;
    text-transform: uppercase;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }

  /*search style*/

  .search-bar {
    border: 1px solid gray;
    padding: 5px;
    height: 20px;
    margin-left: -30px;
    width: 200px;
    outline: none;
    &:focus {
      border: 1px solid light;
    }
  }

  .btn {
    background: white;
    padding: 15px 20px;
    margin: 5px;
    color: darkgray;

    text-transform: uppercase;
    font-size: 0.6em;
    letter-spacing: 1px;
    border: 0;
    &:hover {
      background: gray;
      transition: all 0.4s ease-out;
    }
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

          <div class="buttons">
            <button class="btn">Accueil</button>
          </div>
        </div>
      </WrapperError>
    </>
  )
}

export default ErrorPage

import React from "react";
import styled from "styled-components";
import { superHeros } from "../utils/constants";
import logo from "./../assets/logo.png";

export default function AvatarPage({ capturedImage }) {
  capturedImage && console.log("capturedImage =>", capturedImage);
  console.log(superHeros);
  return (
    <AvatarPageWrapper>
      {/* header starts here */}
      <header>
        <div className="title">
          <h1>Select Your Avatar</h1>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
      {/* header ends here */}

      {/* main starts here */}
      <main>
        {superHeros &&
          superHeros.map((superHero, index) => (
            <div
              key={index}
              className="singleSuperHero"
              id={(index == 2) | (index == 6) ? "mt" : ""}
            >
              <img src={superHero} alt="super hero" />
            </div>
          ))}
      </main>
      <footer>
        <button>Submit</button>
      </footer>
      {/* main ends here */}
    </AvatarPageWrapper>
  );
}

const AvatarPageWrapper = styled.div`
  /* width: 100vw; */
  padding-bottom: 2vw;
  /* header starts here */
  header {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    .title {
      border: 1px solid red;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 10vw;
      h1 {
        border: 0.15vw solid black;
        padding: 0.1vw 0.4vw;
        font-size: 3vw;
        font-weight: 600;
        border-radius: 0.7vw;
      }
    }
    .logo {
      width: 10vw;
      height: 10vw;
      border: 1px solid red;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  /* header ends here */

  /* main starts here */
  main {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1vw;
    flex-wrap: wrap;
    height: 90vh;
    width: 70%;
    margin: 1vw auto 0 auto;
    .singleSuperHero {
      border: 1px solid black;
      img {
        width: 12vw;
      }
    }
    #mt {
      margin-top: 8vw;
    }
  }
  /* main ends here */

  /* footer starts here */
  footer {
    border: 1px solid purple;
    button {
      border: none;
      outline: none;
      padding: 0.5vw 2vw;
      font-weight: 600;
      font-size: 1.5vw;
      border-radius: 0.6vw;
      cursor: pointer;
      background-color: yellow;
      margin: 0 auto;
      display: block;
    }
  }
  /* footer ends here */

  /* for big screens */
  @media screen and (min-width: 1024px) {
    main {
      height: 100vh;
    }
  }

  /* for laptop screens */
  @media screen and (max-width: 768px) {
    background: url("./../src/assets/tablet-background-image.png");
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    height: 100vh;
    /* border: 10px solid red; */
    main {
      height: 70vh;
    }
  }
`;

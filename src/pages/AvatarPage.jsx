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
        <h1>Select Your Avatar</h1>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
      {/* header ends here */}
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
    </AvatarPageWrapper>
  );
}

const AvatarPageWrapper = styled.div`
  /* header starts here */
  header {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    h1 {
      border: 1px solid black;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-size: 3.5vw;
      font-weight: 600;
      padding-left: 10vw;
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
    justify-content: center;
    align-items: center;
    gap: 1vw;
    flex-wrap: wrap;
    height: 80vh;
    width: 70vw;
    margin: auto;
    .singleSuperHero {
      border: 1px solid black;
      img {
        width: 10vw;
      }
    }
    #mt {
      margin-top: 8vw;
    }
  }
  /* main ends here */
`;

import React from "react";
import styled from "styled-components";
import logo from "./../assets/logo.png";
import {
  superHero01,
  superHero02,
  superHero03,
  superHero04,
  superHero05,
  superHero06,
  superHero07,
  superHero08,
  superHero09,
} from "./../assets/home-page/index";

export default function Home() {
  return (
    <HomeWrapper>
      {/* header starts here */}
      <header>
        <h1>AI Photobooth Generator</h1>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
      {/* header ends here */}

      {/* main starts here */}
      <main>
        <div className="buttons">
          <button className="startNow">Start Now</button>
          <button className="knowMore">Know More</button>
        </div>
        <div className="images">
          <div className="firstContainer">
            <img src={superHero01} alt="wonder woman" />
          </div>
          <div className="secondContainer">
            <img src={superHero02} alt="natasha" />
            <img src={superHero03} alt="scarlet witch" />
          </div>
          <div className="thirdContainer">
            <div className="thirdContainerChildOne">
              <img src={superHero04} alt="super man" />
            </div>
            <div className="thirdContainerChildTwo">
              <img src={superHero05} alt="hermione granger" />
              <img src={superHero06} alt="super woman" />
            </div>
          </div>
          <div className="fourthContainer">
            <img src={superHero07} alt="aquaman" />
            <img src={superHero08} alt="harry potter" />
          </div>
          <div className="fifthContainer">
            <img src={superHero09} alt="thor" />
          </div>
        </div>
      </main>
      {/* main ends here */}
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  /* border: 5px solid red; */
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
    margin-top: 2.5vw;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    /* buttons starts here */
    .buttons {
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1vw;
      .startNow,
      .knowMore {
        border: none;
        outline: none;
        padding: 0.5vw 2vw;
        font-weight: 600;
        font-size: 1.5vw;
        border-radius: 0.6vw;
      }
      .startNow {
        background-color: yellow;
      }
      .knowMore {
        border: 1px solid black;
        background-color: transparent;
      }
    }
    /* buttons ends here */
    /* images starts here */
    .images {
      height: 90vh;
      border: 1px solid blue;
      display: flex;
      justify-content: center;
      gap: 0.5vw;
      .firstContainer,
      .fifthContainer {
        border: 1px solid black;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 13vw;
        }
      }
      .secondContainer,
      .fourthContainer {
        border: 1px solid black;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 12vw;
        }
      }
      .thirdContainer {
        padding-top: 7vw;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5vw;
        .thirdContainerChildOne {
          img {
            width: 22vw;
          }
        }
        .thirdContainerChildTwo {
          border: 1px solid green;
          display: flex;
          align-items: flex-start;
          gap: 2vw;
          img:first-child {
            width: 11vw;
          }
          img:last-child {
            width: 9vw;
          }
        }
      }
    }
    /* images ends here */
  }
  /* main ends here */
`;

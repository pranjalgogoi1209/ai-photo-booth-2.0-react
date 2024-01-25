import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
} from "../assets/home-page/index";

export default function HomePage() {
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
          <Link to={"/capture-image"}>
            <button className="startNow">Start Now</button>
          </Link>
          <Link to={"/know-more"}>
            <button className="knowMore">Know More</button>
          </Link>
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
        cursor: pointer;
        box-shadow: 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.5);
        transform: translateY(-0.1vw);
        transition: all ease 0.5s;
        &:hover {
          box-shadow: none;
          transform: translateY(0);
        }
      }
      .startNow {
        background-color: #fcb017;
      }
      .knowMore {
        border: 0.1vw solid black;
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
      gap: 1vw;
      img {
        box-shadow: 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.5);
        border-radius: 0.9vw;
      }
      img:hover {
        transform: scale(1.07);
      }
      .firstContainer,
      .fifthContainer {
        border: 1px solid black;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 13vw;
          transition: all ease 0.5s;
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
        gap: 1vw;
        img {
          width: 12vw;
          transition: all ease 0.5s;
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
            transition: all ease 0.5s;
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
          img {
            transition: all ease 0.5s;
          }
        }
      }
    }
    /* images ends here */
  }
  /* main ends here */
`;

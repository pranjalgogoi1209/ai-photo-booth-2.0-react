import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function GeneratedImagePage({ generatedImage }) {
  //   const [isLoading, setIsLoading] = useState(false);
  generatedImage && console.log(generatedImage);

  /* useEffect(() => {
    if (generatedImage) {
      setIsLoading(true);
    }
  }, [generatedImage]); */

  return (
    <GeneratedImageWrapper>
      {generatedImage ? (
        <div className="generatedImage">
          <img src={generatedImage} alt="generated image" />
          <button>Download</button>
        </div>
      ) : (
        <div className="loading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </GeneratedImageWrapper>
  );
}

const GeneratedImageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .generatedImage {
    img {
      width: 40vh;
      box-shadow: 0.2vh 0.2vh 0.8vh rgba(0, 0, 0, 0.5);
      border-radius: 3.5vh;
    }
    button {
      border: none;
      outline: none;
      padding: 0.5vw 2vw;
      font-weight: 600;
      font-size: 1.5vw;
      border-radius: 0.6vw;
      cursor: pointer;
      background-color: #fcb017;
      margin: 0 auto;
      display: block;
      box-shadow: 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.5);
      transform: translateY(-0.1vw);
      transition: all ease 0.5s;
      &:hover {
        box-shadow: none;
        transform: translateY(0);
      }
    }
  }

  .loading {
    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #fff;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #272935;
`;

const StyledRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  filter: brightness(0) invert(1) drop-shadow(0px 0px 3px #FFFFFF);

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`;


const Loader: React.FC = () => {
    return (
        <StyledLoader>
            <StyledRing>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </StyledRing>
        </StyledLoader>
    );
};

export default Loader;
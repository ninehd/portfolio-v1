import {createGlobalStyle} from 'styled-components';
import variables from './variables';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  ${variables}

  ;
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Code Pro', Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    line-height: 1.5;
    background-color: var(--color-secondary);
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 1rem;
    color: var(--color-primary);
    line-height: 1.1;
  }

  h1 {
    font-size: 5.5rem;

  }

  h2, h3 {
    font-size: 2rem;

    @media screen and (min-width: 350px) {
      font-size: 2.4rem;
    }

    @media screen and (min-width: 390px) {
      font-size: 2.8rem;
    }

    @media screen and (min-width: 600px) {
      font-size: 4rem;
    }
    
    @media screen and (min-width: 992px) {
      font-size: 4.8rem;
    }
  }
  

  h4 {
    font-size: 1.5rem;

    @media screen and (min-width: 390px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 600px) {
      font-size: 3rem;
    }
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 390px) {
    p {
      font-size: 1.7rem;
    }
  }

  @media screen and (min-width: 600px) {
    p {
      font-size: 1.7rem;
    }
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 2rem;
    }
  }


  /* Blocks */
  .block {
    --padding-vertical: 1rem;
    padding: 3rem 2rem;
  }

  .block__header {
    text-align: left;
    margin-bottom: 4rem;
  }

  .block__heading {
    margin-top: 0;
  }

  .block--dark {
    background: var(--color-primary);
    text-shadow: #FFFFFF 0 0 0.3em;
    color: white;
  }

  .block--dark .block__heading {
    color: white;
  }

  .block--skewed-left {
    padding-bottom: calc(var(--padding-vertical) + 2rem);
    clip-path: polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%);

    @media screen and (min-width: 768px) {
      padding-bottom: calc(var(--padding-vertical) + 7rem);
      clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
    }

    @media screen and (min-width: 992px) {
      padding-bottom: calc(var(--padding-vertical) + 10rem);
      clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%);
    }

  }
  
  .block--skewed-right {
    padding-bottom: calc(var(--padding-vertical) + 7rem);
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 99%);

    @media screen and (min-width: 768px) {
      padding-bottom: calc(var(--padding-vertical) + 10rem);
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 97%);
    }
    @media screen and (min-width: 992px) {
      padding-bottom: calc(var(--padding-vertical) + 10rem);
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 95%);
    }
    
  }
  
  .container {
    max-width: 1140px;
    margin: 0 auto;
  }

  .white {
    filter: brightness(0) invert(1) drop-shadow(0px 0px 3px #FFFFFF);
  }
`;

export default GlobalStyle;
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import computer from "../../images/computer.svg";
import resume from "../../assets/resume.pdf"

const StyledHero = styled.section.attrs({
    className: 'block block--dark block--skewed-left'
})`
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);

  img {
    width: 100%;
    display: none;
    margin-top: 12rem;
    filter: brightness(0) invert(1) drop-shadow(0px 0px 3px #FFFFFF);
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin: 2rem 0 5rem;
  }

  header {
    text-align: left;
    margin-bottom: 4rem;
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
    padding-top: 0;

    p {
      font-size: 2rem;
    }

    header {
      text-align: left;
      align-self: center;
    }

    img {
      display: inline;
    }
  }

`;

const StyledHeroGrid = styled.div.attrs({
    className: 'container'
})`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const StyledButton = styled.a`
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid white;
  box-shadow: #FFFFFF 0 0 0.15em;
  color: white;
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1.5rem 3rem;
  margin: 1rem auto;
  text-align: center;
  text-shadow: #FFFFFF 0 0 0.15em;
  text-transform: uppercase;
  transition: background-color 0.3s;
  white-space: nowrap;


  &:hover {
    background-color: white;
    color: var(--color-primary);
  }

  @media screen and (min-width: 500px) {
    display: inline-block;
    width: 200px;
    margin-right: 1rem;
  }
`;

const StyledTypeWriter = styled.div`

  @keyframes typing {
    0% {
      content: ">";
    }
    2.63% {
      content: "> ";
    }
    5.26% {
      content: "> H";
    }
    7.89% {
      content: "> He";
    }
    10.53% {
      content: "> Hel";
    }
    13.16% {
      content: "> Hell";
    }
    15.79% {
      content: "> Hello";
    }
    18.42% {
      content: "> Hello ";
    }
    21.05% {
      content: "> Hello w";
    }
    23.68% {
      content: "> Hello wo";
    }
    26.32% {
      content: "> Hello wor";
    }
    28.95% {
      content: "> Hello worl";
    }
    31.58% {
      content: "> Hello world";
    }
    39.47% {
      content: "> Hello world\\A ";
      white-space: pre-wrap;
    }
    42.11% {
      content: "> Hello world \\A >";
      white-space: pre-wrap;
    }
    44.74% {
      content: "> Hello world \\A > ";
      white-space: pre-wrap;
    }
    47.37% {
      content: "> Hello world \\A > I";
      white-space: pre-wrap;
    }
    50% {
      content: "> Hello world \\A > I'";
      white-space: pre-wrap;
    }
    52.63% {
      content: "> Hello world \\A > I'm";
      white-space: pre-wrap;
    }
    55.26% {
      content: "> Hello world \\A > I'm ";
      white-space: pre-wrap;
    }
    57.89% {
      content: "> Hello world \\A > I'm W";
      white-space: pre-wrap;
    }
    60.53% {
      content: "> Hello world \\A > I'm Wi";
      white-space: pre-wrap;
    }
    63.16% {
      content: "> Hello world \\A > I'm Wil";
      white-space: pre-wrap;
    }
    65.79% {
      content: "> Hello world \\A > I'm Will";
      white-space: pre-wrap;
    }
    68.42% {
      content: "> Hello world \\A > I'm Willi";
      white-space: pre-wrap;
    }
    71.05% {
      content: "> Hello world \\A > I'm Willia";
      white-space: pre-wrap;
    }
    73.68% {
      content: "> Hello world \\A > I'm William";
      white-space: pre-wrap;
    }
    76.32% {
      content: "> Hello world \\A > I'm William ";
      white-space: pre-wrap;
    }
    84.21% {
      content: "> Hello world \\A > I'm William D";
      white-space: pre-wrap;
    }
    86.84% {
      content: "> Hello world \\A > I'm William Dh";
      white-space: pre-wrap;
    }
    89.47% {
      content: "> Hello world \\A > I'm William Dhe";
      white-space: pre-wrap;
    }
    92.11% {
      content: "> Hello world \\A > I'm William Dhen";
      white-space: pre-wrap;
    }
    94.74% {
      content: "> Hello world \\A > I'm William Dheni";
      white-space: pre-wrap;
    }
    97.37% {
      content: "> Hello world \\A > I'm William Dhenin";
      white-space: pre-wrap;
    }
    100% {
      content: "> Hello world \\A > I'm William Dhenin ";
      white-space: pre-wrap;
    }
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }


  color: var(--color-tertiary);
  text-shadow: var(--color-tertiary) 0 0 0.3rem;

  &:before {
    animation: typing 5s;
    color: white;
    content: "> Hello world \\A > I'm ";
    text-shadow: white 0 0 0.3rem;
    white-space: pre-wrap;
  }

  &:after {
    animation: blink 0.65s linear infinite;
    border-right: 1px solid white;
    color: white;
    content: "";
    text-shadow: white 0 0 0.3rem;
  }
`;

const Hero = () => {
    const [name, setName] = useState('');

    // Hack to highlight William Dhenin green like it was command
    useEffect(() => {
        const typingAnimationEnd = () => {
            setName("William Dhenin\u00A0");
        };

        const typingAnimationDuration = 5000;
        const typingAnimationTimeout = setTimeout(typingAnimationEnd, typingAnimationDuration);
        return () => clearTimeout(typingAnimationTimeout);
    }, []);

    return (
        <StyledHero>
            <StyledHeroGrid>
                <header>
                    <h2 className="block__heading">
                        <StyledTypeWriter>{name}</StyledTypeWriter>
                    </h2>
                    <p>I am a software engineer mainly backend oriented.
                        Currently, I am focused on building great payment solutions at Lyra Network.</p>
                    <StyledButton href={resume} target="_blank">Download CV</StyledButton>
                    <StyledButton href="#contact">Contact Me</StyledButton>
                </header>
                <img className="hero__image" src={computer} alt=""/>
            </StyledHeroGrid>
        </StyledHero>
    );
};

export default Hero;
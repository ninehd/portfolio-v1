import React from 'react';
import styled from 'styled-components';
import payment from "../../images/payment.png";
import foot from "../../images/club.png";
import lamp from "../../images/lamp.png";


const TextPicture = styled.div`
  display: flex;

  img {
    display: none;
    max-height: 200px;
    align-self: center;
    color: white;
    filter: invert(13%) sepia(24%) saturate(534%) hue-rotate(193deg) brightness(94%) contrast(91%);
    justify-self: center;
    margin: 2rem 4rem;
  }

  .lamp {
    max-height: 150px;
  }

  p {
    font-size: 1.9rem;
    width: 100%;
    margin: 1rem 1rem;
  }

  @media screen and (min-width: 768px) {
    img {
      display: inline;
    }

    p {
      padding-top: 2rem;
      width: 70%;
    }
  }
`;


const About = () => {
    return (
        <div id="about" className="block">
            <div className="container">
                <header>
                    <h3 className="block__heading">{'> '}<span className="cmd">echo</span>{' ${about_me}'}</h3>
                </header>
                <TextPicture>
                    <img className="lamp" src={lamp} alt=""/>
                    <p>Hello I'm William Dhenin, a software engineer based in Toulouse, France.
                        Ever since my early years, I've been fascinated by computers, and my enthusiasm for technology
                        has only grown over time.
                        I thrive on challenges, which is why I'm always eager to explore new technologies.
                        Building creative solutions is my passion, and although I primarily focus on Back-End
                        development,
                        I consider myself a Full-Stack developer.</p>
                </TextPicture>
                <TextPicture>
                    <p>I currently work at Lyra Network, and I must say, it's an amazing place to be.
                        My primary focus is on developing innovative payment methods, while also ensuring the smooth
                        functioning of existing ones.
                        As an autonomous individual with a keen eye for detail, I am confident in my ability to stay
                        well-organized.</p>
                    <img src={payment} alt=""/>
                </TextPicture>
                <TextPicture>
                    <img src={foot} alt=""/>
                    <p>I'm a big fan of football, with a strong allegiance to AJ Auxerre and, of course, Toulouse FC.
                        (And yes, we definitely don't call it soccer!)
                        Additionally, I have a little passion for chess. I thoroughly enjoy both playing the game and
                        watching top players in action.</p>
                </TextPicture>
            </div>
        </div>
    );
};

export default About;
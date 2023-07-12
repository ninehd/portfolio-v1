import React, {useEffect, useRef} from 'react';
import styled, {keyframes} from 'styled-components';
import java from '../../images/skills/java.png';
import sql from '../../images/skills/sql.png';
import c from '../../images/skills/c.png';
import html from '../../images/skills/html.png';
import css from '../../images/skills/css.png';
import javascript from '../../images/skills/javascript.png';
import docker from '../../images/skills/docker.png';
import jenkins from '../../images/skills/jenkins.png';

const StyledSkillsSection = styled.section.attrs({
    id: 'skill',
    className: 'block'
})``;


const StyledSkillItem = styled.div`

  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto 1rem;
  width: 90%;

  img {
    height: 48px;
    padding: 0.5rem;

    @media screen and (min-width: 450px) {
      height: 64px;
    }

    @media screen and (min-width: 768px) {
      height: 96px;
      padding: 1rem;
    }
  }

`;

const progressAnimation = keyframes`
  from {
    width: 0;
  }
`;

const StyledProgressBar = styled.div`
  padding: 1rem;
  width: 100%;

  h4 {
    margin: 1rem;
  }

  div {
    background-color: #817f7f; /* Grey background */
    height: 10px;
    width: 100%; /* Full width */
  }

  .percentage {
    display: block;
    height: 100%;
    animation: ${progressAnimation} 2s ease-in-out forwards;
  }

  .java {
    background-color: #2bf5f5;
    width: 85%;
  }

  .net {
    background-color: #d51e80;
    width: 80%;
  }

  .sql {
    background-color: #e5d627;
    width: 80%;
  }

  .html {
    background-color: #0f7bc7;
    width: 90%;
  }

  .css {
    background-color: #e14124;
    width: 70%;
  }

  .js {
    background-color: #f3952b;
    width: 80%;
  }

  .docker {
    background-color: #71d22f;
    width: 65%;
  }

  .jenkins {
    background-color: #ffffff;
    width: 60%;
  }
`;

const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const skillsSection = skillsRef.current;
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4 // Trigger animation when 50% of the section is visible
        };

        const handleIntersection: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progressBarSpans = entry.target.querySelectorAll('span');
                    progressBarSpans.forEach((span) => {
                        span.classList.add('percentage');
                    });
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (skillsSection) {
            observer.observe(skillsSection);
        }

        return () => {
            if (skillsSection) {
                observer.unobserve(skillsSection);
            }
        };
    }, []);
    return (
        <StyledSkillsSection ref={skillsRef}>
            <div className="container">
                <header>
                    <h3 className="block__heading">{'> '}<span className="cmd">ls</span>{' -a skills'}</h3>
                </header>
                <div>
                    <StyledSkillItem>
                        <img src={java} alt=""/>
                        <StyledProgressBar>
                            <header><h4>Java</h4></header>
                            <div className="progress-bar">
                                <span className="java"></span>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={c} alt=""/>
                        <StyledProgressBar>
                            <header><h4>C#</h4></header>
                            <div>
                                <span className="net"></span>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={sql} alt=""/>
                        <StyledProgressBar>
                            <header><h4>SQL</h4></header>
                            <div>
                                <span className="sql"></span>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={html} alt=""/>
                        <StyledProgressBar>
                            <header><h4>HTML</h4></header>
                            <div>
                                <span className="html"></span>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={css} alt=""/>
                        <StyledProgressBar>
                            <header><h4>CSS</h4></header>
                            <div>
                                <span className="css"></span>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={javascript} alt=""/>
                        <StyledProgressBar>
                            <header><h4>JavaScript</h4></header>
                            <div>
                                <span className="js"></span>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={docker} alt=""/>
                        <StyledProgressBar>
                            <header><h4>Docker</h4></header>
                            <div>
                                <span className="docker"></span>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={jenkins} alt=""/>
                        <StyledProgressBar>
                            <header><h4>Jenkins</h4></header>
                            <div>
                                <span className="jenkins"></span>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                </div>
            </div>
        </StyledSkillsSection>
    );
};

export default Skills;

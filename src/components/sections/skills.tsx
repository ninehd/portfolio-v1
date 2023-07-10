import React from 'react';
import styled from 'styled-components';
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

  .java {
    background-color: #2bf5f5;
    height: 10px;
    width: 85%;
  }

  .net {
    background-color: #d51e80;
    height: 10px;
    width: 70%;
  }

  .sql {
    background-color: #e5d627;
    height: 10px;
    width: 80%;
  }

  .html {
    background-color: #0f7bc7;
    height: 10px;
    width: 90%;
  }

  .css {
    background-color: #e14124;
    height: 10px;
    width: 70%;
  }

  .js {
    background-color: #f3952b;
    height: 10px;
    width: 80%;
  }

  .docker {
    background-color: #71d22f;
    height: 10px;
    width: 65%;
  }

  .jenkins {
    background-color: #ffffff;
    height: 10px;
    width: 60%;
  }
`;

const Skills = () => {

    return (
        <StyledSkillsSection>
            <div className="container">
                <header>
                    <h3 className="block__heading">{'> ls -a skills'}</h3>
                </header>
                <div>
                    <StyledSkillItem>
                        <img src={java} alt=""/>
                        <StyledProgressBar>
                            <header><h4>Java</h4></header>
                            <div className="progress-bar">
                                <div className="java"></div>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={c} alt=""/>
                        <StyledProgressBar>
                            <header><h4>C#</h4></header>
                            <div>
                                <div className="net"></div>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={sql} alt=""/>
                        <StyledProgressBar>
                            <header><h4>SQL</h4></header>
                            <div>
                                <div className="sql"></div>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={html} alt=""/>
                        <StyledProgressBar>
                            <header><h4>HTML</h4></header>
                            <div>
                                <div className="html"></div>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={css} alt=""/>
                        <StyledProgressBar>
                            <header><h4>CSS</h4></header>
                            <div>
                                <div className="css"></div>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={javascript} alt=""/>
                        <StyledProgressBar>
                            <header><h4>JavaScript</h4></header>
                            <div>
                                <div className="js"></div>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={docker} alt=""/>
                        <StyledProgressBar>
                            <header><h4>Docker</h4></header>
                            <div>
                                <div className="docker"></div>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                    <StyledSkillItem>
                        <img src={jenkins} alt=""/>
                        <StyledProgressBar>
                            <header><h4>Jenkins</h4></header>
                            <div>
                                <div className="jenkins"></div>
                            </div>
                        </StyledProgressBar>
                    </StyledSkillItem>
                </div>
            </div>
        </StyledSkillsSection>
    );
};

export default Skills;

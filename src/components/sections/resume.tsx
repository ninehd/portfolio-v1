import React from 'react';
import styled from 'styled-components';
import lyra from "../../images/resume/lyra.png";
import capgemini from "../../images/resume/capgemini.png";
import sopra from "../../images/resume/sopra.png";
import drivernet from "../../images/resume/drivernet.png";
import n7 from "../../images/resume/n7.png";

const StyledResume = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledCompany = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  h4 {
    text-shadow: rgb(255, 255, 255) 0 0 0.1em;;
  }
`;

const StyledCard = styled.div`
  border-radius: 7px;
  border: solid white 2px;
  box-shadow: 0 0 0.3rem 0.2rem white;
  margin: 1.5rem 1rem;
  width: 90%;

  header {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.99);
    border-radius: 4px 4px 0 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 2rem 1rem;

    a {
      color: var(--color-primary);
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      padding: 0 2rem 0;
    }
  }

  .title {
    display: inline-block;
    margin: 0;
  }

  .body {
    color: white;
    font-size: 1.5rem;
    padding: 0 2rem;
  }

  .tools {
    font-size: 1.5rem;
    font-style: italic;
    margin: 0;
  }

  .footer {
    color: white;
    font-size: 1.2rem;
    font-weight: normal;
    padding: 0.5rem 2rem;
    text-shadow: #FFFFFF 0 0 0.1em;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .logo {
    height: 64px;
    padding: 10px;
    border-radius: 20%;
  }

  .solid {
    border-top: 1px solid #fff;
    display: inline-block;
    margin-bottom: 0;
    margin-left: 2rem;
    opacity: 30%;
    width: 40%;
  }

  ul {
    list-style: none;
    padding: 0;

    li:before {
      content: '> '
    }
  }
`;

const StyledBadge = styled.div`
  background: var(--color-primary);
  border-radius: 20px;
  color: white;
  font-size: 1.4rem;
  padding: 0.5rem 2rem;
  text-shadow: #FFFFFF 0 0 0.15em;

  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Resume = () => {

    return (
        <section id="experience" className="block block--dark block--skewed-right">
            <div className="container">
                <header>
                    <h3 className="block__heading">{'> '}<span className="cmd">cat</span>{' experience.txt'}</h3>
                </header>
                <StyledResume>
                    <StyledCard>
                        <header>
                            <StyledCompany>
                                <img className="logo" src={lyra} alt=""/>
                                <h4 className="title"><a href="https://www.lyra.com/fr/" target="_blank">Lyra
                                    Network</a></h4>
                            </StyledCompany>
                            <div>
                                <StyledBadge>
                                    Software Engineer
                                </StyledBadge>
                            </div>
                        </header>
                        <div className="body">
                            <ul>
                                <li>Build new payment means and payment methods</li>
                                <li>Maintenance and support of the existing ones</li>
                            </ul>
                            <p className="tools">Tools: Java, Spring Boot, MariaDB, Docker, Jenkins, Git</p>
                        </div>
                        <hr className="solid"/>
                        <div className="footer">
                            Sept 2021 - Present | Labège, France
                        </div>
                    </StyledCard>
                    <StyledCard>
                        <header>
                            <StyledCompany>
                                <img className="logo" src={sopra} alt=""/>
                                <h4 className="title"><a href="https://www.soprasteria.fr/" target="_blank">Sopra
                                    Steria</a></h4>
                            </StyledCompany>
                            <div>
                                <StyledBadge>
                                    Technical Lead
                                </StyledBadge>
                            </div>
                        </header>
                        <div className="body">
                            <ul>
                                <li>Leading the development of multiple web applications</li>
                                <li>Working with offshore team based in Delhi</li>
                            </ul>
                            <p className="tools">Tools: Java, Sharepoint, Angular, Git</p>
                        </div>
                        <hr className="solid"/>
                        <div className="footer">
                            May 2021 - Aug 2021 | Colomiers, France
                        </div>
                    </StyledCard>
                    <StyledCard>
                        <header>
                            <StyledCompany>
                                <img className="logo" src={capgemini} alt=""/>
                                <h4 className="title"><a href="https://www.capgemini.com/" target="_blank">Capgemini</a>
                                </h4>
                            </StyledCompany>
                            <div>
                                <StyledBadge>
                                    Technical Lead
                                </StyledBadge>
                            </div>
                        </header>
                        <div className="body">
                            <ul>
                                <li>Development and maintenance of the management system for assistance in the diagnosis
                                    and maintenance of the Rafale aircraft engine
                                </li>
                                <li>Adapting the system to the implementation of the application for export including
                                    Egypt
                                </li>
                            </ul>
                            <p className="tools">Tools: C#, .NET, TypeScript, Oracle, Git, Svn</p>
                        </div>
                        <hr className="solid"/>
                        <div className="footer">
                            Jan 2019 - May 2021 | Toulouse, France
                        </div>
                    </StyledCard>
                    <StyledCard>
                        <header>
                            <StyledCompany>
                                <img className="logo" src={capgemini} alt=""/>
                                <h4 className="title"><a href="https://www.capgemini.com/" target="_blank">Capgemini</a>
                                </h4>
                            </StyledCompany>
                            <div>
                                <StyledBadge>
                                    Software Engineer
                                </StyledBadge>
                            </div>
                        </header>
                        <div className="body">
                            <ul>
                                <li>Development & maintenance of a set of .NET applications for Safran AE/ED</li>
                                <li>Drafting of technical documents</li>
                                <li>Delivery management</li>
                            </ul>
                            <p className="tools">Tools: C#, .NET, TypeScript, SQL Server, Git, Svn</p>
                        </div>
                        <hr className="solid"/>
                        <div className="footer">
                            Sep 2016 - Jan 2019 | Toulouse, France
                        </div>
                    </StyledCard>
                    <StyledCard>
                        <header>
                            <StyledCompany>
                                <img className="logo" src={drivernet} alt=""/>
                                <h4 className="title"><a href="https://www.driver-net.com/"
                                                         target="_blank">DriverNet</a></h4>
                            </StyledCompany>
                            <div>
                                <StyledBadge>
                                    Internship
                                </StyledBadge>
                            </div>
                        </header>
                        <div className="body">
                            <ul>
                                <li>Fullstack development of an android application for a delivery service.</li>
                            </ul>
                            <p className="tools">Tools: Java, Google Geofences, MySQL, Git</p>
                        </div>
                        <hr className="solid"/>
                        <div className="footer">
                            Jun 2016 - Aug 2016 | Bradford, UK
                        </div>
                    </StyledCard>
                    <StyledCard>
                        <header>
                            <StyledCompany>
                                <img className="logo" src={n7} alt=""/>
                                <h4 className="title"><a href="https://www.enseeiht.fr/"
                                                         target="_blank">INP-ENSEEIHT</a></h4>
                            </StyledCompany>
                            <div>
                                <StyledBadge>
                                    Master Engineering
                                </StyledBadge>
                            </div>
                        </header>
                        <div className="body">
                            <ul>
                                <li>Master of engineering</li>
                                <li>Majoring in Computer Science and Applied Mathematics</li>
                                <li>Specialization in MuLtimedia</li>
                            </ul>
                        </div>
                        <hr className="solid"/>
                        <div className="footer">
                            Sep 2014 - Sep 2017 | Toulouse, France
                        </div>
                    </StyledCard>
                </StyledResume>
            </div>
        </section>
    );
};

export default Resume;
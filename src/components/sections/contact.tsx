import React from 'react';
import styled from 'styled-components';
import mail from "../../images/contact/mail.png";
import github from "../../images/contact/github.png";
import linkedin from "../../images/contact/linkedin.png";
import twitter from "../../images/contact/twitter.png";

const StyledContact = styled.section.attrs({
    id: 'contact',
    className: 'block block--dark'
})`

  padding-top: 2rem;

  header {
    margin-bottom: 2rem;
  }

  .container {
    > div {
      text-align: center;
    }
  }


  @media screen and (min-width: 768px) {
    p {
      font-size: 1.8rem;
    }
  }

`;

const StyledIconContact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 5rem;
  margin: 2rem auto 2rem;
  align-items: center;
  text-shadow: #FFFFFF 0 0 0.5em;

  img {
    width: 32px;
    filter: brightness(0) invert(1) drop-shadow(0px 0px 3px #FFFFFF);
  }

  @media screen and (min-width: 390px) {
    img {
      width: 32px;
    }
  }

  @media screen and (min-width: 600px) {
    margin: 4rem auto 2rem;
    img {
      width: 64px;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 6rem auto 3rem;
    img {
      width: 96px;
    }
  }
  
  
`;

const Contact: React.FC = () => {

    return (
        <StyledContact>
            <div className="container">
                <header>
                    <h3 className="block__heading">{'> find .contacts'}</h3>
                </header>
                <div>
                    <p>Althought, I am not looking for any new opportunities, you can still contact me for any
                        questions.</p>
                    <StyledIconContact>
                        <div>
                            <a href="mailto:williamdhenin@gmail.com"><img src={mail} alt=""/></a>
                        </div>
                        <div>
                            <a href="https://github.com/ninehd" target="_blank"><img src={github} alt=""/></a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/williamdhenin/" target="_blank"><img src={linkedin}
                                                                                                      alt=""/></a>
                        </div>
                        <div>
                            <a href="https://twitter.com/ninehd09" target="_blank"><img src={twitter} alt=""/></a>
                        </div>
                    </StyledIconContact>
                </div>
            </div>
        </StyledContact>
    );
};

export default Contact;
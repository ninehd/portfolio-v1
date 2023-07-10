import React, {useState} from 'react';
import styled from 'styled-components';
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";

const StyledNav = styled.nav`
  background: var(--color-primary);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
  text-shadow: #FFFFFF 0 0 0.5em;

  > a {
    transform: translateY(5px);
    width: 150px;
  }

  .logo {
    padding: 5px;
    height: 40px;
  }
`;


const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  transition: box-shadow 0.15s;
  opacity: 1;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledUl = styled.ul<{ isExpanded: boolean }>`
  list-style: none;
  margin: 0;
  max-height: ${props => (props.isExpanded ? '100%' : '0')};
  opacity: ${props => (props.isExpanded ? 1 : 0)};
  overflow: hidden;
  padding-left: 0;
  transition: all 0.3s;
  width: 100%;


  @media screen and (min-width: 768px) {
    width: auto;
    display: flex;
    font-size: 1.6rem;
    max-height: 100%;
    opacity: 1;
  }
`;

const StyledLi = styled.li`
  padding: 0.5rem 2rem;
  border-bottom: 1px solid grey;

  &:last-of-type {
    border-bottom: none;
  }

  > a {
    color: #fff;
    transition: color 0.3s;

    &:hover {
      color: #d2d0db;
    }
  }

  @media screen and (min-width: 768px) {
    border: 0;
  }
`;

const Header: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <StyledNav onClick={handleToggle}>
            <a aria-label="WD" href="/">
                <img className="logo white" src={logo} alt=""/>
            </a>
            <StyledImg className="white" src={menu} alt=""/>
            <StyledUl className="list" isExpanded={isExpanded}>
                <StyledLi>
                    <a href="#about">01. About</a>
                </StyledLi>
                <StyledLi>
                    <a href="#experience">02. Experiences</a>
                </StyledLi>
                <StyledLi>
                    <a href="#skill">03. Skills</a>
                </StyledLi>
                <StyledLi>
                    <a href="#contact">04. Contact</a>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
};

export default Header;

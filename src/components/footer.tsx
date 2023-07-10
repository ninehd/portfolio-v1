import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer.attrs({
    className: 'block--dark'
})`
  text-align: center;
  padding-bottom: 1rem;
  
  p{
    margin: 0;
    font-size: 1.5rem;
  }
`;

const Footer: React.FC = () => {

    return (
        <StyledFooter>
            <p>Develop & Build by William Dhenin © Copyright 2023</p>
        </StyledFooter>
    );
};

export default Footer;
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.navBg}; 
  color: ${({ theme }) => theme.navText};
  text-align: center;
  padding: 1.5rem 2rem; 
  margin-top: 3.2rem;
  position: relative;
  width: 100%;
  bottom: 0;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>© {new Date().getFullYear()} Richard Jackson</FooterText>
  </FooterContainer>
);

export default Footer;

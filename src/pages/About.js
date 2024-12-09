import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled.h2`
  color: #ff7f50;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-align: center;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  text-align: justify;
`;

const About = () => (
  <AboutSection>
    <Heading>About Me</Heading>
    <Paragraph>
      Hi, I'm Richard Jackson, a sophomore at Southern Methodist University in Dallas, Texas, pursuing a degree in Finance and Construction Management. My career focus is on utilizing my skills in finance and construction to drive impactful projects and contribute to sustainable development.
    </Paragraph>
    <Paragraph>
      I have a proven history of achievement in public speaking, leadership, mentorship in business, environmental preservation, coaching young athletes, and philanthropic efforts through successful creative initiatives. My proficiency in account management, client development, financial and business development, education, and team leadership equips me to excel in dynamic and challenging environments.
    </Paragraph>
    <Paragraph>
      I am passionate about fostering positive work and learning environments, leveraging critical thinking, effective communication, and social skills to achieve excellence in all endeavors. I look forward to applying my expertise to make meaningful contributions in the fields of finance and construction management.
    </Paragraph>
  </AboutSection>
);

export default About;

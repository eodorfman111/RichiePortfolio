import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 2rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
`;

const ProjectsButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e5533d;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleSeeProjects = () => {
    navigate('/projects');
  };

  return (
    <HomeContainer>
      <TextContainer>
        <Title>Welcome to Richard Jackson's Portfolio</Title>
        <Subtitle>Enthusiastic Sophomore at Southern Methodist University with a passion for Finance and Construction Management.</Subtitle>
        <ProjectsButton onClick={handleSeeProjects}>
          See Projects
        </ProjectsButton>
      </TextContainer>
    </HomeContainer>
  );
};

export default Home;

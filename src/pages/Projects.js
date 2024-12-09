import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled.h2`
  color: #ff7f50;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  flex-grow: 1;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #ff7f50;
  font-weight: bold;
  text-decoration: none;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const projects = [
    {
      name: 'Résumé',
      description: 'Download my updated résumé.',
      link: '/resume.pdf',
    },
    {
      name: 'Clean Our Waterways',
      description: 'Founder of Clean Our Waterways, an initiative focused on environmental preservation and conservation.',
      link: 'https://github.com/richardjackson/clean-our-waterways',
    },
    // Add more projects as needed
  ];

  return (
    <ProjectsSection>
      <Heading>Projects</Heading>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name === 'Résumé' ? 'Download Résumé' : 'View Project'}
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;

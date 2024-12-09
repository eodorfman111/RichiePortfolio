import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
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

const ExperienceItem = styled.div`
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const RoleCompany = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const LocationDuration = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.text}99;
  margin-bottom: 1rem;
`;

const Responsibilities = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const Experience = () => {
  const experiences = [
    {
      role: 'Intern',
      company: 'SeeVee Boats',
      location: 'Coral Gables, FL',
      duration: 'May 2021 – Present',
      responsibilities: [
        'Shadowed head engineer and naval architect.',
        'Observed sales representative to gain business acumen.',
      ],
    },
    {
      role: 'Intern PR/Marketing',
      company: 'The 24-Group',
      location: 'Dallas, TX',
      duration: 'February 2021 – Present',
      responsibilities: [
        'Focused on marketing trends, innovation in advertising, and public relations.',
        'Monitored sales, inventory, and finances.',
        'Managed Instagram, Facebook, and SEO posts.',
        'Contributed to the development and application of sales strategies tailored to clients’ needs.',
      ],
    },
    {
      role: 'Intern',
      company: 'Immigration Law Office',
      location: 'Miami, FL',
      duration: 'May 2018 – August 2018',
      responsibilities: [
        'Shadowed Immigration Lawyers focusing on South Florida immigrants.',
        'Maintained strict schedules and intense focus on tasks.',
        'Ensured professionalism and respect in court settings.',
        'Assisted with case reading and interpretation.',
      ],
    },
    {
      role: 'Environmental Volunteer',
      company: 'Crandon Park/Key Biscayne',
      location: 'Miami, FL',
      duration: 'Summer 2017 – Present',
      responsibilities: [
        'Participated in beach cleanup and preservation activities.',
        'Removed invasive species and re-planted endemic/native plants.',
        'Tested and investigated pollution levels in the Everglades.',
      ],
    },
  ];

  return (
    <ExperienceSection>
      <Heading>Experience</Heading>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index}>
          <RoleCompany>
            {exp.role} at {exp.company}
          </RoleCompany>
          <LocationDuration>
            {exp.location} | {exp.duration}
          </LocationDuration>
          <Responsibilities>
            {exp.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Responsibilities>
        </ExperienceItem>
      ))}
    </ExperienceSection>
  );
};

export default Experience;

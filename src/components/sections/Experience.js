import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  const experiences = [
    {
      role: 'IT Quiz Bee Participant',
      company: 'RAITE (Regional Assembly on Information Technology Education)',
      period: '2023',
      description: 'Participated in the IT Quiz Bee competition, demonstrating knowledge in various Information Technology concepts and current trends.'
    },
    {
      role: 'CTF Competition Participant',
      company: '3rd Regional Cybersecurity Conference',
      period: '2023',
      description: 'Competed in Capture The Flag (CTF) competition at Holy Angel University, demonstrating practical cybersecurity skills through various challenges including cryptography, web exploitation, and network security.'
    }
  ];

  return (
    <ExperienceContainer>
      <SectionTitle>Academic Competitions Experiences</SectionTitle>
      {experiences.map((exp) => (
        <ExperienceCard key={exp.role}>
          <ExperienceInfo>
            <Role>{exp.role}</Role>
            <Company>{exp.company}</Company>
            <Period>{exp.period}</Period>
            <Description>{exp.description}</Description>
          </ExperienceInfo>
        </ExperienceCard>
      ))}
    </ExperienceContainer>
  );
};

// Add this new styled component
const SectionTitle = styled.h2`
  color: #1DB954;
  font-size: 24px;
  margin-bottom: 24px;
`;

const ExperienceContainer = styled.div`
  padding: 24px;
`;

const ExperienceCard = styled.div`
  background: #282828;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
`;

const ExperienceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Role = styled.h3`
  color: #1DB954;
  font-size: 20px;
`;

const Company = styled.h4`
  color: #FFFFFF;
  font-size: 18px;
`;

const Period = styled.span`
  color: #B3B3B3;
  font-size: 14px;
`;

const Description = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1.6;
`;

export default Experience;
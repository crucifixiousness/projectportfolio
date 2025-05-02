import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  const professionalObjective = {
    title: "Professional Objective",
    description: "Passionate Full Stack Developer seeking to leverage technical expertise in creating innovative web solutions. Committed to delivering high-quality code and exceptional user experiences.",
  };

  const technologies = [
    {
      name: 'React.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      description: 'Frontend Development & UI Components'
    },
    {
      name: 'Node.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      description: 'Backend Development & Server-side Logic'
    },
    {
      name: 'HTML5',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      description: 'Web Structure & Semantics'
    },
    {
      name: 'CSS3',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      description: 'Styling & Responsive Design'
    },
    {
      name: 'JavaScript',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      description: 'Dynamic Web Applications'
    },
    {
      name: 'C#',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
      description: '.NET Development & Desktop Apps'
    },
    {
      name: 'Python',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      description: 'Scripting & Data Analysis'
    },
    {
      name: 'Java',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      description: 'Enterprise Applications'
    },
    {
      name: 'MySQL',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
      description: 'Relational Database Management'
    },
    {
      name: 'PostgreSQL',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
      description: 'Advanced Database Solutions'
    }
  ];

  return (
    <SkillsContainer>
      <ObjectiveCard>
        <ObjectiveTitle>{professionalObjective.title}</ObjectiveTitle>
        <ObjectiveDescription>{professionalObjective.description}</ObjectiveDescription>
      </ObjectiveCard>
      
      <SectionTitle>Technical Skills</SectionTitle>
      <TechStackContainer>
        {technologies.map((tech) => (
          <TechCard key={tech.name}>
            <IconContainer>
              <TechIcon src={tech.icon} alt={tech.name} />
            </IconContainer>
            <TechInfo>
              <TechName>{tech.name}</TechName>
              <TechDescription>{tech.description}</TechDescription>
            </TechInfo>
          </TechCard>
        ))}
      </TechStackContainer>
    </SkillsContainer>
  );
};

// Add these new styled components
const SkillsContainer = styled.div`
  padding: 20px;
`;

const ObjectiveCard = styled.div`
  background: #282828;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
`;

const ObjectiveTitle = styled.h2`
  color: #1DB954;
  font-size: 24px;
  margin-bottom: 16px;
`;

const ObjectiveDescription = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  color: #FFFFFF;
  font-size: 20px;
  margin-bottom: 20px;
`;

const TechStackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 20px 0;
`;

const TechCard = styled.div`
  background: #181818;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #282828;
  }
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  background: #282828;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TechIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TechName = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const TechDescription = styled.span`
  color: #b3b3b3;
  font-size: 14px;
  margin-top: 4px;
`;

export default Skills;
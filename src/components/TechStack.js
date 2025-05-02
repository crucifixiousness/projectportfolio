import React from 'react';
import styled from 'styled-components';

const TechStack = () => {
  const technologies = [
    {
      name: 'React.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      description: 'Frontend Development'
    },
    {
      name: 'Node.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      color: '#339933'
    },
    {
      name: 'HTML5',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      color: '#E34F26'
    },
    {
      name: 'CSS3',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      color: '#1572B6'
    },
    {
      name: 'JavaScript',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      color: '#F7DF1E'
    },
    {
      name: 'C#',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
      color: '#239120'
    },
    {
      name: 'Python',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      color: '#3776AB'
    },
    {
      name: 'Java',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      color: '#007396'
    },
    {
      name: 'MySQL',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
      color: '#4479A1'
    },
    {
      name: 'PostgreSQL',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
      color: '#336791'
    }
  ];

  return (
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
  );
};

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

export default TechStack;
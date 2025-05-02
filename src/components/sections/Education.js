import React from 'react';
import styled from 'styled-components';

const Education = () => {
  const education = [
    {
      degree: 'Your Degree',
      school: 'University Name',
      year: '2019 - 2023',
      details: 'Relevant coursework and achievements'
    }
  ];

  return (
    <EducationContainer>
      {education.map((edu) => (
        <EducationCard key={edu.degree}>
          <EducationInfo>
            <Degree>{edu.degree}</Degree>
            <School>{edu.school}</School>
            <Year>{edu.year}</Year>
            <Details>{edu.details}</Details>
          </EducationInfo>
        </EducationCard>
      ))}
    </EducationContainer>
  );
};

const EducationContainer = styled.div`
  padding: 24px;
`;

const EducationCard = styled.div`
  background: #282828;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
`;

const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Degree = styled.h3`
  color: #1DB954;
  font-size: 20px;
`;

const School = styled.h4`
  color: #FFFFFF;
  font-size: 18px;
`;

const Year = styled.span`
  color: #B3B3B3;
  font-size: 14px;
`;

const Details = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1.6;
`;

export default Education;
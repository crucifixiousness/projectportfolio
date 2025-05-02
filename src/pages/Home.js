import React from 'react';
import styled from 'styled-components';

const Home = () => {
  const highlights = [
    {
      title: "Full Stack Developer",
      description: "Specializing in React.js and Node.js development"
    },
    {
      title: "Recent Projects",
      description: "Check out my latest work and contributions"
    },
    {
      title: "Technical Skills",
      description: "Proficient in modern web technologies and frameworks"
    }
  ];

  return (
    <HomeContainer>
      <WelcomeSection>
        <Title>Welcome to My Portfolio</Title>
        <Subtitle>Turning Ideas into Reality</Subtitle>
      </WelcomeSection>

      <HighlightsGrid>
        {highlights.map((highlight, index) => (
          <HighlightCard key={index}>
            <HighlightTitle>{highlight.title}</HighlightTitle>
            <HighlightDescription>{highlight.description}</HighlightDescription>
          </HighlightCard>
        ))}
      </HighlightsGrid>

      <FeaturedSection>
        <SectionTitle>Projects</SectionTitle>
        <FeaturedContent>
          <ProjectCard>
            <ProjectTitle>Student Portal - OLSHCO Guimba Inc.</ProjectTitle>
            <ProjectDescription>
              A comprehensive student portal system developed for Our Lady of the Sacred Heart College. 
              Features include course management, grade viewing, online enrollment, and academic progress tracking. 
              Built with modern web technologies to enhance student and faculty experience.
            </ProjectDescription>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Barangay Resident Management System - Barangay Narvacan II</ProjectTitle>
            <ProjectDescription>
              A digital solution for Barangay Narvacan II that streamlines resident data management. 
              The system enables efficient handling of resident information, document requests, and 
              certificate generation. Improves administrative workflows and resident services delivery.
            </ProjectDescription>
          </ProjectCard>
        </FeaturedContent>
      </FeaturedSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 24px;
`;

const WelcomeSection = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #1DB954;
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
`;

const HighlightCard = styled.div`
  background: #282828;
  padding: 24px;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    background: #383838;
  }
`;

const HighlightTitle = styled.h3`
  color: #1DB954;
  font-size: 20px;
  margin-bottom: 12px;
`;

const HighlightDescription = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
`;

const FeaturedSection = styled.div`
  background: #282828;
  padding: 24px;
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  color: #1DB954;
  font-size: 24px;
  margin-bottom: 24px;
`;

const FeaturedContent = styled.div`
  display: grid;
  gap: 24px;
`;

const ProjectCard = styled.div`
  background: #383838;
  padding: 24px;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 20px;
  margin-bottom: 12px;
`;

const ProjectDescription = styled.p`
  color: #b3b3b3;
  font-size: 16px;
  line-height: 1.6;
`;

export default Home;
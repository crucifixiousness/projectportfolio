import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <ProfileHeader>
        <ProfileImage src="/images/prof.jpg" alt="Profile" />
        <ProfileInfo>
          <ProfileLabel>Profile</ProfileLabel>
          <ProfileName>Jhun Von Jave</ProfileName>
          <ProfileStats>
            <StatItem>2 Projects</StatItem>
            <StatDot>•</StatDot>
            <StatItem>3 Certifications</StatItem>
            <StatDot>•</StatDot>
            <StatItem>3 Years Experience</StatItem>
          </ProfileStats>
        </ProfileInfo>
      </ProfileHeader>

      <ProfileSection>
        <ProfileTitle>About Me</ProfileTitle>
        <ProfileDescription>
          Jhun Von Jave M. Mamaid, a 3rd year IT Student Full Stack Dev Programmer, currently enrolled in Our Lady of the Sacred Heart College of Guimba INC.
        </ProfileDescription>
      </ProfileSection>

      <CertificationsSection>
        <CertificationsTitle>Certifications</CertificationsTitle>
        <CertificationsGrid>
          <CertificationCard>
            <CertificationName>The Linux Foundation</CertificationName>
            <CertificationDetails>Cybersecurity Essentials (LFC108)</CertificationDetails>
            <CertificationDate>2024</CertificationDate>
          </CertificationCard>
          <CertificationCard>
            <CertificationName>Python Essentials 2</CertificationName>
            <CertificationDetails>Advanced Python Programming - Cisco Networking Academy</CertificationDetails>
            <CertificationDate>2024</CertificationDate>
          </CertificationCard>
          <CertificationCard>
            <CertificationName>Full Stack Development</CertificationName>
            <CertificationDetails>Modern Web Development with React.js and Node.js</CertificationDetails>
            <CertificationDate>2024</CertificationDate>
          </CertificationCard>
        </CertificationsGrid>
      </CertificationsSection>

      <ContactSection>
        <ContactTitle>Contact Information</ContactTitle>
        <ContactGrid>
          <ContactItem>
            <ContactLabel>Email</ContactLabel>
            <ContactValue>mamaidjhunvonjave@gmail.com</ContactValue>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Instagram</ContactLabel>
            <ContactValue>https://www.instagram.com/thinkaboutvon/</ContactValue>
          </ContactItem>
          <ContactItem>
            <ContactLabel>GitHub</ContactLabel>
            <ContactValue>github.com/crucifixiousness</ContactValue>
          </ContactItem>
        </ContactGrid>
      </ContactSection>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 24px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
  }
`;

const ProfileImage = styled.img`
  width: 232px;
  height: 232px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 60px rgba(0,0,0,.5);

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ProfileName = styled.h1`
  color: #fff;
  font-size: 96px;
  font-weight: 700;
  margin: 8px 0;

  @media (max-width: 1024px) {
    font-size: 72px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const ProfileStats = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #b3b3b3;
  font-size: 14px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const StatDot = styled.span`
  color: #b3b3b3;
  margin: 0 4px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const ProfileSection = styled.div`
  background: #282828;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
`;

const ProfileTitle = styled.h2`
  color: #1DB954;
  font-size: 24px;
  margin-bottom: 16px;
`;

const ProfileDescription = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1.6;
`;

const ContactSection = styled.div`
  background: #282828;
  border-radius: 8px;
  padding: 24px;
`;

const ContactTitle = styled.h2`
  color: #1DB954;
  font-size: 24px;
  margin-bottom: 16px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContactLabel = styled.span`
  color: #b3b3b3;
  font-size: 14px;
`;

const ContactValue = styled.span`
  color: #fff;
  font-size: 16px;
`;

const CertificationsSection = styled.div`
  background: #282828;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
`;

const CertificationsTitle = styled.h2`
  color: #1DB954;
  font-size: 24px;
  margin-bottom: 16px;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

const CertificationCard = styled.div`
  background: #383838;
  padding: 16px;
  border-radius: 4px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: #404040;
  }
`;

const CertificationName = styled.h3`
  color: #fff;
  font-size: 18px;
  margin-bottom: 8px;
`;

const CertificationDetails = styled.p`
  color: #1DB954;
  font-size: 14px;
  margin-bottom: 8px;
`;

const CertificationDate = styled.span`
  color: #b3b3b3;
  font-size: 12px;
`;
const ProfileLabel = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const StatItem = styled.span`
  color: #b3b3b3;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
export default About;
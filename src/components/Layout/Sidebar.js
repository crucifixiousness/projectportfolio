import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>Von Mamaid</Logo>
      <NavMenu>
        <NavItem to="/">
          <HomeIcon /> Home
        </NavItem>
        <NavItem to="/about">
          <PersonIcon /> About Me
        </NavItem>
        <NavItem to="/skills">
          <CodeIcon /> Skills
        </NavItem>
        <NavItem to="/experience">
          <WorkIcon /> Experience
        </NavItem>
      </NavMenu>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  background-color: #000000;
  width: 240px;
  height: 100vh;
  padding: 24px;
  position: fixed;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 12px;
    z-index: 1000;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    overflow-x: auto;
  }
`;

const NavItem = styled(NavLink)`
  color: #B3B3B3;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover, &.active {
    color: #FFFFFF;
    background-color: #282828;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 10px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Logo = styled.h1`
  color: #1DB954;
  font-size: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

export default Sidebar;
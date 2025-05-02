import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Layout/Sidebar';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import About from './components/sections/About';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Sidebar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  margin-left: 240px;
  padding: 24px;
  width: calc(100% - 240px);
  min-height: 100vh;
  background: linear-gradient(to bottom, #1DB954 -50%, #121212 15%);
  color: white;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 16px;
    margin-top: 60px;
  }
`;

export default App;

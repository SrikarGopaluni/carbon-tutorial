import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/repos" element={<RepoPage />} />
          </Routes>
        </Content>
      </>
    );
  }
}

export default App;

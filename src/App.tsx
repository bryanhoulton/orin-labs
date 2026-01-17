import { useEffect } from 'react';

import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ProactiveAgents from './pages/research/ProactiveAgents';
import ProactiveVoiceAgents from './pages/research/ProactiveVoiceAgents';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/research"
          element={
            <Layout>
              <Research />
            </Layout>
          }
        />
        <Route
          path="/research/proactive-agents"
          element={
            <Layout>
              <ProactiveAgents />
            </Layout>
          }
        />
        <Route
          path="/research/conversationality"
          element={
            <Layout>
              <ProactiveVoiceAgents />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <TermsOfService />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;

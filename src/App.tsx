import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Cofounder from "./pages/Cofounder";
import Home from "./pages/Home";
import Research from "./pages/Research";
import ProactiveAgents from "./pages/research/ProactiveAgents";
import ProactiveVoiceAgents from "./pages/research/ProactiveVoiceAgents";

function App() {
  return (
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
        path="/cofounder"
        element={
          <Layout>
            <Cofounder />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;

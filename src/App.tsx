import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import AIResponse from './pages/AIResponse';
import GenerateDraft from './pages/GenerateDraft';
import ConnectHelp from './pages/ConnectHelp';
import AdminDashboard from './pages/AdminDashboard';
import PartnerDashboard from './pages/PartnerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="ai-response" element={<AIResponse />} />
          <Route path="generate-draft" element={<GenerateDraft />} />
          <Route path="connect-help" element={<ConnectHelp />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="partner-dashboard" element={<PartnerDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
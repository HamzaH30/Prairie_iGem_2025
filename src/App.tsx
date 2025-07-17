import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { DesignPage } from './pages/DesignPage'
import { ExperimentsPage } from './pages/ExperimentsPage'
import { ModelingPage } from './pages/ModelingPage'
import { HumanPracticesPage } from './pages/HumanPracticesPage'
import { EntrepreneurshipPage } from './pages/EntrepreneurshipPage'
import { TeamPage } from './pages/TeamPage'
import { NotebookPage } from './pages/NotebookPage'
import { SafetyPage } from './pages/SafetyPage'
import { ReferencesPage } from './pages/ReferencesPage'
export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/experiments" element={<ExperimentsPage />} />
          <Route path="/modeling" element={<ModelingPage />} />
          <Route path="/human-practices" element={<HumanPracticesPage />} />
          <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/notebook" element={<NotebookPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/references" element={<ReferencesPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

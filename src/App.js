import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AthleteForm from './components/AthleteForm';
import EventForm from './components/EventForm';
import ResultsForm from './components/ResultsForm';
import Report from './components/Report';

function App() {
  return (
    <Router>
      <div>
        <h1>Track and Field Management System</h1>
        <Routes>
          <Route path="/add-athlete" element={<AthleteForm />} />
          <Route path="/add-event" element={<EventForm />} />
          <Route path="/add-result" element={<ResultsForm />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

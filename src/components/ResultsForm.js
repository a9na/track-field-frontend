import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ResultsForm() {
  const [athletes, setAthletes] = useState([]);
  const [events, setEvents] = useState([]);
  const [athlete, setAthlete] = useState('');
  const [event, setEvent] = useState('');
  const [performance, setPerformance] = useState('');

  useEffect(() => {
    async function fetchData() {
      const athletesResponse = await axios.get('http://localhost:5000/api/athletes');
      const eventsResponse = await axios.get('http://localhost:5000/api/events');
      setAthletes(athletesResponse.data);
      setEvents(eventsResponse.data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/results', { athlete, event, performance });
    setAthlete('');
    setEvent('');
    setPerformance('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Result</h2>
      <label>
        Athlete:
        <select value={athlete} onChange={(e) => setAthlete(e.target.value)}>
          {athletes.map((athlete) => (
            <option key={athlete._id} value={athlete._id}>{athlete.name}</option>
          ))}
        </select>
      </label>
      <label>
        Event:
        <select value={event} onChange={(e) => setEvent(e.target.value)}>
          {events.map((event) => (
            <option key={event._id} value={event._id}>{event.name}</option>
          ))}
        </select>
      </label>
      <label>
        Performance:
        <input type="number" value={performance} onChange={(e) => setPerformance(e.target.value)} />
      </label>
      <button type="submit">Add Result</button>
    </form>
  );
}

export default ResultsForm;

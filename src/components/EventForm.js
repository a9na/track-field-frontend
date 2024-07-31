import React, { useState } from 'react';
import axios from 'axios';

function EventForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/events', { name, date });
    setName('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Event</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;

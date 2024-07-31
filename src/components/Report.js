import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Report() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resultsResponse = await axios.get('http://localhost:5000/api/results');
      setResults(resultsResponse.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Performance Report</h2>
      <ul>
        {results.map(result => (
          <li key={result._id}>
            {result.athlete.name} - {result.event.name} - {result.performance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Report;

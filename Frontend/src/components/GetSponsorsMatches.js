import React, { useState, useEffect } from 'react';
import { getSponsorMatches } from '../Services/APIService';

const GetSponsorsMatches = () => {
  const [sponsorMatches, setSponsorMatches] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getSponsorMatches(year);
        console.log("API Response:", data);
        setSponsorMatches(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, [year]);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Sponsor Matches for {year}</h2>
      <div className="mb-3">
        <label htmlFor="yearInput" className="form-label">Select Year:</label>
        <input
          id="yearInput"
          type="number"
          className="form-control"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          min="2000"
          max={new Date().getFullYear()}
        />
      </div>

      {loading && <p>Loading matches...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      {!loading && !error && sponsorMatches.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sponsor ID</th>
              <th scope="col">Sponsor Name</th>
              <th scope="col">Number of Matches</th>
            </tr>
          </thead>
          <tbody>
            {sponsorMatches.map((sponsor, index) => (
              <tr key={index}>
                <td>{sponsor.sponsorId}</td>
                <td>{sponsor.sponsorName}</td>
                <td>{sponsor.numberOfMatches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && !error && sponsorMatches.length === 0 && (
        <p>No sponsor matches found for the selected year.</p>
      )}
    </div>
  );
};

export default GetSponsorsMatches;

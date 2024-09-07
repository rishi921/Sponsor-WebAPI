import React, { useState, useEffect } from 'react';
import { getSponsorDetails } from '../Services/APIService';

const GetSponsorsDetails = () => {
  const [sponsorDetails, setSponsorDetails] = useState([]);

  useEffect(() => {
    const fetchSponsorDetails = async () => {
      try {
        const data = await getSponsorDetails();
        setSponsorDetails(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchSponsorDetails();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Sponsor Details</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sponsor ID</th>
            <th scope="col">Sponsor Name</th>
            <th scope="col">Total Payments</th>
            <th scope="col">Number of Payments</th>
            <th scope="col">Latest Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {sponsorDetails.map((sponsor, index) => (
            <tr key={index}>
              <td>{sponsor.sponsorId}</td>
              <td>{sponsor.sponsorName}</td>
              <td>{sponsor.totalPayments}</td>
              <td>{sponsor.numberOfPayments}</td>
              <td>{sponsor.latestPaymentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetSponsorsDetails;

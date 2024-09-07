import axios from 'axios';

// Base URL for the API
const BASE_URL = 'http://localhost:5055/api/Sponsor';

// Add a new payment
export const addPayment = async (payment) => {
    try {
        const response = await axios.post(`${BASE_URL}/Add-Payments`, payment);
        return response.data;
    } catch (error) {
        throw new Error('Error adding payment: ' + error.message);
    }
};

// Get match details
export const getMatchDetails = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/Match-Details`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching match details: ' + error.message);
    }
};

// Get sponsor details
export const getSponsorDetails = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/Sponsor-Details`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching sponsor details: ' + error.message);
    }
};

export const getSponsorMatches = async (year) => {
    try {
        const response = await axios.get(`${BASE_URL}/sponsors-matches`, { params: { year } });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching sponsor matches: ' + error.message);
    }
};

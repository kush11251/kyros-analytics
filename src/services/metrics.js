const axios = require('axios');

async function getMetrics() {
    const response = await axios.get('https://api.example.com/metrics');
    return response.data;
}

module.exports = { getMetrics };
const stripe = require('stripe');
const {log} = require("debug");

const express = require('express');
// Initialize Stripe with your secret key
const stripeClient = stripe("------Keys Here----");

// Create an Express app
const app = express();
const port = 3000; // Or any port you prefer

// Endpoint to list recent charges
app.get('/charges', async (req, res) => {
    try {
        const charges = await stripeClient.charges.list({
            limit: 10 // Retrieve the last 10 charges (adjust as needed)
        });

        res.json(charges.data);

    } catch (error) {
        console.error('Error fetching charges:', error);
        res.status(500).send({ error: 'Failed to retrieve charges' });
    }
});
app.get('/richtest', async (req, res) => {
    const charges =  await stripeClient.charges.list({
        created: {gt: 1677672000, lt: 1678968000},
        limit: 100
    })
    console.log(charges)
});


// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
const stripe = require('stripe');
const express = require('express');
// Initialize Stripe with your secret key
const stripeClient = stripe("sk_test_51Jc7EcG0mjB1TJvND7xa2hf0A1tz5Zgo3gJCOB6vklOlYaoAgEGdMNni54Duz6fT1vxspJvrD2xWi1ZtUZr4hBhf00EJDxZIoi");

async function getChargesBetweenDates(startDate, endDate, startingAfter = null) {
    try {
        const params = {
            created: {
                gte: Math.floor(startDate.getTime() / 1000),
                lte: Math.floor(endDate.getTime() / 1000)
            },
            limit: 100
        };

        if (startingAfter) {
            params.starting_after = startingAfter;
        }

        const charges = await stripeClient.charges.list(params);
        return charges;
    } catch (error) {
        console.error('Error fetching charges:', error);
        throw error;
    }
}

// Function to fetch all charges
async function fetchAllCharges(startDate, endDate) {
    let allCharges = [];
    let hasMore = true;
    let startingAfter = null;

    while (hasMore) {
        const page = await getChargesBetweenDates(startDate, endDate, startingAfter);
        allCharges = allCharges.concat(page.data);
        hasMore = page.has_more;
        startingAfter = page.data[page.data.length - 1].id; // ID of the last charge
    }

    return allCharges;
}

// Example usage:
const startDate = new Date('2023-12-20');
const endDate = new Date('2023-12-26');

fetchAllCharges(startDate, endDate)
    .then(charges => {
        console.log('All Filtered Charges:', charges);
        console.log('Total Number of Charges:', charges.length);
    })
    .catch(error => {
        console.error('Error:', error);
    });
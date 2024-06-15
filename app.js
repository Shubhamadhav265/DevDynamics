const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let visits = {}; //Has to be set for unique Customer Visit count...

// Track a visit to a website by a specific customer using a specific device
app.post('/api/visit', (req, res) => {
    const { customerId, deviceId, websiteId } = req.body;
    if (!visits[websiteId]) {
        visits[websiteId] = {};
    }
    if (!visits[websiteId][customerId]) {
        visits[websiteId][customerId] = new Set();
    }
    visits[websiteId][customerId].add(deviceId);
    res.status(200).json({ message: "Visit tracked successfully" });
});

// Retrieve the number of visits a specific customer has made to a specific website
app.get('/api/customer-visits', (req, res) => {
    const { customerId, websiteId } = req.query;
    if (!visits[websiteId] || !visits[websiteId][customerId]) {
        return res.json({ customerId, websiteId, visitCount: 0 });
    }
    res.json({ customerId, websiteId, visitCount: visits[websiteId][customerId].size });
});

// Retrieve the total number of visits to a specific website by all customers
app.get('/api/total-visits', (req, res) => {
    const { websiteId } = req.query;
    if (!visits[websiteId]) {
        return res.json({ websiteId, totalVisitCount: 0 });
    }
    let totalVisitCount = 0;
    for (let customerId in visits[websiteId]) {
        totalVisitCount += visits[websiteId][customerId].size;
    }
    res.json({ websiteId, totalVisitCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



const runDriver = () => {
    const axios = require('axios');

    const trackVisit = async (customerId, deviceId, websiteId) => {
        await axios.post('http://localhost:3000/api/visit', { customerId, deviceId, websiteId });
    };

    const getCustomerVisits = async (customerId, websiteId) => {
        const response = await axios.get('http://localhost:3000/api/customer-visits', { params: { customerId, websiteId } });
        console.log(response.data);
    };

    const getTotalVisits = async (websiteId) => {
        const response = await axios.get('http://localhost:3000/api/total-visits', { params: { websiteId } });
        console.log(response.data);
    };

    const run = async () => {
        await trackVisit('customer1', 'device1', 'website1');
        await trackVisit('customer1', 'device2', 'website1');
        await trackVisit('customer2', 'device3', 'website1');

        await getCustomerVisits('customer1', 'website1');
        await getCustomerVisits('customer2', 'website1');
        await getCustomerVisits('customer3', 'website1');  // Edge case: No visits

        await getTotalVisits('website1');
        await getTotalVisits('website2');  // Edge case: No visits
    };

    run();
};

runDriver();
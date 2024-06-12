# Website Hit Counter API

This project implements a website hit tracker using Node.js and Express.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Server](#running-the-server)
5. [API Documentation](#api-documentation)
    - [Visit Website](#visit-website)
    - [Get Website Visit Count for Customer](#get-website-visit-count-for-customer)
    - [Get Overall Website Hit Count](#get-overall-website-hit-count)
6. [Driver Function](#driver-function)
7. [Hosting the Application](#hosting-the-application)


## Introduction

This project provides a simple implementation of a website hit counter system using Node.js and Express. It allows you to track visits to a website by different customers using various devices. The main features include:

- Tracking visits to a website by different customers.  
- Ensuring each customer visit is counted only once, regardless of the device used.
- Retrieving the number of visits a specific customer has made to a specific website.
- Retrieving the total number of visits to a specific website by all customers.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/website-hit-counter.git
   cd website-hit-counter

2. Install Dependencies
     npm install

## Running the Server
node app.js

## API Documentation
1. Visit Website
Endpoint: POST /api/visit

Description: Track a visit to a website by a specific customer using a specific device.

Request Body:
{
  "customerId": "customer1",
  "deviceId": "device1",
  "websiteId": "website1"
}

Response:
{
  "message": "Visit tracked successfully"
}

2. Get Website Visit Count for Customer
Endpoint: GET /api/customer-visits

Description: Retrieve the number of visits a specific customer has made to a specific website.

Parameters:
customerId: The ID of the customer.
websiteId: The ID of the website.

Example Request URL:
bash:
http://localhost:3000/api/customer-visits?customerId=customer1&websiteId=website1

Response:
{
  "customerId": "customer1",
  "websiteId": "website1",
  "visitCount": 1
}



3. Get Overall Website Hit Count
Endpoint: GET /api/total-visits

Description: Retrieve the total number of visits to a specific website by all customers.

Parameters:
websiteId: The ID of the website.

Example Request URL:
bash:
http://13.233.111.96:3000/api/total-visits?websiteId=website2

Response:
{
  "websiteId": "website1",
  "totalVisitCount": 1
}

## Driver Function
  node app.js

## Hosting the Application
  --> ON AWS EC2 Instance





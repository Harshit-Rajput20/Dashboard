const express = require('express');
const axios = require('axios'); // Axios library for making HTTP requests

const app = express();
const port = 3000;

// Define the API endpoint you want to make a GET request to
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Replace with your desired API URL

app.get('/', (req, res) => {
   
    
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

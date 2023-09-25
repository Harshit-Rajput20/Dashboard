const express = require("express");
const path = require('path'); 
const fs = require('fs');
const app = express();


const mysql = require('mysql2');

// Create a connection pool
// const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost', // Replace with your MySQL server host
  user: 'sent', // Your MySQL username
  password: 'Harshit@123', // Initial password of your choice
  database: 'sentiments', // Your MySQL database name (sentiments)
  waitForConnections: true,
  connectionLimit: 10, // Adjust as needed
  queueLimit: 0, // 0 means no limit
});


// Sample query
// const query = 'SELECT * FROM your_table';

// Use the connection pool to execute the query
// pool.query(query, (err, results) => {
//   if (err) {
//     console.error('Error executing query:', err);
//     return;
//   }

//   // Process the query results
//   console.log('Query results:', results);
// });



const dataToInsert = {
    profile_url: 'insta.com',
    posts: JSON.stringify({
      profileURL: 'insta.com',
      posts: [
        {
          posturl: 'hello.com',
          comments: [
            {
              comment: 'hello friends',
              data: { sentiments: 'positive' },
            },
            {
              comment: 'comment2',
              data: { sentiments: 'neutral' },
            },
          ],
        },
      ],
    }),
  };
  
  // SQL query to insert data into the profile_data table
  // const insertQuery = 'INSERT INTO profile_data SET ?';
  
  // // Execute the query
  // pool.query(insertQuery, dataToInsert, (error, results) => {
  //   if (error) {
  //     console.error('Error inserting data:', error);
  //   } else {
  //     console.log('Data inserted successfully:', results);
  //   }
  // });


  const filePath = path.join(__dirname, '../public/index.html');
  console.log(filePath);

  const jsonPath = 'data.json';

  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
  
    // Parse the JSON data
    try {
      const jsonData = JSON.parse(data);
  
      // Now you can access and work with the data

       
      for (const post of jsonData) {
        console.log('Post URL:', post.postUrl);
  
        // Loop through comments for each post
        for (const comment of post.comments) {
          console.log('Comment Analysis:', comment.analised);
        }
      }
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  });

app.get("/" ,(req,res)=>{


  res.sendFile(filePath);

})

app.listen(8001 , ()=>{
 console.log("listening from server");
})
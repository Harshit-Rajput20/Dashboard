const express = require("express");
 

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
  const insertQuery = 'INSERT INTO profile_data SET ?';
  
  // Execute the query
  pool.query(insertQuery, dataToInsert, (error, results) => {
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', results);
    }
  });


app.get("/" ,(req,res)=>{

    console.log("home");

})

app.listen(5000 , ()=>{
 console.log("listening from server");
})
from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import pooling
import json

app = Flask(__name__)

# Create a MySQL connection pool using your provided configuration
mysql_pool = mysql.connector.pooling.MySQLConnectionPool(
    pool_name="mysql_pool",
    pool_size=10,
    pool_reset_session=True,
    host='localhost',
    user='sent',
    password='Harshit@123',
    database='sentiments',
    connection_timeout=30
)

@app.route('/query', methods=['GET'])
def execute_query():
    try:
        # Get a connection from the pool
        connection = mysql_pool.get_connection()

        # Execute your SQL queries here
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM profile_data where id = 15")

        # Fetch results
        results = cursor.fetchall()

        # Close cursor and return results as JSON
        cursor.close()
        connection.close()

        return jsonify(results)

    except Exception as e:
        return str(e)

@app.route('/save-data', methods=['POST'])
def save_data():
    try:
        # Get data from the request
        data = request.get_data()
        print(data)
        data = json.loads(data)
        profile_url = data.get('profile')
        posts = data.get('data')
        print(profile_url)
        print(posts)
        if not profile_url or not posts:
            return jsonify({'error': 'profile_url and posts are required'}), 400

        # Get a connection from the pool
        connection = mysql_pool.get_connection()

        # Create a cursor and insert data into the database
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO profile_data (profile_url, posts) VALUES (%s, %s)",
            (profile_url, json.dumps(posts))
        )

        # Commit changes, close cursor and connection
        connection.commit()
        cursor.close()
        connection.close()

        return jsonify({'message': 'Data saved successfully'}), 200

    except Exception as e:
        print('Error:', str(e))
        return jsonify({'error': 'Error saving data'}), 500

if __name__ == '__main__':
    app.run(debug=False, port=8000, host="0.0.0.0")

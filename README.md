# Booking Service

This Booking Service is part of a hotel management system. It manages room reservations, booking statuses, and maintains a history of all booking operations. The service is built using Node.js, Express, and MongoDB (with MongoDB Atlas as the database).

## Features

- **Create a Booking**: Allows the creation of new bookings for users.
- **Update a Booking**: Allows updating the details and status of existing bookings.
- **Get All Bookings**: Retrieves a list of all bookings.
- **Get a Booking by ID**: Retrieves the details of a specific booking by its ID.
- **Delete a Booking**: Deletes a specific booking by its ID.
- **Booking History**: Maintains a history of changes to each booking's status.

## Technology Stack

- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database to store booking data.
- **Mongoose**: ODM for MongoDB, providing a schema-based solution.
- **dotenv**: Module to load environment variables from a `.env` file.

## Installation
1. Clone the repository:

   \`\`\`bash
   git clone <repository-url>
   cd booking-service
   \`\`\`

2. Install the dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Create a `.env` file in the root directory and add your MongoDB Atlas connection string and port number:

   \`\`\`plaintext
   PORT=3003
   MONGO_URI=mongodb+srv://t3ddyp1ck3r:t3ddyp1ck3r@cluster0.ojzaipx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   \`\`\`

4. Start the server:

   \`\`\`bash
   node src/server.js
   \`\`\`

   The server should now be running on \`http://localhost:3003\`.

## API Endpoints

### Create a Booking

- **URL**: \`/api/bookings\`
- **Method**: \`POST\`
- **Description**: Create a new booking.
- **Request Body**:

  \`\`\`json
  {
    "userId": "user_id_here",
    "roomId": "room_id_here",
    "startDate": "2023-07-08T00:00:00.000Z",
    "endDate": "2023-07-10T00:00:00.000Z"
  }
  \`\`\`

- **Response**:

  \`\`\`json
  {
    "_id": "booking_id_here",
    "userId": "user_id_here",
    "roomId": "room_id_here",
    "startDate": "2023-07-08T00:00:00.000Z",
    "endDate": "2023-07-10T00:00:00.000Z",
    "status": "booked",
    "history": [
      {
        "status": "booked",
        "date": "2023-07-07T00:00:00.000Z",
        "note": "Initial booking"
      }
    ]
  }
  \`\`\`

### Update a Booking

- **URL**: \`/api/bookings/:id\`
- **Method**: \`PUT\`
- **Description**: Update an existing booking.
- **Request Body**:

  \`\`\`json
  {
    "startDate": "2023-07-09T00:00:00.000Z",
    "endDate": "2023-07-11T00:00:00.000Z",
    "status": "checked-in",
    "note": "Guest checked in"
  }
  \`\`\`

- **Response**:

  \`\`\`json
  {
    "_id": "booking_id_here",
    "userId": "user_id_here",
    "roomId": "room_id_here",
    "startDate": "2023-07-09T00:00:00.000Z",
    "endDate": "2023-07-11T00:00:00.000Z",
    "status": "checked-in",
    "history": [
      {
        "status": "booked",
        "date": "2023-07-07T00:00:00.000Z",
        "note": "Initial booking"
      },
      {
        "status": "checked-in",
        "date": "2023-07-09T00:00:00.000Z",
        "note": "Guest checked in"
      }
    ]
  }
  \`\`\`

### Get All Bookings

- **URL**: \`/api/bookings\`
- **Method**: \`GET\`
- **Description**: Retrieve a list of all bookings.
- **Response**:

  \`\`\`json
  [
    {
      "_id": "booking_id_here",
      "userId": "user_id_here",
      "roomId": "room_id_here",
      "startDate": "2023-07-08T00:00:00.000Z",
      "endDate": "2023-07-10T00:00:00.000Z",
      "status": "booked",
      "history": [
        {
          "status": "booked",
          "date": "2023-07-07T00:00:00.000Z",
          "note": "Initial booking"
        }
      ]
    }
  ]
  \`\`\`

### Get a Booking by ID

- **URL**: \`/api/bookings/:id\`
- **Method**: \`GET\`
- **Description**: Retrieve details of a specific booking by its ID.
- **Response**:

  \`\`\`json
  {
    "_id": "booking_id_here",
    "userId": "user_id_here",
    "roomId": "room_id_here",
    "startDate": "2023-07-08T00:00:00.000Z",
    "endDate": "2023-07-10T00:00:00.000Z",
    "status": "booked",
    "history": [
      {
        "status": "booked",
        "date": "2023-07-07T00:00:00.000Z",
        "note": "Initial booking"
      }
    ]
  }
  \`\`\`

### Delete a Booking

- **URL**: \`/api/bookings/:id\`
- **Method**: \`DELETE\`
- **Description**: Delete a specific booking by its ID.
- **Response**:

  \`\`\`json
  {
    "message": "Booking deleted successfully"
  }
  \`\`\`

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

## Members I worked with
Jihad BALLOUT and Zolboo DUUREN

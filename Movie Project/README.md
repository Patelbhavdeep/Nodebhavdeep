# Movie API Backend

A Node.js backend API for managing movies with full CRUD operations.

## Features

- Add movies
- Get all movies
- Get single movie by ID
- Update movie details
- Delete movies

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables

## Installation

1. Clone the repository
```bash
git clone https://github.com/Patelbhavdeep/Nodebhavdeep.git
cd Nodebhavdeep
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with:
```
MONGO_URI=mongodb://127.0.0.1:27017/movie
PORT=2020
```

4. Make sure MongoDB is running locally

5. Start the server
```bash
npm run start
```

## API Endpoints

- POST `/api/movies` - Add a new movie
- GET `/api/movies` - Get all movies
- GET `/api/movies/:id` - Get movie by ID
- PUT `/api/movies/:id` - Update movie
- DELETE `/api/movies/:id` - Delete movie

## Usage with Postman

Import the endpoints above and test the CRUD operations. Make sure to set Content-Type to application/json for POST/PUT requests.
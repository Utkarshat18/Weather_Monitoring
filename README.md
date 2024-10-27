# Weather Monitoring Application

This is a Vite application for monitoring weather data. It allows users to search for a city and view current weather conditions, as well as a forecast for the upcoming days.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Utkarshat18/Weather_Monitoring
   cd weather-monitoring
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your OpenWeather API key:
   ```
   VITE_API_KEY=your_api_key_here
   MONGODB_URI=your_mongodb_uri_here
   ```

## Running the Application

To run the application in development mode, use the following command:

```bash
   npm run dev
   ```

You can then access the application at `http://localhost:5173/`.

## Project Structure

The project is organized as follows:

```
weather-monitoring/
├── backend/ # Contains the backend server code
│ ├── models/ # Mongoose models for MongoDB
│ │ └── Weather.js # Weather data schema
│ ├── server.js # Express server setup
│ └── .env # Environment variables for backend
├── src/ # Contains the frontend application code
│ ├── Component/ # React components
│ │ ├── Container/ # Components that contain other components
│ │ ├── DateTimeLocation/ # Displays current date and time
│ │ ├── Navbar/ # Navigation bar component
│ │ ├── Searchbar/ # Search bar for city input
│ │ └── ... # Other components
│ ├── Services/ # Services for API calls
│ │ └── Weatherservices.js # Functions to fetch weather data
│ ├── App.jsx # Main application component
│ ├── main.jsx # Entry point for React application
│ └── index.css # Global styles
├── .gitignore # Git ignore file
├── package.json # Project metadata and dependencies
├── vite.config.js # Vite configuration
└── README.md # Project documentation
```


## Technologies Used

- **Vite**: A fast build tool for modern web applications.
- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **Express**: A web framework for Node.js to build the backend server.
- **MongoDB**: A NoSQL database for storing weather data.
- **Tailwind CSS**: A utility-first CSS framework for styling.

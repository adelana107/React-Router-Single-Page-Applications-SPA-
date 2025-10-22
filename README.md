🗺️ WorldWise — Smart Travel Tracker

WorldWise is a modern React application that helps users track their travel destinations, view visited cities and countries, and plan future trips.
It uses React Router for page navigation, local JSON Server for backend simulation, and fetch API for loading dynamic city data.

🚀 Features

🌍 View and manage your list of visited cities and countries

🧭 Interactive and organized routing using React Router v6

🧩 Component-based architecture with reusable UI elements

💾 Data persistence powered by a local JSON Server

⚙️ Error handling and loading states for smooth UX

🔑 Dedicated Login, Pricing, and Product pages

🏠 Catch-all route for custom 404 Page Not Found

🧠 Tech Stack

React (Functional Components + Hooks)

React Router DOM

JSON Server (for local API)

Fetch API

CSS Modules / Custom Styling

📂 Project Structure
src/
├── components/
│   ├── CityList.jsx
│   ├── CountryList.jsx
│   ├── City.jsx
│   └── Form.jsx
├── pages/
│   ├── Homepage.jsx
│   ├── Pricing.jsx
│   ├── Product.jsx
│   ├── Login.jsx
│   ├── AppLayout.jsx
│   └── PageNotFound.jsx
├── App.js
└── index.js

⚙️ Setup Instructions

Clone this repository

git clone https://github.com/yourusername/worldwise.git
cd worldwise


Install dependencies

npm install


Start the backend (JSON Server)

npx json-server --watch data/cities.json --port 8000


Start the React app

npm start


Open in your browser:
👉 http://localhost:3000


🌟 About the Project

WorldWise is inspired by the idea of combining travel exploration and data organization.
It allows users to log cities they’ve visited, explore country details, and plan upcoming trips — all through a simple, intuitive React interface.
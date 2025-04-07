Enhanced To-Do App

A responsive and user-friendly To-Do application built with React, Redux Toolkit, and Bootstrap. This version features weather integration for outdoor tasks, simulated authentication, and state management using Redux.

Features

Add indoor and outdoor tasks

View current weather for outdoor tasks using OpenWeatherMap API

Simulated login/logout authentication using Redux

Protected To-Do access (only visible when logged in)

Responsive layout using Bootstrap

Technologies Used

React

Redux Toolkit

React Redux

Redux Thunk

React Bootstrap

OpenWeatherMap API

Getting Started

1. Clone the Repository

2. Install Dependencies

npm install

3. Configure Weather API

Replace YOUR_API_KEY in redux/weatherSlice.js with your OpenWeatherMap API Key.

4. Run the Application

npm start

The app will run locally at: http://localhost:3000

Folder Structure

src/
├── components/
│   ├── Login.js
│   ├── TaskInput.js
│   └── TaskList.js
├── redux/
│   ├── authSlice.js
│   ├── store.js
│   ├── tasksSlice.js
│   └── weatherSlice.js
├── App.js
└── index.js

Simulated Authentication

When the app loads, users are prompted to log in.

Login sets isAuthenticated in Redux and localStorage.

Logout clears both and hides the task list.

Notes

This app does not persist tasks across sessions.

Backend authentication and data storage are not implemented.

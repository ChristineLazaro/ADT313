<<<<<<< HEAD
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './pages/Public/Login/Login';
import Register from './pages/Public/Register/Register'; // Import your Register component
import Dashboard from './pages/Main/Dashboard/Dashboard';
import Main from './pages/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register', // New route for the Register page
    element: <Register />, // Add the Register component here
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: 'dashboard', // Remove the leading slash for nested routes
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 9db2786 (Initialize project using Create React App)
    </div>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Make sure Router is imported
import "./index.css"
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router> {/* Wrap the entire app with Router */}
      <App />
    </Router>
  </StrictMode>
);

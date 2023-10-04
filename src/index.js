import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom
import './index.css';
import CustomRouter from './router/router'; 

const rootElement = document.getElementById('root');

// Use createRoot to render your application
createRoot(rootElement).render(<CustomRouter />);
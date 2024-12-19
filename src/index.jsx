import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import komponen utama
import './styles/style.css'; // Import style jika ada

const root = createRoot(document.getElementById('root'));
root.render(<App />);

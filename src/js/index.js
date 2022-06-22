import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../styles/main.scss';
import '../index.html';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);

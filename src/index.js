import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import {BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, extendBaseTheme} from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
  </ChakraProvider>
);



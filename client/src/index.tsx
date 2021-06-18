import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./theme"
import {BaseContextProvider} from './contexts/BaseContext';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>

      <BaseContextProvider >
          <App />
      </BaseContextProvider>
      
    </ChakraProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

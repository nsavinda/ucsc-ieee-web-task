import React from 'react';
import Home from './pages/index';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './components/theme/theme';

function App() {
  return (
    <div >
      <ChakraProvider theme={theme}>
<Home />
</ChakraProvider>
    </div>
  );
}

export default App;

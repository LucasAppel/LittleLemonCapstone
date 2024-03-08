import './App.css';
import Header from './Header';
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import {LinkProvider} from './context/navContext'
import React from 'react';
// @ts-ignore
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <LinkProvider>
      <ChakraProvider>
          <Nav/>
          <Header/>
          <Main/>
          <Footer/>
        </ChakraProvider>
      </LinkProvider>

  );
}

export default App;

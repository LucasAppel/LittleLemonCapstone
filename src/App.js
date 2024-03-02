import './App.css';
import Header from './Header';
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import {LinkProvider} from './context/navContext'


function App() {
  return (
    <LinkProvider>
      <>
        <Nav/>
        <Header/>
        <Main/>
        <Footer/>
      </>
    </LinkProvider>
  );
}

export default App;

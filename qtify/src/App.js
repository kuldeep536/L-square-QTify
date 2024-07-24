//import logo from './logo.svg';
import react, { useContext } from 'react';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
 
import styles from  './App.css';

function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default App;

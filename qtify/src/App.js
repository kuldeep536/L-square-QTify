//import logo from './logo.svg';
// import react, { useContext } from 'react';
import {TopAlbumDataFetch , NewAlbumDataFetch , SongsFetch} from "./components/api/api"
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Section from "./components/Section/Section";
 
import styles from  './App.css';
import { useEffect, useState } from "react";

function App() {
  const [TopAlbumData,setAlbumData] = useState([]); 
  const [NewAlbumData , setNewAlbumData] = useState([]);
  const [SongsFetchData , setSongsFetchData] = useState([]) ;

  const generateData = async ()=>{
  setAlbumData(await TopAlbumDataFetch()); 
  setNewAlbumData(await NewAlbumDataFetch()); 
  setSongsFetchData(await SongsFetch()) 
  // console.log(SongsFetchData)  
  }

  useEffect(()=>{
      generateData()
    
  }, [])
  return (
    <div className={styles.App}>
      <Navbar songs={SongsFetchData}></Navbar>
      <Hero></Hero>
      <div style={{marginBottom: '30px'}}>
        <Section data={TopAlbumData} title="Top Albums" />
      </div>
      <div style={{marginBottom: '30px'}}>
        <Section data={NewAlbumData} title="New Albums" />
      </div>
    </div>
  );
}

export default App;

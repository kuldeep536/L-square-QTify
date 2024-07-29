//import logo from './logo.svg';
// import react, { useContext } from 'react';
import {TopAlbumDataFetch , NewAlbumDataFetch , SongsFetch, fetchGenreList} from "./components/api/api"
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Section from "./components/Section/Section";
import GenreSection from "./components/GenreSection/Genre"; 
import styles from  './App.css';
import FAQAccordion from "./components/FAQ/Faq";
import { useEffect, useState } from "react";

function App() {
  const [TopAlbumData,setAlbumData] = useState([]); 
  const [NewAlbumData , setNewAlbumData] = useState([]);
  const [SongsFetchData , setSongsFetchData] = useState([]) ;
  const [GenreData , setGenreData] = useState([]); 

  const generateData = async ()=>{
  setAlbumData(await TopAlbumDataFetch()); 
  setNewAlbumData(await NewAlbumDataFetch()); 
  setSongsFetchData(await SongsFetch()) 
  setGenreData(await fetchGenreList())
  console.log(TopAlbumData)
  console.log(NewAlbumData)
  console.log(SongsFetchData)
  console.log(GenreData)  
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
      <hr  className={styles.divider}/>
      <div style={{marginBottom: '30px'}}>
        <GenreSection data={SongsFetchData} title="Songs" genreList={GenreData}></GenreSection>
      </div>
      <hr className={styles.divider}/>
      <FAQAccordion />
    </div>
  );
}

export default App;

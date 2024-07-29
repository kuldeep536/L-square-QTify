import axios from "axios"
const Backend_Link = "https://qtify-backend-labs.crio.do"; 


async function TopAlbumDataFetch(){
    try{
        let response  = await axios.get(`${Backend_Link}/albums/top`); 
        console.log(response)
        return response.data
    }catch(error){
        throw new Error("Error from fetching album data", error)
    }
}
async function NewAlbumDataFetch(){
    try{
        let response = await axios.get(`${Backend_Link}/albums/new`); 
        console.log(response.data)
        return response.data
    }catch(error){
        throw new Error("Error from fetching New Album data", error)
    }
}

async function fetchGenreList(){
    try{
        const allObj = {
            key: "all",
            label: 'All'
        }
        const res = await axios.get(`${Backend_Link}/genres`);
        const genreData = res.data.data;
        genreData.unshift(allObj);
        console.log(genreData)
        return genreData;
    } catch (err){
        console.log(err);
    }
}
 
async function SongsFetch(){
    try{
        let response = await axios.get(`${Backend_Link}/songs`); 
        console.log(response.data); 
        return response.data ; 
    }catch(error){
        throw new Error("Error while fetching Songs data", error)
    }
}
export {TopAlbumDataFetch , NewAlbumDataFetch ,SongsFetch ,fetchGenreList}
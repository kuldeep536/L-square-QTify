import axios from "axios"
const Backend_Link = "https://qtify-backend-labs.crio.do"; 


async function TopAlbumDataFetch(){
    try{
        let response  = await axios.get(`${Backend_Link}/albums/top`); 
        console.log(response.data)
        return response.data
    }catch(error){
        throw new Error("Error from fetching album data", error)
    }
}
export {TopAlbumDataFetch}
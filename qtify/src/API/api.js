import axios from 'axios';

export const BackendPoint='https://qtify-backend-labs.crio.do/';

export const fetchTopAlbums= async()=>{
    try{
        let response= await axios.get(`${BackendPoint}albums/top`);
        return response.data
    }
    catch(error){
        console.error(error);
    }
}

export const fetchNewAlbums= async()=>{
    try{
        let response= await axios.get(`${BackendPoint}albums/new`);
        return response.data
    }
    catch(error){
        console.error(error);
    }
}

export const fetchSongs= async()=>{
    try{
        let response= await axios.get(`${BackendPoint}songs`);
        return response.data
    }
    catch(error){
        console.error(error);
    }
}